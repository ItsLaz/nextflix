import styles from "./SectionCards.module.css";
import Card from "../Card/Card";

import clsx from "classnames";
import Link from "next/link";

const SectionCards = (props) => {
    const { title, videos = [], size, shouldWrap = false, shouldScale } = props;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div
                className={clsx(styles.cardWrapper, shouldWrap && styles.wrap)}
            >
                {videos.map((video, i) => {
                    return (
                        <Link
                            href={{
                                pathname: `/video/${video.title}`,
                                query: { imgUrl: video.imgUrl },
                            }}
                            key={i}
                            passHref
                        >
                            <a>
                                <Card
                                    id={i}
                                    imgUrl={video.imgUrl}
                                    size={size}
                                    shouldScale={shouldScale}
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
