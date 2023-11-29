import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import Footer from './components/Footer/Footer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {


  return (
    <ChakraProvider>
      <Header />
      <Formulario />
      <Footer />
    </ChakraProvider>
  )
}

export default App
