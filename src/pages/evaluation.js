import styled from 'styled-components'
import { Radio, Divider } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import _ from 'lodash'

import { Page } from '../components/page'
import { quizState, usePersistedState } from '../state'

const Question = styled.strong`
  color: ${({ $correct }) => ($correct ? '#28b900' : '#e10000')};
`

const Options = styled(Radio.Group)`
  display: flex;
  flex-direction: column;
`

const Option = styled(Radio)`
  margin-top: 16px;
  color: ${({ $correct }) => ($correct ? '#28b900' : '#e10000')};
`

const ResultsColumns = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 24px;
  }
`

const MainStat = styled.div`
  display: flex;
  align-items: baseline;
  border-bottom: 2px solid black;
  > * {
    margin-right: 8px;
  }
`

const MainStatLarge = styled.span`
  font-size: 3em;
`

const ResultTable = styled.table`
  th {
    font-weight: normal;
  }
  td {
    font-weight: bold;
    padding-left: 2em;
  }
`

export function Evaluation() {
  const [quiz] = usePersistedState(quizState)

  return (
    <Page heading="Hodnotenie testu">
      <ResultsColumns>
        <MainStat>
          <MainStatLarge>
            {_.size(_.filter(quiz, q => q.correct))}
          </MainStatLarge>
          <span>/</span>
          <span>{_.size(quiz)}</span>
        </MainStat>

        <ResultTable>
          <tbody>
            <tr>
              <th>Správne:</th>
              <td>{_.size(_.filter(quiz, q => q.correct))}</td>
            </tr>
            <tr>
              <th>Nesprávne:</th>
              <td>{_.size(_.filter(quiz, q => !q.correct))}</td>
            </tr>
            <tr>
              <th>Zodpovedaných:</th>
              <td>{_.size(_.filter(quiz, q => !!q.answer))}</td>
            </tr>
            <tr>
              <th>Nezodpovedaných:</th>
              <td>{_.size(_.filter(quiz, q => !q.answer))}</td>
            </tr>
          </tbody>
        </ResultTable>
      </ResultsColumns>
      {_.map(quiz, (q, i) => (
        <div key={i}>
          <Divider />
          <Question $correct={q.correct}>
            {q.correct ? <CheckOutlined /> : <CloseOutlined />}
            {q.sentence}
          </Question>
          <Options value={q.answer}>
            {_.map(q.options, (o, i) => (
              <Option
                key={i}
                value={o[q.targetType]}
                $correct={q.chem[q.targetType] === o[q.targetType]}
              >
                {o[q.targetType]}
              </Option>
            ))}
          </Options>
          <Divider />
        </div>
      ))}
    </Page>
  )
}
