import "./index.css"
import Documento from "../../components/document"
import { useState } from "react"
import { storage } from '../../firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'



function VisualizarDocumentos() {

    const [documents, setDocuments] = useState([]);
    const list = {
        code: 123,
        title: "here",
        process: '2',
        category: "here",
        file:'gs://qualyteamtest.appspot.com/uploaddocuments/CV_PTBR_Neto.pdf'
    }


    const getAllDocuments = async () => {
        const response = fetch('https://localhost:7020/Documento')
        const data = await response.json();

    }

    const [fileList, setFilelist] = useState([])
    const fileListRef = ref(storage, 'uploaddocuments/')

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
                <thead>
                    <tr>
                    <th>Código</th>
                    <th>Título</th>
                    <th>Processo</th>
                    <th>Categoria</th>
                    <th>Arquivo</th>
                    </tr>
                </thead>
                <tbody>
                    <Documento list={documents} />
                </tbody>

            </table>
        </div>

    )
}

export default VisualizarDocumentos