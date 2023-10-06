import Image from 'next/image'
import styles from './page.module.css'
import Header from './Header'
import Register from './Register'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <Register/>
      <Footer/>
    </div>
  )
}
