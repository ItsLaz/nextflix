import styles from './Navbar.module.css';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';

import { magic } from '../../lib/magic-client';

const Navbar = () => {
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchEmail = async () => {
            try {
                const { email } = await magic.user.getMetadata();
                const didToken = await magic.user.getIdToken();
                console.log(didToken);
                if (email) {
                    setUsername(email);
                }
            } catch (error) {
                console.error('Error retrieving email', error);
            }
        };
        fetchEmail();
    }, []);

    const handleOnClickHome = (e) => {
        e.preventDefault();
        router.push('/');
    };
    const handleOnClickList = (e) => {
        e.preventDefault();
        router.push('/browse/my-list');
    };
    const handleShowDropdown = (e) => {
        e.preventDefault();
        setShowDropdown(!showDropdown);
    };

    const handleSignOut = async (e) => {
        e.preventDefault();

        try {
            await magic.user.logout();
            router.push('/login');
        } catch (error) {
            console.error('Something went wrong logging out', error);
            router.push('/login');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
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

                <ul className={styles.navItems}>
                    <li className={styles.navItem1} onClick={handleOnClickHome}>
                        Home
                    </li>
                    <li className={styles.navItem2} onClick={handleOnClickList}>
                        My List
                    </li>
                </ul>
                <nav className={styles.navContainer}>
                    <div>
                        <button
                            className={styles.usernameBtn}
                            onClick={handleShowDropdown}
                        >
                            <p className={styles.username}>{username}</p>
                            <Image
                                src="/static/expand_more.svg"
                                alt="expand dropdown"
                                width="24px"
                                height="24px"
                            />
                        </button>
                        {showDropdown && (
                            <div className={styles.navDropdown}>
                                <div>
                                    <a
                                        className={styles.linkName}
                                        onClick={handleSignOut}
                                    >
                                        Sign out
                                    </a>
                                    <div className={styles.lineWrapper}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
