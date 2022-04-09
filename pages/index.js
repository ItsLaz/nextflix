import Head from 'next/head';
import Image from 'next/image';

import Banner from '../components/banner/Banner';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card/Card';

import styles from '../styles/Home.module.css';
import SectionCards from '../components/SectionCards/SectionCards';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Nextflix</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar username="joe@mama.com" />

            <Banner
                title="Shrek"
                subTitle="big green ogre AUUUGHH"
                imgUrl="/static/shrek.jpg"
            />

            <div className={styles.sectionWrapper}>
                <SectionCards title="Disney" />
            </div>
        </div>
    );
}
