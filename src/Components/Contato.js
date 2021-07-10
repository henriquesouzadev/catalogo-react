import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'

const Contato = () => {
   return (
      <section className={`${styles.contato} animeLeft`}>
         <Head title="Ranek | Contato" description="essa é a página de contato" />
         <img src={foto} alt="máquina de escrever" />
         <div>
            <h1>Entre em contato</h1>
            <ul className={styles.dados}>
               <li>henriquesouzadev@gmail.com</li>
               <li>(21) 99999-9999</li>
               <li>Rua Lorem Ipsum, 1000</li>
            </ul>
         </div>
      </section>
   )
}

export default Contato
