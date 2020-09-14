import React from 'react'

export default function Noticia({noticia}) {
    const { urlToImage, title , description , url} = noticia;
    return (
        <div className="col s12 m6 l4">
         <div className="card">
          <div className="card-image">
              {
                  urlToImage ? 
                  <img src={urlToImage} width="290px" height="180px"/>
                  :
                  <img src="https://logos.flamingtext.com/Word-Logos/Noticias-design-sketch-name.png" width="290px" height="180px"/>

              }
        </div>
        <div className="card-content">
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a href={url}>Ver Noticia Completa</a>
        </div>
      </div>  
        </div>
    )
}
