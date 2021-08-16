import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
    const [addItem, setItem] = useState([]);
    const addnote = (note) => {
        setItem((olddate) => {
            return [...olddate, note];
        })

    }
    const onDelete = (id) => {
        setItem((olddata) => {
            return olddata.filter((curdata, indx) => {
                return indx !== id;
            });
        });

    }

    return (
        <>
            <Header />
            <CreateNote passNote={addnote} />
            {
                addItem.map((val, index) => {
                    return ( 
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                    )
                })
            }
            <Footer />
        </>
    );
}
export default App;
