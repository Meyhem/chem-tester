import { useEffect } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { Button } from 'antd'
import {
  CheckOutlined,
  ExclamationOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'

import { inTestState, quizState, usePersistedState } from '../state'
import { Page } from '../components/page'

const QuestionSummary = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  font-size: 24px;
  border: 1px solid ${({ $error }) => ($error ? '#e10000' : '#28b900')};
  color: ${({ $error }) => ($error ? '#e10000' : '#28b900')};
  border-radius: 8px;
  width: calc(20% - 10px);
  margin-top: 10px;
  margin-left: 10px;

  &:hover {
    color: ${({ $error }) => ($error ? '#e10000' : '#28b900')};
  }
`

const QuestionSummaryDescription = styled.div`
  font-size: 14px;
`

const SummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
`

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`

export function Summary() {
  const [quiz, setQuiz] = usePersistedState(quizState)
  const [inTest, setInTest] = usePersistedState(inTestState)
  const history = useHistory()

  useEffect(() => {
    if (!inTest) {
      history.push('/hodnotenie')
    }
  }, [inTest, history])

  const submitTest = () => {
    const shouldContinue = confirm(
      'Naozaj chcete ohodnotiť test ? Po hodnotení už nie je možné test zmeniť.'
    )
    if (shouldContinue) {
      setQuiz(
        _.map(quiz, q => ({ ...q, correct: q.answer === q.chem[q.targetType] }))
      )
      setInTest(false)
      _.defer(() => history.push('/hodnotenie'))
    }
  }

  return (
    <Page step={2}>
      <p>
        Prehľad zodpovedaných a nezodpovedaných otázok. Kliknutím na otázku sa
        môžete vrátiť do testu a zmeniť svoju odpoveď.
      </p>
      <SummaryContainer>
        {_.map(quiz, (q, i) => (
          <QuestionSummary key={i} to={`/quiz/${i + 1}`} $error={!q.answer}>
            Otázka č. {i + 1}
            <QuestionSummaryDescription>
              {q.answer ? (
                <>
                  Odpoveď zaznamenaná&nbsp;
                  <CheckOutlined />
                </>
              ) : (
                <>
                  Odpoveď chýba&nbsp;
                  <ExclamationOutlined />
                </>
              )}
            </QuestionSummaryDescription>
          </QuestionSummary>
        ))}
      </SummaryContainer>
      <SubmitContainer>
        <Button type="primary" size="large" onClick={submitTest}>
          Ohodnotiť Test <ArrowRightOutlined />
        </Button>
      </SubmitContainer>
    </Page>
  )
}
