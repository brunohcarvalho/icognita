import styled from 'styled-components'
const textoOpcoes = ['INÍCIO','LIVROS','AUTORES','CLUBE DO LIVRO','PROJETO ENIGMA']

const Categorias = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000000;
  padding: 16px;

  @media (max-width: 799px){
    display: none;
  }
`
const ListaCategorias = styled.ul`
  
  display: flex;
  align-items: center;
  gap: 37px;
  padding: 0px 23px;
  
`
  
const ListaItens = styled.p`
  
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  color: #ffffff;
  
  &:hover{
    color: #EDAE49;
    text-shadow: 0px 0px 6px #EDAE49;
  }
`





function OpcoesHeader(){
  return(
    <Categorias>
      <ListaCategorias>
        {textoOpcoes.map((texto) =>(
        <li><ListaItens>{texto}</ListaItens></li>
        ))}
      </ListaCategorias>
    </Categorias>
  )
}

export default OpcoesHeader