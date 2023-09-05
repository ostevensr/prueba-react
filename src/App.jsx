import { useState } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './components/MiApp/MiApi';
import Buscador from './components/Buscador/Buscador';

function App() {

  return (
    <>
    <div className='cont-productos'>
      <MiApi/>
    </div>
    </>
  )
}

export default App
