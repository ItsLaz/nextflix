import videoData from '../data/videos.json';

export const getVideos = async () => {
    const TMDB_API_KEY = process.env.TMDB_API;
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    // https://api.themoviedb.org/3/movie/550?api_key=___

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`
    );

    const data = await response.json();

    console.log(data);

    return data?.results.map((item) => {
        return {
            // title: item?.snippet?.title,
            // imgUrl: item?.snippet?.thumbnails?.high?.url,
            // id: item?.id?.videoId,
            title: item?.original_title,
            imgUrl: `${posterUrl}${item.poster_path}`,
            id: item.id,
        };
    });
};
