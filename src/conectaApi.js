async function listaLivros(){
    const conexao = await fetch('http://localhost:3000/livros')
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

export const conectaApi = {
    listaLivros
}