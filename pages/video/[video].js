import { useRouter } from 'next/router';

import styles from '../../styles/Video.module.css';

import Modal from 'react-modal';
Modal.setAppElement('#__next');

const Video = () => {
    const router = useRouter();
    console.log(router.query);
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
                    id="player"
                    type="text/html"
                    width="640"
                    height="390"
                    src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com&controls=0&rel=0"
                    frameBorder="0"
                ></iframe>
            </Modal>
        </div>
    );
};

export default Video;
