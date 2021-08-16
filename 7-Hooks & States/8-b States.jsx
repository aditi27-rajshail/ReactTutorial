import react, { useState } from 'react'
const App=()=>{
   let text ="click ME";
   const [ctext, settext]=useState(text);
   
   let cbgc='#800080';
   const [cbg, setbg]=useState(cbgc);
    
   const bgchange=()=>{
    cbgc='#34495e';
    setbg(cbgc);
    text="you clicked me twice";
       settext(text);
   }
   const bgback=()=>{
    cbgc='#FFC0CB';
    setbg(cbgc);
    text="you clicked me thrice";
       settext(text);

   }
    return(
        <div style={{backgroundColor: cbg}}>
        
        <button onClick={bgchange} onDoubleClick={bgback}>{ctext}</button>
        </div>
       
    )
}
export default App;