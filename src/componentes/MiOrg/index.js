import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) =>{
    //Estado - hooks 
    //useState
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(ValorInicial)
    console.log(props);

    // const [mostrar, actualizarMostrar] = useState(true)  
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar Elemento", !mostrar);
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="titulo">Mi organizacion </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg