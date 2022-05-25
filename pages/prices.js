import Head from "next/head";
import Image from "next/image";
import Nav from "../components/nav";
import { useState } from "react";
import styles from "../styles/style.module.css";

export default function Prices() {
  return(
    <main className={`${styles.container} ${styles.prices}`}>
      <div className={`${styles.menu}`}>
        <Nav />
      </div>

      <div className={`${styles.gridContainer}`}>
        <div id={`${styles.solo}`}>
          <div className={`${styles.content}`}>
            <h2>Juste moi</h2>
            <p>Pour une personne, en extérieur ou en studio</p>
            <p>130€</p>
          </div>            
        </div>
        
        <div id={`${styles.duo}`}>
          <div className={`${styles.content}`}>
            <h2>Pour deux</h2>
            <p>Pour deux personnes, en extérieur ou en studio</p>
            <p>195€</p>
          </div>            
        </div>

        <div id={`${styles.family}`} >
          <div className={`${styles.content}`}>
            <h2>Famille</h2>
            <p>Pour la famille ou les amis jusqu'à 4 personnes, en extérieur ou en studio</p>
            <p>220€ (+30€ par personne au-delà de 4, hormis enfant de moins de deux ans)</p>
          </div>    
        </div>
        
        <div id={`${styles.pregnancy}`} >
          <div className={`${styles.content}`}>
            <h2>Il était une fois</h2>
            <p>Photos de grossesse à domicile, en extérieur ou en studio</p>
            <p>160€</p>
          </div>         
        </div>
        
        <div id={`${styles.baby}`} >
          <div className={`${styles.content}`}>
            <h2>Mon bébé</h2>
            <p>Photos d'enfant jusqu'à 3 ans, à domicile</p>
            <p>100€</p>
          </div>          
        </div>
        
        <div id={`${styles.wedding}`} >
          <div className={`${styles.content}`}>
            <h2>J'immortalise l'évènement</h2>
            <p>Mariage, baptême, communion, ...</p>
            <p>Prestation sur devis</p>
          </div>          
        </div>

      </div>
    </main>
  )
}
