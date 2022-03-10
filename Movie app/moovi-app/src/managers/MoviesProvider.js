/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, createContext,
useContext} from "react"

export const MoviesCenter =()=>{
    return useContext(MoviesContext)
}

const MoviesProvider = ({children}) => {
    //useState
    const [searchMovie, setSearchMovie] = useState([])
    const [movieName, setMovieName] = useState("avengers")

    const API_KEY = "api_key=6f810afc60cd4a235485afd45e5ce8d5"
    const BASE_URL = "https://api.themoviedb.org/3"
    const API_URL = BASE_URL + "/search/movie?"
        + API_KEY + `&query=${movieName}`

    const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500"

    useEffect(async () =>{
        const response = await fetch(API_URL)
        const data = await response.json()
        const movies = data.results
        //add price to movie
        let temp = movies
        temp.map((movie)=>{
            movie.price = 300
            movie.quality = 1
        })
        setSearchMovie(temp)
    },[])
        

    //////////////*******return*******/////////
    return(
        <MoviesContext.Provider value={{searchMovie, setSearchMovie, BASE_IMG_URL}}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesProvider
export const MoviesContext = createContext()
