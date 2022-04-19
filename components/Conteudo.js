import { display } from '@mui/system';
import * as React from 'react';
import {useState } from 'react'



export default function Conteudo(props) {

  const [titulo, setTitulo] = useState("")


  return (
    <div style={{display:'fixed', bottom:0,top:'200px',left:'200px',  width:'100%', height:'90vh'}}>
      <div style={{display:'flex',justifyContent:'center', margin:'0 auto'}}>
      <h2 style={{fontWeight:'400', marginTop:'80px'}}>{props.titulo}</h2>
      </div>
      
    </div>
   
  );
}
