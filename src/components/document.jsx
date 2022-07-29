import "./document.css"
import { AiOutlineFile } from 'react-icons/ai'

const Documento = ({ list }) => {

    return (
        list.map((item, index) => (
            <tr key={index}>
                <td>{item.code}</td>
                <td>{item.title}</td>
                <td>{item.process}</td>
                <td>{item.category}</td>
                <td><a href={item.file}><AiOutlineFile/></a></td>
            </tr>

        ))

    );
}

export default Documento;