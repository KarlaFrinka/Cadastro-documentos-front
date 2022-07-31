import "./index.css"
import Documento from "../../components/document"
import { useState } from "react"
import { storage } from '../../firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'



function VisualizarDocumentos() {

    const documents = [
        {
            code: "123",
            title: "akarla",
            process: "processo 1",
            category: "rg",
            file: "wwww.google.com"
        }, {
            code: "12365",
            title: "gkarla2",
            process: "processo 3",
            category: "rg",
            file: "wwww.google.com"
        }, {
            code: "123654",
            title: "tkarla3",
            process: "processo 2",
            category: "rg",
            file: "wwww.google.com"
        }, {
            code: "1234",
            title: "hkarla4",
            process: "processo 1",
            category: "rg",
            file: "wwww.google.com"
        },

    ];

const [fileList, setFilelist] = useState([])
const fileListRef = ref (storage, 'uploaddocuments/')

const getFileList = () => {
    listAll(fileListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFilelist((prev) => [...prev, url])
        })
      })
    })
    console.log(fileList)
  }


    return (
        <div>
            <h1>Lista de documentos</h1>
            <table>
                <tbody>
                <thead>
                    <th>Código</th>
                    <th>Título</th>
                    <th>Processo</th>
                    <th>Categoria</th>
                    <th>Arquivo</th>
                </thead>
                </tbody>
                <Documento list={documents} />
            </table>
        </div>

    )
}
export default VisualizarDocumentos