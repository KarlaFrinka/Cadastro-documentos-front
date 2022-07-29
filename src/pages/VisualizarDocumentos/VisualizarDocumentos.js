import "./index.css"
import Documento from "../../components/document"

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

    return (
        <div>
            <h1>Lista de documentos</h1>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Título</th>
                    <th>Processo</th>
                    <th>Categoria</th>
                    <th>Arquivo</th>
                </tr>
                <Documento list={documents} />
            </table>
        </div>

    )
}
export default VisualizarDocumentos