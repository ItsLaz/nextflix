import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState } from 'react';

import styles from '../styles/Login.module.css';

const Login = () => {
    const [userMsg, setUserMsg] = useState('');
    const [email, setEmail] = useState('');

    const router = useRouter();

    const handleOnChangeEmail = (e) => {
        setUserMsg('');
        const email = e.target.value;
        setEmail(email);
    };

    const handleLoginWithEmail = (e) => {
        e.preventDefault();

        if (email) {
            // go to dashboard
            if (email === 'a@admin.com') {
                router.push('/');
            } else {
                setUserMsg('Something went wrong logging in');
            }
        } else {
            // show user msg
            setUserMsg('Enter a valid email address');
        }
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
                        onChange={handleOnChangeEmail}
                    />
                    <p className={styles.userMsg}>{userMsg}</p>
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
