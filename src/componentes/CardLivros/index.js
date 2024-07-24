import styled from "styled-components"
import { livro } from "./dados"



const OpcoesLivros = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
`
    
const Card = styled.div`
    display: flex;
    color: #ffffff;
    flex-direction:column;
    width: 170px;
    background-color: #ffffff33;
    border-radius: 8px;
    text-align: center;
    padding: 9px;

    &:hover{
        background-color: #ffffffaa;
        color: #801519;
      }

`
    
const CapaLivro = styled.img`
    width: 150px;
    border-radius: 3px;
`
const TituloLivro = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
`
    
const AutorLivro = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.7rem;
    
`
    
const EditoraLivro = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.6rem;
        
`
    
const PrecoLivro = styled.h3`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
`
    
const Dados = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`





function CardLivros(){
    return(
        <OpcoesLivros>
            {livro.map((texto) =>(
                <Card>
                    <div>
                        <CapaLivro src={texto.imagem} alt="capa do livro"></CapaLivro> 
                    </div>
                    <Dados>
                        <div>
                        <TituloLivro>{texto.titulo}</TituloLivro>
                        <AutorLivro>{texto.autor}</AutorLivro>
                        <EditoraLivro>{texto.editora}</EditoraLivro>
                        </div>
                        <div>
                            <PrecoLivro>R$ {texto.preco}</PrecoLivro>
                        </div>
                    </Dados>
                </Card>
            ))}
        </OpcoesLivros>
          
    )
}


export default CardLivros

