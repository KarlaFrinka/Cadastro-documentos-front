import "./document.css"
import { AiOutlineFile } from 'react-icons/ai'
import  React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";

const Document = ({ list }) => {

    const getFileByCode = (code) => {
        const fileRef = ref(storage, code) 
        getDownloadURL(fileRef)
    }


    return (
        list.map((item, index) => (
            <>
            {item.file = getFileByCode(item.code)}
            <tr key={index}>
                <td>{item.code}</td>
                <td>{item.title}</td>
                <td>{item.process}</td>
                <td>{item.category}</td>
                <td><a href={item.file} target="_blank"><AiOutlineFile/></a></td>
            </tr>
            </>


        ))

    );
}

export default Document;