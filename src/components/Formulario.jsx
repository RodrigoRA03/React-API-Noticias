import React from 'react'
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

export default function Formulario({guardarCategoria}) {

    const OPCIONES = [
        { value:'general' , label:'General' },
        { value:'business' , label:'Negocios' },
        { value:'entertainment' , label:'Entretenimiento' },
        { value:'health' , label:'Salud' },
        { value:'science' , label:'Ciencia' },
        { value:'sports' , label:'Deportes' },
        { value:'technology' , label:'Tecnologia' }


    ]

    //utilizar custom hook
    const [ categoria, SelectNoticias ] = useSelect('general',OPCIONES);

    //submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return (
       <div className={`${styles.buscador} row`}>
           <div className="col s12 m8 offset-m2">
               <form onSubmit={buscarNoticias}>
                   <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
                   <div className="input-field col s9">
                    <SelectNoticias/>
                   </div>
                   <div className="input-field col s3">
                   <button type="submit" className={`${styles['btn-block']} waves-effect waves-light btn`}>
                    <i className="material-icons left">search</i>Buscar
                    </button>
                   </div>
               </form>
           </div>
       </div>
    )
}
