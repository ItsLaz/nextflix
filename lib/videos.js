export const getVideos = async (fetchUrl) => {
    const TMDB_API_KEY = process.env.TMDB_API;
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    // https://api.themoviedb.org/3/movie/550?api_key=___
    try {
        const response = await fetch(fetchUrl);
        const data = await response.json();

        return data?.results.map((item) => {
            return {
                title: item?.original_title,
                imgUrl: `${posterUrl}${item.poster_path}`,
                id: item.id,
            };
        });
    } catch (error) {
        console.error('Something went wrong with the videos', error);
        return [];
    }
};

export const getTrending = async () => {
    const TMDB_API_KEY = process.env.TMDB_API;
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    const res = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`
    );
    const data = await res.json();
    return data?.results.map((item) => {
        return {
            title: item?.original_title,
            imgUrl: `${posterUrl}${item.poster_path}`,
            id: item.id,
        };
    });
};

export const getNetflixOriginals = async () => {
    const TMDB_API_KEY = process.env.TMDB_API;
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    const res = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`
    );
    const data = await res.json();
    return data?.results.map((item) => {
        return {
            title: item?.original_title,
            imgUrl: `${posterUrl}${item.poster_path}`,
            id: item.id,
        };
    });
};

export const getTopRated = async () => {
    const TMDB_API_KEY = process.env.TMDB_API;
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`
    );
    const data = await res.json();
    return data?.results.map((item) => {
        return {
            title: item?.original_title,
            imgUrl: `${posterUrl}${item.poster_path}`,
            id: item.id,
        };
    });
};
