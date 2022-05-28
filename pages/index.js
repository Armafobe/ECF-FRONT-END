import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import styles from '../styles/style.module.css'

export default function Home() {
  return (
    <main className={`${styles.container} ${styles.home}`}>
      <div className={styles.menu}>
        <Nav />
      </div>
        <h1 className={styles.maintitle}>Charles Cantin - Photographe</h1>
    </main>
  )
}
