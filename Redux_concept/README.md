# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


steps :
1. created store and import configurestore afterthatcreated function 
import { configureStore } from '@reduxjs/toolkit'
 


export const store = configureStore({
  reducer: {
  
  }
})


2. in main.jsx import provider and wrap in a app component in that and send store as a props 
import { Provider } from 'react-redux'
import { store } from './redu/store.jsx'
 <Provider store={store}>
  <App />
</Provider>

3. create slice 

4.register in store 
import counterReducer from '../features/slice'
  reducer: {
    counter: counterReducer

  }
  