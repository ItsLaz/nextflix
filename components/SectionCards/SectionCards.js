import styles from './SectionCards.module.css';

import Card from '../Card/Card';

const SectionCards = (props) => {
    const { title } = props;
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                <Card imgUrl="/static/shrek.jpg" size="large" />
                <Card imgUrl="/static/shrek.jpg" size="large" />
                <Card imgUrl="/static/shrek.jpg" size="large" />
                <Card imgUrl="/static/shrek.jpg" size="large" />
                <Card imgUrl="/static/shrek.jpg" size="large" />
                <Card imgUrl="/static/shrek.jpg" size="large" />
                <Card imgUrl="/static/shrek.jpg" size="large" />
                <Card imgUrl="/static/shrek.jpg" size="large" />
                <Card imgUrl="/static/shrek.jpg" size="large" />
                <Card imgUrl="/static/shrek.jpg" size="large" />
                <Card imgUrl="/static/shrek.jpg" size="large" />
                <Card imgUrl="/static/shrek.jpg" size="large" />
            </div>
        </section>
    );
};

export default SectionCards;
