import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading.jsx'
import { Section } from './SingleCocktail.styles.jsx'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const SingleCocktail = () => {
    const { Id } = useParams()

    const [singleCocktail, setSingleCocktail] = useState(null)
    const getSingleCocktail = async () => {
        const response = await fetch(url + Id)
        const data = await response.json()
        setSingleCocktail(data.drinks[0])
    }

    useEffect(() => {
        getSingleCocktail()
    }, [])

    if (!singleCocktail) {
        return <Loading />
    }

    const {
        strDrink,
        strCategory,
        strAlcoholic,
        strGlass,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strDrinkThumb,
    } = singleCocktail

    return (
        <>
            {singleCocktail && (
                <Section>
                    <div>
                        <img src={strDrinkThumb} alt={strDrink} />
                    </div>

                    <div>
                        <h1>{strDrink}</h1>

                        <p>
                            <span>Category : </span>

                            {strCategory}
                        </p>

                        <p>
                            <span>Info : </span>

                            {strAlcoholic}
                        </p>

                        <p>
                            <span>Glass : </span>

                            {strGlass}
                        </p>

                        <p>
                            <span>Instuctions : </span>

                            {strInstructions}
                        </p>

                        <p>
                            <span>Ingredients : </span>
                            {strIngredient1}, {strIngredient2}, {strIngredient3}
                        </p>
                    </div>
                </Section>
            )}
        </>
    )
}

export default SingleCocktail
