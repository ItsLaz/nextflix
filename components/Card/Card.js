import styles from './Card.module.css';

import Image from 'next/image';

const Card = (props) => {
    const { imgUrl, size = 'medium' } = props;

    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    };

    return (
        <div className={styles.container}>
            Card
            <div className={classMap[size]}>
                <Image
                    src={imgUrl}
                    alt="movie poster"
                    layout="fill"
                    className={styles.cardImg}
                />
            </div>
        </div>
    );
};

export default Card;
