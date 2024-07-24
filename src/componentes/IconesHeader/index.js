import styled from 'styled-components'
import perfil from '../../imagens/perfil.png'
import sacola from '../../imagens/sacola.png'


const ListaIcones = styled.ul`

    display: flex;
    gap: 10px;
    align-items: center;
    margin-left: 20px;
    margin-left: 8px;
`

const icones = [perfil, sacola]


const Icone = styled.img`
    width: 27px;
    cursor: pointer;
`


function IconesHeader(){
    return(

        <ListaIcones>
            {icones.map((icone)=> (
                <li><Icone src={icone}/></li>
            ))}
        </ListaIcones>

    )
}

export default IconesHeader