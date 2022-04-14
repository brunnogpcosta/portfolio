import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()


  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Brunno Costa</title>
        <meta name="description" content="Curriculo digital de Brunno Costa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.idiomas}>
          <ul>
            <li>  <Image src='/brazil.png' width={80} height={80}/></li>
            <li>  <Image src='/united-states.png' width={80} height={80}/></li>
        
        
          </ul>
        </div>

        <h1 className={styles.title}>
          {`<`} Brunno Costa{` />`}
        </h1>
        <h2 className={styles.subtitle}>Portfólio Oficial</h2>

        <button className={styles.acessar} onClick={() => router.push('/inicio')}>Acessar</button>
      </main>

    </div>
  )
}
