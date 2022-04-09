import styles from './SectionCards.module.css';

import Card from '../Card/Card';

const SectionCards = (props) => {
    const { title, videos, size } = props;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, i) => {
                    return (
                        <Card
                            id={i}
                            imgUrl={video.imgUrl}
                            size={size}
                            key={i}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default SectionCards;
