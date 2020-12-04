import { Component } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

const ErrorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export class ErrorBoundary extends Component {
  constructor(p) {
    super(p)
    this.state = {
      err: null,
    }
  }

  restart() {
    localStorage.clear()
    this.setState({ err: null })
    location.reload()
  }

  componentDidCatch(err) {
    this.setState({ err })
  }

  render() {
    if (!this.state.err) {
      return this.props.children
    } else {
      return (
        <ErrorPageContainer>
          V aplikácií došlo k chybe je nutný reštart
          <Button type="primary" size="large" onClick={this.restart.bind(this)}>
            Reštart
          </Button>
        </ErrorPageContainer>
      )
    }
  }
}
