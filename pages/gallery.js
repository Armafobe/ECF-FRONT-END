import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Nav from '../components/nav'
import styles from '../styles/style.module.css'


export default function Gallery({ res, res2 }) {  
  const [targetCategory, setTargetCategory] = useState("");

  let filter = [];

  return(
    <main className={`${styles.container} ${styles.gallery}`}>
      {/* NAVBAR */}
      <div className={`${styles.menu}`}>
        <Nav />
      </div>

      {/* GALLERY FILTER - MOBILE COLLAPSIBLE */}
      <div className={`${styles.filter}`}>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler text-white" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#filterContent" 
              aria-controls="filterContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
              <span>Filtres</span>
              <i className="bi bi-list fs-1"/>
            </button>
          
            <div className="collapse navbar-collapse" id="filterContent">
              <form id="img-sort" action="">
                <ul className="nav navbar-nav">
                  {res2.data.map((category) => (
                    <>
                    <label key={category.id} className={styles.formControl}>
                      <input 
                      type="checkbox" 
                      name="checkbox"
                      id={category.attributes.name}
                      value={category.attributes.name}
                      onClick={(e) => setTargetCategory(e.target.value)}
                      />
                      {category.attributes.name}
                    </label>
                    </>
                  ))}
                </ul>
              </form>
            </div>

          </nav>
        </div>
      </div>

      {/* GALLERY CONTENT */}
      <div className={`${styles.pictures_holder}`}>
        <div className={`${styles.pictures}`}>
          {res.data.filter((photo) => photo.attributes.category.data.attributes.name.includes(filter)).map((photo) => (
            <div key={res.id}>
              <img
              src={`http://localhost:1337` + photo.attributes.img.data[0].attributes.formats.small.url}
              alt={photo.attributes.img.data[0].attributes.formats.small.name}
              />
              <p className="text-white text-center">{photo.attributes.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}


export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:1337/api/photos?populate=*").then((res) => res.json());
    const res2 = await fetch("http://localhost:1337/api/categories?populate=*").then((res2) => res2.json());
    
    return {
      props: { res, res2 }
    };

  } catch (err) {
    console.error(err);
  }
}