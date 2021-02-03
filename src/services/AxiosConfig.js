import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization:  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZhM2RkMWRhNDA3MjJhOTk1M2RiZjA0NThlMzU5MSIsInN1YiI6IjVmZmYwODc4MjIzZTIwMDA0MGFmY2Y2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6yrkYyjUhZPtNhnkj-Ukfx72ILHlVXgzB-JSVlc8cNI'
    }
})
 