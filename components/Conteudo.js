import { display } from '@mui/system';
import * as React from 'react';
import {useState } from 'react'
import SobreMim from './sobreMim';



export default function Conteudo(props) {

  const [titulo, setTitulo] = useState("")



  return (
    <div style={{display:'fixed', bottom:0,top:'200px',left:'400px',  width:'100%',paddingLeft:'200px', height:'100vh',backgroundColor: props.theme == true? '#f3f3f3': '#f3f3f3'}}>
      <div style={{display:'flex',justifyContent:'center', margin:'0 auto'}}>
      <h2 style={{fontWeight:'400', marginTop:'80px'}}>{props.titulo}</h2>
<SobreMim/>

      </div>
      
    </div>
   
  );
}
