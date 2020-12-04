import _ from 'lodash'
import db from './db.json'

// X\u2082'
// https://csvjson.com/csv2json

const specialMap = {
  _0: '\u2080',
  _1: '\u2081',
  _2: '\u2082',
  _3: '\u2083',
  _4: '\u2084',
  _5: '\u2085',
  _6: '\u2086',
  _7: '\u2087',
  _8: '\u2088',
  _9: '\u2089',
}

function formatSpecials(str) {
  return _.reduce(
    _.toPairs(specialMap),
    (s, mapping) => s.replace(mapping[0], mapping[1]),
    str
  )
}

function prepareDb() {
  return _.map(db, c => ({ ...c, formula: formatSpecials(c.formula) }))
}

function formatQuestionText(type, prompt, chem) {
  switch (type) {
    case 'latin':
      return `Aký je latinský názov pre '${chem[prompt]}'`
    case 'slovak':
      return `Aký je slovenský názov pre '${chem[prompt]}'`
    case 'formula':
      return `Aký je vzorec pre '${chem[prompt]}'`
    default: {
      alert('Invalid chem prop type')
      throw new Error('Invalid chem prop type')
    }
  }
}

function pickNDistinct(n, min, max, except) {
  return _.take(_.shuffle(_.difference(_.range(min, max), except)), n)
}

function createQuestion(type, chem, falseChems) {
  const allTypes = ['latin', 'slovak', 'formula']
  let targetTypes = type == 'all' ? allTypes : [type]

  const targetType = _.sample(targetTypes)
  const promptType = _.sample(_.difference(allTypes, [targetType]))

  return {
    sentence: formatQuestionText(targetType, promptType, chem),
    targetType,
    chem,
    falseChems,
    options: _.shuffle(_.concat(falseChems, [chem])),
  }
}

export function createQuizState({ quizType, questionCount }) {
  const d = prepareDb(db)
  const rdb = _.shuffle(d)
  const indices = _.range(0, questionCount)

  return _.map(indices, ind => {
    const chem = rdb[ind]
    const falseChems = _.map(
      pickNDistinct(3, 0, rdb.length, [ind]),
      fi => rdb[fi]
    )

    return createQuestion(quizType, chem, falseChems)
  })
}
