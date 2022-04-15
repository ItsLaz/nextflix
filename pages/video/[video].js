import { useRouter } from 'next/router';

import Modal from 'react-modal';
Modal.setAppElement('#__next');

const Video = () => {
    const router = useRouter();
    return (
        <div>
            {router.query.video}
            <Modal isOpen={true} contentLabel="Watch the video">
                <div>Modal body</div>
            </Modal>
        </div>
    );
};

export default Video;
