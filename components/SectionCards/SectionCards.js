import styles from './SectionCards.module.css';
import Card from '../Card/Card';

import Link from 'next/link';

const SectionCards = (props) => {
    const { title, videos = [], size } = props;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, i) => {
                    return (
                        <Link href={`/video/${video.title}`} key={i} passHref>
                            <a>
                                <Card
                                    id={i}
                                    imgUrl={video.imgUrl}
                                    size={size}
                                />
                            </a>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default SectionCards;
