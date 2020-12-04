import _ from 'lodash'
import db from './db.json'

// X\u2082'
// https://csvjson.com/csv2json

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
  const rdb = _.shuffle(db)
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
