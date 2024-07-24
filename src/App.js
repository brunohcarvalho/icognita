import styled from 'styled-components'
import Header from './componentes/Header'
import Main from './componentes/Main'

const AppContainer = styled.div`
  width: 98.91vw;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
     <Header/>
     <Main/>
    </AppContainer>
  )
}

export default App
