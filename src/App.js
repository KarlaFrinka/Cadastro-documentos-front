import { useState } from 'react';
import './App.css';
import CadastroDocumentos from './pages/CadastroDocumentos/CadastroDocumentos';
import VisualizarDocumentos from './pages/VisualizarDocumentos/VisualizarDocumentos';

function App() {

  return(<>
     <CadastroDocumentos/>
    <VisualizarDocumentos/>
  </>);
}

export default App;