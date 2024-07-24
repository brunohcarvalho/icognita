import styled from 'styled-components'
import CardLivros from '../CardLivros'


const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 4% 15%;
  align-items: center;
`

const Titulo = styled.h1`
  color:#ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.7rem;

`

function Main() {
  return (
    <MainContainer>
      <Titulo>Confira nossas promoções:</Titulo>
       <CardLivros/>
    </MainContainer>
  )
}

export default Main