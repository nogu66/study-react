import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Header } from '../components/Header';

export default function Home() {
	const foo = 1;
	
	const handleClick = (e) => {
		console.log(e.target.href);
		e.preventDefault();
		alert(foo);
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header/>
			<Main page="index"/>
			<Footer/>
		</div>
	);
}
