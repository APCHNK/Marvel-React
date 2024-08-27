import './comicsList.scss';

import { useEffect, useState } from 'react';
import useMarvelService from '../../MarvelServices/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([])
    const [newComicsLoading, setNewComicsLoading] = useState(false)
    const [offset, setOffset] = useState(0)
    const [comicsEnded, setComicsEnded] = useState(false)

    const {loading, error, getAllComics} = useMarvelService()

    useEffect(() => {
        onRequest(offset, true)
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewComicsLoading(false) : setNewComicsLoading(true)

        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList]);

        setNewComicsLoading(false)
        setOffset(offset => offset + 8)
        setComicsEnded(ended)
    }

    function renderItems(params) {
        const items = params.map(item => {
            return (
                <li key={item.id} className="comics__item">
                    <a href="#">
                        <img src={item.thumbnail} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">{item.name}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </a>
                </li>
            )
        })
        
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }


    const items = renderItems(comicsList)
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newComicsLoading ? <Spinner/> : null;

    return (
        
        <div className="comics__list">

            {items}
            {errorMessage}
            {spinner}
            
            <button onClick={() => onRequest(offset, true)}
                    disabled={newComicsLoading} 
                    style={{'display': comicsEnded ? 'none' : 'block'}} 
                    className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;