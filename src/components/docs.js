
import React, { useEffect, useRef, useState } from 'react'
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import ModalComponent from './Modal';
import { useNavigate } from 'react-router-dom';
export default function Docs({database}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState('');

    const [docsData, setDocsData] = useState([]);

    const collectionRef = collection(database, 'docsData')
    const addData = () => {
        addDoc(collectionRef, {
            title: title,
            
        })
        .then(() => {
            alert('Data Added');
            handleClose()
        })
        .catch(() => {
            alert('Cannot add data')
        })
    }

    const isMounted = useRef();

    const getData = () => {
        onSnapshot(collectionRef, (data) => {
            setDocsData(data.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            }))
        })
    }
    useEffect(()=>{
        if(isMounted.current){
            return 
        }

        isMounted.current = true;
        getData()
    })

    let navigate = useNavigate();
    const getID = (id) => {
        navigate(`/editDocs/${id}`)
    }
  return (
    <div className='docs-main'>
        <h1>EverNote</h1>

        <button className='add-docs' onClick={handleOpen}>
            Add a document
        </button>

        <div  className='grid-main'>
            {docsData.map((doc) => {
                return (
                    <div className='grid-child' onClick={() => getID(doc.id)}>
                        <p>{doc.title}</p>
                        
                    </div>
                )
            })}
        </div>
        <ModalComponent
            open={open}
            setOpen={setOpen}
            title={title}
            setTitle={setTitle}
            addData={addData}
        />

        
    </div>
  )
}