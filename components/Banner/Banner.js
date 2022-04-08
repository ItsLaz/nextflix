import styles from './Banner.module.css';

const Banner = (props) => {
    const { title, subTitle, imgUrl } = props;

    const handleOnPlay = () => {
        console.log('btn clicked');
    };
    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <div className={styles.left}>
                    <h1 className={styles.title}>{title}</h1>
                    <h3 className={styles.subTitle}>{subTitle}</h3>
                    <div className={styles.playBtnWrapper}>
                        <button
                            onClick={handleOnPlay}
                            className={styles.btnWithIcon}
                        >
                            Play
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={styles.bannerImg}
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    width: '100%',
                    height: '100%',
                }}
            ></div>
        </div>
    );
};

export default Banner;
