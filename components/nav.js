import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/style.module.css'


export default function Nav() {
  return(
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler text-black" 
          id="menu_btn"
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="align-self-center">Menu</span>
          <i className="bi bi-list fs-1"/>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="nav navbar-nav">
            <li><i className="bi bi-facebook" onClick={() => alert('Prochainement !')}></i></li>
            <li><a href="\">Accueil</a></li>
            <li><a href="gallery">Galerie</a></li>
            <li><a href="prices">Tarifs</a></li>
            <li><a href="contact">Contact</a></li>
            <li><i className="bi bi-instagram" onClick={() => alert('Prochainement !')}></i></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}