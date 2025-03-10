import { useState } from "react";
import "./Campo.css"

const Campo = (props)=>{
    const placeHolderModificado = `${props.placeholder}....`

//Destructuracion 

    const {type ="text"} = props



    const manejarCambio = (e) =>{
        console.log("Cambio", e.target.value);
        props.actualizarValor(e.target.value)
    } 
   
   return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeHolderModificado} 
            required={props.required}  
            value={props.valor} 
            onChange={manejarCambio}
            type={type}
            />
    </div>

}


export default Campo