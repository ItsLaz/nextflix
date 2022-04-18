import { useRouter } from 'next/router';

import styles from '../../styles/Video.module.css';

import Modal from 'react-modal';
Modal.setAppElement('#__next');

const Video = () => {
    const router = useRouter();
    console.log(router.query);

    const video = {
        title: 'Shrek',
        publishTime: '2000-01-01',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aut accusamus explicabo est animi suscipit. Quibusdam impedit repellendus, voluptatibus inventore ipsa, sint fuga ut explicabo quisquam aut atque iusto eligendi!',
        channelTitle: 'Dreamworks',
        viewCount: 10000,
    };
    const { title, publishTime, description, channelTitle, viewCount } = video;

    return (
        <div className={styles.container}>
            <Modal
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => router.back()}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <iframe
                    className={styles.videoPlayer}
                    id="player"
                    type="text/html"
                    width="100%"
                    height="390"
                    src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com&controls=0&rel=0"
                    frameBorder="0"
                ></iframe>

                <div className={styles.modalBody}>
                    <div className={styles.modalBodyContent}>
                        <div className={styles.col1}>
                            <p className={styles.publishTime}>{publishTime}</p>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.description}>{description}</p>
                        </div>
                        <div className={styles.col2}>
                            <p className={styles.subText}>
                                <span className={styles.textColor}>Cast: </span>
                                <span className={styles.channelTitle}>
                                    {channelTitle}
                                </span>
                            </p>
                            <p className={styles.subText}>
                                <span className={styles.textColor}>
                                    View Count:
                                </span>
                                <span className={styles.channelTitle}>
                                    {viewCount}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Video;
