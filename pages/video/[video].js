import { useRouter } from 'next/router';

import styles from '../../styles/Video.module.css';

import { getYoutubeVideoById, getYoutubeVideoId } from '../../lib/videos';

import Modal from 'react-modal';
Modal.setAppElement('#__next');

export async function getStaticProps(context) {
    const videoId = await getYoutubeVideoId(context.params.video);
    const youtubeVideo = await getYoutubeVideoById(videoId);

    return {
        props: {
            youtubeVideo,
            videoId,
        },
        revalidate: 10,
    };
}

export async function getStaticPaths() {
    const listOfVideos = ['CwXOrWvPBPk', 'SbXIj2T-_uk', 'mnd7sFt5c3A'];

    const paths = listOfVideos.map((video) => ({ params: { video } }));

    return { paths, fallback: 'blocking' };
}

const Video = ({ youtubeVideo, videoId }) => {
    const router = useRouter();
    console.log(router.query);
    console.log(youtubeVideo);

    const { title, description, channelTitle } = youtubeVideo.snippet;
    const { viewCount } = youtubeVideo.statistics;

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
                    src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com&controls=0&rel=0`}
                    frameBorder="0"
                ></iframe>

                <div className={styles.modalBody}>
                    <div className={styles.modalBodyContent}>
                        <div className={styles.col1}>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.description}>{description}</p>
                        </div>
                        <div className={styles.col2}>
                            <p className={styles.subText}>
                                <span className={styles.textColor}>
                                    Provided By:
                                </span>
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
