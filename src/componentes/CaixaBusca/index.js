import styled from 'styled-components'
import { livro } from '../CardLivros/dados'
import lupa from '../../imagens/lupa.png'
import { useState } from 'react'


const Caixas = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    
`
    
const CaixaPesquisa = styled.input`
    border-radius: 40px;
    border: none;
    background-color: #ffffffab;
    width: 280px;
    height: 34px;
    padding: 6px;
    
    &:focus{
        outline: none;
        cursor: text;
    }
`

const BotaoPesquisa = styled.input`
    width: 40px;
    height: 40px;
    background-image: url('${lupa}');
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    background-color: #00000000;
    cursor: pointer;
`


function CaixaBusca(){
    const [ livrosPesquisados, setLivrosPesquisados] = useState([])
    
    let buscaLivros = livrosPesquisados
    
    return(
        <Caixas>
            <CaixaPesquisa type="search" placeholder='Títulos, Autores, Gêneros e Editoras' onBlur={evento=>{
                const textoDigitado = evento.target.value.toLowerCase()
                const resultadoPesquisa = livro.filter(livro =>
                    livro.titulo.toLowerCase().includes(textoDigitado)||
                    livro.autor.toLowerCase().includes(textoDigitado)||
                    livro.titulo.toLowerCase().includes(textoDigitado)
                )
                setLivrosPesquisados(resultadoPesquisa)
            }}/>
            <BotaoPesquisa type="button" onClick={()=> {
                console.log(buscaLivros)
            }}/>
        </Caixas>
    )
}

// 

export default CaixaBusca
