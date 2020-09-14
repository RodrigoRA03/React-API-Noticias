import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definir la categoria y noticias 
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias , guardarNoticias ] = useState([]);
 
  const consultaAPI = async () =>{
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=eb53ff05cff74a17b08cea8d90d97f36`;
    const res = await fetch(url);
    const noticias = await res.json();
    guardarNoticias(noticias.articles)
}

useEffect(() => {
 consultaAPI();
}, [categoria])

  return (
    <Fragment>
      <Header titulo={"Noticias Mexico"}/>
      <section>
        <div className="container white">
          <Formulario
           guardarCategoria={guardarCategoria}
           />
           <ListadoNoticias
           noticias={noticias}
           />
        </div>
      </section>
    </Fragment>
   
  );
}

export default App;
