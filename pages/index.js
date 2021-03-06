import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name-='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, et.
          Maxime in corporis minima molestiae molestias provident doloremque
          explicabo architecto soluta voluptas! Est dignissimos quia debitis
          fugiat ratione quisquam totam provident tenetur vero eligendi impedit
          cupiditate non tempora sequi repudiandae repellendus quibusdam ut
          earum a aliquid quos, voluptatum deleniti? Consequatur.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus molestias praesentium possimus ipsa architecto qui
          quam, magni inventore odio odit, est nam quis, iusto autem tenetur!
          Pariatur delectus velit omnis cupiditate minima error fugit fugiat
          voluptate quae eos. Consequatur libero quo vero officia minus corporis
          neque eveniet obcaecati, ex voluptate.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
