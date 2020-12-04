import styled from 'styled-components'
import { Steps } from 'antd'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'
import { usePersistedState, inTestState, quizState } from '../state'

const StyledPage = styled.div`
  padding: 36px;
`

const StyledSteps = styled(Steps)`
  margin-bottom: 24px;
`

const StyledStep = styled(Steps.Step)`
  &:not(.ant-steps-item-disabled) {
    cursor: pointer;
  }
`

export const Page = ({ step, children }) => {
  const history = useHistory()
  const [inTest] = usePersistedState(inTestState)
  const [quiz] = usePersistedState(quizState)
  const redirect = p => () => history.push(p)
  return (
    <StyledPage>
      <StyledSteps current={step} size="small">
        <StyledStep
          disabled={inTest}
          onClick={(!inTest && redirect('/')) || undefined}
          title="Nastavenie testu"
        />
        <StyledStep
          disabled={!inTest}
          onClick={(inTest && redirect('/quiz/1')) || undefined}
          title="Test"
        />
        <StyledStep
          disabled={!inTest}
          onClick={(inTest && redirect('/prehlad')) || undefined}
          title="Prehľad otázok"
        />
        <StyledStep
          disabled={inTest || !_.size(quiz)}
          onClick={
            (!inTest && _.size(quiz) && redirect('/hodnotenie')) || undefined
          }
          title="Hodnotenie"
        />
      </StyledSteps>

      {children}
    </StyledPage>
  )
}
