import Head from "next/head";

import Navbar from "../../components/Navbar/Navbar";
import SectionCards from "../../components/SectionCards/SectionCards";
import { verifyToken } from "../../lib/utils";
import { getMyList } from "../../lib/videos";

import styles from "../../styles/MyList.module.css";

export async function getServerSideProps(context) {
    const token = context.req ? context.req?.cookies.token : null;
    const userId = await verifyToken(token);

    const myListVideos = await getMyList(userId, token);

    return {
        props: {
            myListVideos,
        },
    };
}

const MyList = ({ myListVideos }) => {
    return (
        <div>
            <Head>
                <title>My List</title>
            </Head>
            <main className={styles.main}>
                <Navbar />
                <div className={styles.sectionWrapper}>
                    <SectionCards
                        title="My List"
                        videos={myListVideos}
                        size="small"
                        shouldWrap
                        shouldScale={false}
                    />
                </div>
            </main>
        </div>
    );
};

export default MyList;
