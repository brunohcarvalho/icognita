import styled from 'styled-components'
import ItensHeader from '../ItensHeader'
import OpcoesHeader from '../OpcoesHeader'

const HeaderContainer = styled.header`
  box-shadow: 0px 1px 6px #000000;
  background-color: #801519;
}
`

function Header(){
  return(
    <HeaderContainer>
      <ItensHeader/>
      <OpcoesHeader/>     
    </HeaderContainer>
  )
}

export default Header