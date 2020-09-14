import React from 'react'

export default function Header({titulo}) {
    return (
        <nav>
         <div className="nav-wrapper  light-blue darken-4">
            <a href="#!" className="brand-logo center">{titulo}</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
         </div>
        </nav>
    );
}
