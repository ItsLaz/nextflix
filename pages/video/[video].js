import { useRouter } from 'next/router';

const Video = () => {
    const router = useRouter();
    return <div> {router.query.video} </div>;
};

export default Video;
