import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{  
    margin: 0px;
    padding: 0px;
    cursor: default;
    box-sizing: border-box;
  }
  li{
    list-style: none;
  }


  body{
    background-color: #0c0c0c;
    background-attachment: fixed;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
