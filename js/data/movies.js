const getMovieFromTmbd = async () => {
    try {
        const data = fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=7b2c61004ee623bc07153969220b99f5&language=es-Es', {
            'language':'es-Es',
            'page': 1
        })
        const result =  (await data).json()
        return result

    } catch (error) {
        console.log(error);
    }


}
export default getMovieFromTmbd;