import { getMyListVideos, getWatchedVideos } from "./db/hasura";

export const getVideos = async (fetchUrl) => {
    const TMDB_API_KEY = process.env.TMDB_API;
    const posterUrl = "https://image.tmdb.org/t/p/original";
    // https://api.themoviedb.org/3/movie/550?api_key=___
    try {
        const response = await fetch(fetchUrl);
        const data = await response.json();

        return data?.results.map((item) => {
            return {
                title: item.original_name || item.name || item.title,
                imgUrl: `${posterUrl}${item.backdrop_path || item.poster_path}`,
                id: item.id,
            };
        });
    } catch (error) {
        console.error("Something went wrong with the videos", error);
        return [];
    }
};

export const getTrending = async () => {
    const TMDB_API_KEY = process.env.TMDB_API;
    const posterUrl = "https://image.tmdb.org/t/p/original";
    const res = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`
    );
    const data = await res.json();
    return data?.results.map((item) => {
        return {
            title: item.original_name || item.name || item.title,
            imgUrl: `${posterUrl}${item.poster_path}`,
            bannerImg: `${posterUrl}${item.backdrop_path}`,
            overview: item.overview,
            id: item.id,
        };
    });
};

export const getNetflixOriginals = async () => {
    const TMDB_API_KEY = process.env.TMDB_API;
    const posterUrl = "https://image.tmdb.org/t/p/original";
    const res = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213&language=en-US`
    );
    const data = await res.json();
    return data?.results.map((item) => {
        return {
            title: item?.name,
            imgUrl: `${posterUrl}${item.poster_path}`,
            id: item.id,
        };
    });
};

export const getTopRated = async () => {
    const TMDB_API_KEY = process.env.TMDB_API;
    const posterUrl = "https://image.tmdb.org/t/p/original";
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`
    );
    const data = await res.json();
    return data?.results.map((item) => {
        return {
            title: item.original_name || item.name || item.title,
            imgUrl: `${posterUrl}${item.poster_path}`,
            id: item.id,
        };
    });
};

export const getYoutubeVideoId = async (videoTitle) => {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${videoTitle}%20trailer&key=${YOUTUBE_API_KEY}`;
    const res = await fetch(URL);
    const data = await res.json();
    return data?.items[0].id.videoId;
};

export const getYoutubeVideoById = async (videoId) => {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_API_KEY}`;
    const res = await fetch(URL);
    const data = await res.json();
    return data?.items[0];
};

export const getWatchItAgainVideos = async (userId, token) => {
    const videos = await getWatchedVideos(userId, token);
    return videos?.map((video) => {
        return {
            title: video.videoId,
            imgUrl: video.imgUrl
                ? video.imgUrl
                : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
        };
    });
};

export const getMyList = async (userId, token) => {
    const videos = await getMyListVideos(userId, token);
    return videos?.map((video) => {
        return {
            title: video.videoId,
            imgUrl: video.imgUrl
                ? video.imgUrl
                : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
        };
    });
};
