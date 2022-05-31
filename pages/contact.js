import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import styles from '../styles/style.module.css'
import Logo from '../public/pictures/Logo.jpg'

export default function Contact() {
  return(
    <main className={`${styles.container} ${styles.contact}`}>
      <div className={styles.menu}>
        <Nav />
      </div>

      <div className={`container-fluid ${styles.contact_holder}`}>
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
            <textarea name="message" id="message" rows="10" placeholder="Écrivez votre message" minLength="100"></textarea>
            <button className={styles.contactSubmit} type="submit">Envoyer</button>
          </div>

          <div className={styles.form_footer}>
            <Image
            src={Logo}
            className={styles.logo}
            width={140}
            height={140}
            alt="Logo"
            />
            <h3><a href="tel:0123456789" id={styles.phone}>01.23.45.67.89</a></h3>
          </div>
          <h4>Tout le contenu de ce site est purement imaginatif et lié à mes études de développement web. Merci pour votre compréhension.</h4>
        </form>
      </div>
    </main>
  )
}