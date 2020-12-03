import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Radio, Divider } from 'antd'
import _ from 'lodash'
import styled from 'styled-components'

import { quizState, usePersistedState } from '../state'
import { Page } from '../components/page'

const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Options = styled(Radio.Group)`
  display: flex;
  flex-direction: column;
`

const Option = styled(Radio)`
  margin-top: 16px;
`

export const Quiz = ({
  match: {
    params: { order },
  },
}) => {
  const index = Number(order - 1)
  const [quiz, setQuiz] = usePersistedState(quizState)
  const history = useHistory()
  const currentQuestion = quiz[index]

  useEffect(() => {
    if (quiz.length && !currentQuestion) {
      history.push('/prehlad')
    }
  }, [currentQuestion, history, quiz])

  const setAnswer = v =>
    setQuiz([
      ..._.slice(quiz, 0, index),
      { ...currentQuestion, answer: v },
      ..._.slice(quiz, index + 1, quiz.length),
    ])

  const nextQuestion = () => {
    index < quiz.length
      ? history.push(`/quiz/${index + 2}`)
      : history.push(`/prehlad`)
  }

  return (
    <Page heading={`Otázka ${order}/${quiz.length}`}>
      {currentQuestion && (
        <Question>
          <Divider />
          <strong>{currentQuestion.sentence}</strong>
          <Options
            value={currentQuestion.answer}
            onChange={v => setAnswer(v.target.value)}
          >
            {_.map(currentQuestion.options, (o, i) => (
              <Option key={i} value={o[currentQuestion.targetType]}>
                {o[currentQuestion.targetType]}
              </Option>
            ))}
          </Options>
          <Divider />
          <Button onClick={nextQuestion}>Ďalej</Button>
        </Question>
      )}
    </Page>
  )
}
