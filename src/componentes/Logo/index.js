import styled from 'styled-components'
import logo from '../../imagens/logo.svg'

const Logomarca = styled.div`
    display: flex;
    align-items: center;
`
   
const LogoImagem = styled.img`
    width: 60px;
    height: 60px;
    padding: 7px;

`
const LogoTexto = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');      
    color: #ffff;
    font-size: 1.5rem;
    font-family: 'DM Serif Display', serif;
`


function Logo(){
    return(
        <Logomarca>
            <LogoImagem src={logo} alt='logo'/>
            <LogoTexto>icógnita livraria</LogoTexto>
        </Logomarca>
    )
}

export default Logo