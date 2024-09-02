import './singleComic.scss';
import xMen from '../../resources/img/x-men.png';
import { useEffect, useState } from 'react';
import useMarvelService from '../../MarvelServices/MarvelService';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SingleCharacterPage = (props) => {

    const [char, setChar] = useState({})
    const {getCharacter} = useMarvelService()
    const { charId } = useParams()

    useEffect(() => updateComic(charId), [])

    const updateComic = (id) => {
        getCharacter(id)
        .then(data => setChar(data))
    }


    return (
        <div key={char.id} className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content={char.name}
                    />
                <title>{char.name}</title>
            </Helmet>
            <img src={xMen} alt="x-men" className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{char.name}</h2>
                <p className="single-comic__descr">{char.description}</p>
            </div>
            <Link to="/" className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleCharacterPage