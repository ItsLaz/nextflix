import styles from './Navbar.module.css';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

const Navbar = (props) => {
    const { username } = props;
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);

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
                                    <Link href="/login">
                                        <a className={styles.linkName}>
                                            Sign out
                                        </a>
                                    </Link>
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
