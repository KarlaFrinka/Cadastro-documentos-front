import './index.css'
import { useState } from 'react';


function CadastroDocumentos() {

  const [formValues, setFormValues] = useState({});
  const [code, setCode] = useState();
  const [title, setTitle] = useState();
  const [process, setProcess] = useState("processo1");
  const [category, setCategory] = useState();
  const [file, setFile] = useState('testFile');

  const handleSubmit = async () => {
    setValues()
    console.log(formValues)
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(formValues)
    };


    const info = await fetch('https://localhost:7170/Documento', requestOptions)
    console.log('resp', info.status)
  };

  const setValues = () => {
    setFormValues({
      code: code,
      title: title,
      process: process,
      category: category,
      file: file
    })
  }

  const uploadImage = async (e)=>{
    const file=e.target.files[0]
    const base64= await convertBase64(file)
    setBaseImage(base64);
  };

  const convertBase64=(file)=>{
    return new Promise((resolve,reject)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () =>{
        resolve(fileReader.result);
      };

      fileReader.onerror((error) => {
        reject(error);
      });
    });
  };


  return (
    <div className='main-container'>
      <h1 className='Cadastrar'>Cadastrar Documentos</h1>
      <input type="number" name="code" placeholder="Código" onChange={(e) => setCode(e.target.value)} />
      <input type="text" name="title" placeholder="Título" onChange={(e) => setTitle(e.target.value)} />

      <select name="process" onChange={(e) => setProcess(e.target.value)} value= {process}>
        <option value="processo1">Processo 1</option>
        <option value="processo2">Processo 2</option>
        <option value="processo3">Processo 3</option>
      </select>

      <input type="text" name="category" placeholder="Categoria" onChange={(e) => setCategory(e.target.value)} />
      <input type="file" accept=".pdf, .doc, .docx, .xls, .xlsx" onChange={(e) => uploadImage(e)}/>


      <button type="submit" onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

export default CadastroDocumentos;
