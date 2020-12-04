import styled from 'styled-components'
import { Button, Steps } from 'antd'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'
import { ErrorBoundary } from './error-boundary'
import { usePersistedState, inTestState, quizState } from '../state'

const StyledPage = styled.div`
  padding: 36px;
  height: 100%;
`

const StyledSteps = styled(Steps)`
  margin-bottom: 24px;
`

const StyledStep = styled(Steps.Step)`
  &:not(.ant-steps-item-disabled) {
    cursor: pointer;
  }
`

const ResetButton = styled(Button)`
  position: absolute;
  bottom: 50px;
  right: 50px;
  align-self: flex-end;
  margin-top: auto;
`

export const Page = ({ step, children }) => {
  const history = useHistory()
  const [inTest] = usePersistedState(inTestState)
  const [quiz] = usePersistedState(quizState)
  const redirect = p => () => history.push(p)
  const restartApp = () => {
    localStorage.clear()
    location.reload()
  }
  return (
    <ErrorBoundary>
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
        <ResetButton onClick={restartApp}>Resetovať aplikáciu</ResetButton>
      </StyledPage>
    </ErrorBoundary>
  )
}
