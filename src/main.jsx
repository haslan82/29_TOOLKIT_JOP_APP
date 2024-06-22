import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/style.scss"
import { Provider } from 'react-redux'
import store from './constants/app/store.js'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store} >
    <App />
  </Provider>
   < ToastContainer />
   </React.StrictMode>
)
