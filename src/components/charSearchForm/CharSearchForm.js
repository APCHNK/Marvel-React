import { useState } from "react"
import "./CharSearchForm.scss"
import useMarvelService from "../../MarvelServices/MarvelService"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";







const CharSearchForm = () => {
    const {loading, error, getCharByName, clearError} = useMarvelService()
    const [char, setChar] = useState(null)


    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = (name) => {
        clearError();

        getCharByName(name)
            .then(onCharLoaded);
    }

    const result = 
    !char ? null : char.length > 0 ?
        <div className="char__search-wrapper">
            <div className="char__search-success">There is {char[0].name}! Visit page?</div>
            <Link to={`/characters/${char[0].id}`}  className="button button__secondary">
                <div className="inner">To page</div>
            </Link>
        </div> : 
        <div className="char__search-error">
            The character was not found. Check the name and try again
        </div>;
    const errorMessage = error ? <div className="char__search-critical-error"><ErrorMessage /></div> : null;
    return(
        <div className="char__search-form">
            <Formik
                initialValues =  {{
                    charName: ''
                }}
                validationSchema = {Yup.object({
                    charName: Yup.string().required('This field is required')
                })}
                onSubmit = { ({charName}) => {
                    updateChar(charName);
                }}
            >
                <Form>
                    <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
                    <div className="char__search-wrapper">
                        <Field
                            id="charName" 
                            name='charName' 
                            type='text' 
                            className="input"
                            placeholder="Enter name"/>
                        <button 
                            type='submit' 
                            className="button button__main"
                            disabled={loading}
                            >
                            <div className="inner">find</div>
                        </button>
                    </div>
                </Form>
            </Formik>
            {result}
            {errorMessage}
        </div>
    )
}



export default CharSearchForm