import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Login.module.css';

const Login = () => {
    const handleLoginWithEmail = (e) => {
        e.preventDefault();
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Nextflix Signin</title>
            </Head>
            <header className={styles.header}>
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

            <main className={styles.main}>
                <div className={styles.mainWrapper}>
                    <h1 className={styles.signinHeader}>Sign In</h1>
                    <input
                        type="text"
                        placeholder="Email address"
                        className={styles.emailInput}
                    />
                    <p className={styles.userMsg}>Enter valid email</p>
                    <button
                        onClick={handleLoginWithEmail}
                        className={styles.loginBtn}
                    >
                        Sign In
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
