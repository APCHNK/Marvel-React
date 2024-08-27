import './singleComic.scss';
import xMen from '../../resources/img/x-men.png';
import { useEffect, useState } from 'react';
import useMarvelService from '../../MarvelServices/MarvelService';
import { useParams, Link } from 'react-router-dom';

export const SingleComicPage = (props) => {

    const [comic, setComic] = useState({})
    const {getComic} = useMarvelService()
    const { comicId } = useParams()

    useEffect(() => updateComic(comicId), [])

    const updateComic = (id) => {
        getComic(id)
        .then(data => setComic(data))
    }


    return (
        <div key={comic.id} className="single-comic">
            <img src={xMen} alt="x-men" className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{comic.name}</h2>
                <p className="single-comic__descr">{comic.description}</p>
                <p className="single-comic__descr">{comic.pages} pages</p>
                <p className="single-comic__descr">Language: {comic.language}</p>
                <div className="single-comic__price">{comic.price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}