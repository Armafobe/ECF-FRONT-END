import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import styles from '../styles/style.module.css'

export default function Contact() {
  return(
    <main className={`${styles.container} ${styles.contact}`}>
      <div className={styles.menu}>
        <Nav />
      </div>

      <div className="container-fluid row col-12 col-md-6">
        <form
          id={styles.contact_form}
          action='https://formspree.io/f/mayvlzyo'
          method='POST'
          acceptCharset='utf-8'
        >
          <div className={styles.form_item}>
            <label htmlFor="name">Votre nom</label>
            <input type="text" name="name" id="name" placeholder="Christian Duchamp" required />
          </div>

          <div className={styles.form_item}>
            <label htmlFor="email">Votre adresse mail</label>
            <input type="email" nayme="email" id="email" placeholder="email@exemple.com" required />
          </div>

          <div className={styles.form_item}>
            <label htmlFor="subject">Objet de votre demande</label>
            <input type="text" name="subject" id="subject" />
          </div>

          <div className={styles.form_item} style={{ flexDirection: 'column' }}>
            <label htmlFor="message" style={{marginBottom: 15 + 'px'}}>Votre message</label>
            <textarea name="message" id="message" cols="40" rows="10" placeholder="Écrivez votre message" minLength="100"></textarea>
          </div>
          <button type="submit">Envoyer</button>

          <hr/>

          <h3>Ou <a href="tel:0123456789" id={styles.phone}>01.23.45.67.89</a></h3>
        </form>
      </div>
    </main>
  )
}