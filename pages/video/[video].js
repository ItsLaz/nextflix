import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import styles from "../../styles/Video.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Like from "../../components/icons/like-icon";
import DisLike from "../../components/icons/dislike-icon";

import { getYoutubeVideoById, getYoutubeVideoId } from "../../lib/videos";

import Modal from "react-modal";

Modal.setAppElement("#__next");

export async function getStaticProps(context) {
    const youtubeVideoId = await getYoutubeVideoId(context.params.video);
    const youtubeVideo = await getYoutubeVideoById(youtubeVideoId);

    return {
        props: {
            youtubeVideo,
            youtubeVideoId,
        },
        revalidate: 10,
    };
}

export async function getStaticPaths() {
    const listOfVideos = ["CwXOrWvPBPk", "SbXIj2T-_uk", "mnd7sFt5c3A"];

    const paths = listOfVideos.map((video) => ({ params: { video } }));

    return { paths, fallback: "blocking" };
}

const Video = ({ youtubeVideo, youtubeVideoId }) => {
    const router = useRouter();
    const videoId = router.query.video;
    const imgUrl = router.query.imgUrl;

    const [toggleLike, setToggleLike] = useState(false);
    const [toggleDisLike, setToggleDisLike] = useState(false);

    const { title, description, channelTitle } = youtubeVideo.snippet;
    const { viewCount } = youtubeVideo.statistics;

    useEffect(() => {
        const getVideoLikes = async () => {
            const response = await fetch(`/api/stats?videoId=${videoId}`, {
                method: "GET",
            });
            const data = await response.json();
            if (data.length > 0) {
                const favorited = data[0].favorited;
                if (favorited === 1) {
                    setToggleLike(true);
                } else if (favorited === 0) {
                    setToggleDisLike(true);
                }
            }
        };
        getVideoLikes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const runRatingService = async (favorited) => {
        return await fetch("/api/stats", {
            method: "POST",
            body: JSON.stringify({
                videoId,
                favorited,
                imgUrl,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    const handleToggleLike = async () => {
        setToggleLike(!toggleLike);
        setToggleDisLike(toggleLike);

        const val = !toggleLike;
        const favorited = val ? 1 : 0;
        const response = await runRatingService(favorited);
    };
    const handletoggleDisLike = async () => {
        setToggleDisLike(!toggleDisLike);
        setToggleLike(toggleDisLike);

        const val = !toggleDisLike;
        const favorited = val ? 0 : 1;
        const response = await runRatingService(favorited);
    };

    return (
        <div className={styles.container}>
            <Navbar />

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
                    src={`https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&origin=http://example.com&controls=0&rel=0`}
                    frameBorder="0"
                ></iframe>
                <div className={styles.likeDislikeBtnWrapper}>
                    <button onClick={handleToggleLike}>
                        <div className={styles.btnWrapper}>
                            <Like selected={toggleLike} />
                        </div>
                    </button>
                    <button onClick={handletoggleDisLike}>
                        <div className={styles.btnWrapper}>
                            <DisLike selected={toggleDisLike} />
                        </div>
                    </button>
                </div>

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
