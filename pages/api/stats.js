import {
    findVideoIdByUser,
    insertStats,
    updateStats,
} from "../../lib/db/hasura";
import { verifyToken } from "../../lib/utils";

export default async function stats(req, res) {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(403).send({});
        } else {
            const { videoId } = req.method === "POST" ? req.body : req.query;
            if (videoId) {
                const userId = await verifyToken(token);
                const findVideo = await findVideoIdByUser(
                    token,
                    userId,
                    videoId
                );
                const doesStatsExist = findVideo?.length > 0;
                if (req.method === "POST") {
                    const { watched = true, favorited, imgUrl } = req.body;
                    if (doesStatsExist) {
                        const response = await updateStats(token, {
                            favorited,
                            watched,
                            userId,
                            videoId,
                            imgUrl,
                        });
                        res.send({ msg: "it works", response });
                    } else {
                        const response = await insertStats(token, {
                            favorited,
                            watched,
                            userId,
                            videoId,
                            imgUrl,
                        });
                        res.send({ msg: "it works", response });
                    }
                } else {
                    if (doesStatsExist) {
                        res.send(findVideo);
                    } else {
                        res.status(404);
                        res.send({ user: null, msg: "Video not found" });
                    }
                }
            }
        }
    } catch (error) {
        res.status(500).send({ done: false, error: error?.message });
    }
}
