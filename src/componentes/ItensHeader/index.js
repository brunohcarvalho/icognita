import styled from 'styled-components'
import Logo from '../Logo'
import CaixaBusca from '../CaixaBusca'
import IconesHeader from '../IconesHeader'

const Opcoes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    @media (max-width: 799px){
        display: none;
    }
`

function ItensHeader(){
    return(
    <Opcoes>
        <Logo/>
        <CaixaBusca/>
        <IconesHeader/>
    </Opcoes>
    )
}

export default ItensHeader

