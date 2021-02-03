import {React, useEffect, useState} from 'react'
import {useRouteMatch, useParams, } from 'react-router-dom'
import {moviesService} from "../../services";

export const MovieDetails = () => {
    const [filmDetails, setFilmDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {id, ...rest} = useParams();


    const getMoviesDetails = async () => {
        try {
            setIsLoading(true)
            const data = await moviesService.getMovieDetailsById(id)
            setFilmDetails(data)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getMoviesDetails()
    }, [])

    if (isLoading && !filmDetails || isLoading === null) {
        return <div>loading...</div>
    }

        return (
                <div>
                    <h1>{filmDetails.original_title}</h1>
                    <h3>{filmDetails.tagline}</h3>
                    <h2>{filmDetails.genres.map(el => <span key={el.id}> - {el.name} - </span>)}</h2>
                    <h3>{filmDetails.overview}</h3>
                </div>
        );
                }

