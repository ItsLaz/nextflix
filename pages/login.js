import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Login.module.css';

const Login = () => {
    return (
        <div>
            <Head>
                <title>Nextflix Signin</title>
            </Head>
            <header>
                <div className={styles.headerWrapper}>
                    <Link className={styles.logoLink} href="/" passHref>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/static/netflix.svg"
                                alt="netflix logo"
                                width="128px"
                                height="38px"
                            />
                        </div>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Login;
