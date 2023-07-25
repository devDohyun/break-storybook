import styled from '@emotion/styled'
import Button from '@/components/common/Button'

const App = () => {
  return (
    <StyledContainer>
      <strong>안녕, 세상!</strong>
      <Button type="button">눌러보기</Button>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  background-color: ivory;
`

export default App
