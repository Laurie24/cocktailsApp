import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../components/Loading.jsx'
import styled from 'styled-components'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const Section = styled.div`
    display: flex;
    gap: 30px;
    position: relative;
    padding: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    width: 80vw;
    height: 80vh;
    z-index: 1055;
    backdrop-filter: blur(8.66691px);
    background: radial-gradient(100% 249.45% at 0% 2.78%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);

    &:after {
        content: '';
        position: absolute;
        top: -12px;
        bottom: -12px;
        right: -12px;
        left: -12px;
        border: 12.6064px solid rgba(255, 255, 255, 0.24);
        border-radius: 15px;
        z-index: 0;
    }

    & img {
        width: 50%;
        height: 100%;
        border-radius: 15px;
    }

    & h1 {
        text-align: center;
    }
`
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
                    <img src={strDrinkThumb} alt={strDrink} />

                    <div>
                        <h1>{strDrink}</h1>

                        <p>
                            <span>Category :</span>

                            {strCategory}
                        </p>

                        <p>
                            <span>Info :</span>

                            {strAlcoholic}
                        </p>

                        <p>
                            <span>Glass :</span>

                            {strGlass}
                        </p>

                        <p>
                            <span>Instuctions :</span>

                            {strInstructions}
                        </p>

                        <p>
                            <span>Ingredients :</span>

                            <span> {strIngredient1}</span>

                            <span> {strIngredient2}</span>

                            <span> {strIngredient3}</span>
                        </p>
                    </div>
                </Section>
            )}
        </>
    )
}

export default SingleCocktail
