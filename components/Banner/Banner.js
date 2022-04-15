import styles from './Banner.module.css';

import { useRouter } from 'next/router';
import Image from 'next/image';

const Banner = (props) => {
    const { title, subTitle, imgUrl } = props;
    const router = useRouter();

    const handleOnPlay = () => {
        router.push(`/video/${title}`);
    };
    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <div className={styles.left}>
                    <div className={styles.nseriesWrapper}>
                        <p className={styles.firstLetter}>N</p>
                        <p className={styles.series}>S E R I E S</p>
                    </div>
                    <h1 className={styles.title}>{title}</h1>
                    <h3 className={styles.subTitle}>{subTitle}</h3>
                    <div className={styles.playBtnWrapper}>
                        <button
                            onClick={handleOnPlay}
                            className={styles.btnWithIcon}
                        >
                            <Image
                                src="/static/play-arrow.svg"
                                alt="play icon"
                                width="32px"
                                height="32px"
                            />
                            <span className={styles.playText}>Play</span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={styles.bannerImg}
                style={{
                    backgroundImage: `url(${imgUrl})`,
                }}
            ></div>
        </div>
    );
};

export default Banner;
