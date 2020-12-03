import { Form, Field } from 'react-final-form'
import _ from 'lodash'
import { Radio, Button, Input } from 'antd'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { useHistory } from 'react-router-dom'

import { Page } from '../components/page'
import { composeValidators, isNumber, min, required } from '../validators'
import { quizState, setupState, usePersistedState } from '../state'

import { createQuizState } from '../quiz-util'

const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Control = styled.div`
  margin: 16px 0;
`

const Label = styled.label`
  font-weight: bold;
`

const RadioContainer = styled(Radio.Group)`
  display: flex;
  flex-direction: column;
`

const Error = styled.div`
  font-weight: bold;
  color: red;
`

export const Setup = () => {
  const [setup, setSetup] = useRecoilState(setupState)
  const [, setQuiz] = usePersistedState(quizState)
  const history = useHistory()

  return (
    <Page heading="Nastavenie testu">
      <Form
        initialValues={setup}
        onSubmit={vals => {
          setSetup(vals)
          const newQuizState = createQuizState(vals)
          setQuiz(newQuizState)
          _.defer(() => history.push('/quiz/1'))
        }}
        render={({ handleSubmit }) => (
          <FormLayout onSubmit={handleSubmit}>
            <Control>
              <Label>Typ testu</Label>
              <Field
                name="quizType"
                type="string"
                validate={required()}
                render={({ input, meta }) => (
                  <>
                    <RadioContainer {...input}>
                      <Radio value="all">Všetko</Radio>
                      <Radio value="slovak">Slovenské názvoslovie</Radio>
                      <Radio value="latin">Latinské názvoslovie</Radio>
                      <Radio value="formula">Značky</Radio>
                    </RadioContainer>
                    <Error>{meta.error}</Error>
                  </>
                )}
              />
            </Control>

            <Control>
              <Label>Počet otázok</Label>
              <Field
                name="questionCount"
                validate={composeValidators(required(), isNumber(), min(1))}
                render={({ input, meta }) => (
                  <>
                    <Input {...input} />
                    <Error>{meta.error}</Error>
                  </>
                )}
              />
            </Control>

            <Button htmlType="submit">Začať test</Button>
          </FormLayout>
        )}
      />
    </Page>
  )
}
