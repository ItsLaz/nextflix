import styles from './Card.module.css';

import Image from 'next/image';

const Card = (props) => {
    const { imgUrl, size } = props;

    return (
        <div>
            <Image
                src={imgUrl}
                alt="movie poster"
                width="250px"
                height="400px"
            />
        </div>
    );
};

export default Card;
