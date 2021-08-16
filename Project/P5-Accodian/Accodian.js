import React, { useState } from 'react'
import Sdata from './Sdata';
import MyAccodian from './MyAccodian'
const Accodian = () => {
    const [data, setData] = useState(Sdata); //data initially stores all the api data
    return (
        <> <section className="main_div">
           <h1>All about React</h1>
            {
                data.map((val) => {
                    const { id } = val;
                    return <MyAccodian key={id} {...val} /> //pass all the data in val to map()
                })
            }
        </section>

        </>
    );
}
export default Accodian;