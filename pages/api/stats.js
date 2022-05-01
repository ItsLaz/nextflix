import jwt from "jsonwebtoken";

import {
    findVideoIdByUser,
    insertStats,
    updateStats,
} from "../../lib/db/hasura";

export default async function stats(req, res) {
    if (req.method === "POST") {
        try {
            const token = req.cookies.token;
            if (!token) {
                res.status(403).send({});
            } else {
                const { videoId, watched = true, favorited } = req.body;
                if (videoId) {
                    const decodedToken = jwt.verify(
                        token,
                        process.env.JWT_SECRET
                    );
                    const userId = decodedToken.issuer;
                    const doesStatsExist = await findVideoIdByUser(
                        token,
                        userId,
                        videoId
                    );
                    if (doesStatsExist) {
                        const response = await updateStats(token, {
                            favorited,
                            watched,
                            userId,
                            videoId,
                        });
                        res.send({ msg: "it works", response });
                    } else {
                        const response = await insertStats(token, {
                            favorited,
                            watched,
                            userId,
                            videoId,
                        });
                        res.send({ msg: "it works", response });
                    }
                }
            }
        } catch (error) {
            res.status(500).send({ done: false, error: error?.message });
        }
    }
}
