import styled from 'styled-components'

const StyledPage = styled.div`
  padding: 36px;
`

export const Page = ({ heading, children }) => {
  return (
    <StyledPage>
      <h1>{heading}</h1>
      {children}
    </StyledPage>
  )
}
