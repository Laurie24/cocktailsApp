import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading.jsx'
import styled from 'styled-components'
import { device } from '../style/theme.jsx'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const Section = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;
    padding: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    width: 90vw;
    height: 95vh;
    z-index: 1055;
    backdrop-filter: blur(8.66691px);
    background: radial-gradient(100% 249.45% at 0% 2.78%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);

    @media${device.tablet} {
        flex-direction: column;
        justify-content: center;
        padding: 25px;
    }
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

    & div {
        width: 50%;
        height: auto;
        @media${device.tablet} {
            width: 100%;
            &:first-child {
                display: flex;
                justify-content: center;
            }
        }
    }

    & img {
        width: 100%;
        height: auto;
        border-radius: 15px;
        @media${device.tablet} {
            width: 90%;
        }
    }

    & h1 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 25px;
    }

    & p {
        margin-bottom: 10px;
        line-height: 20px;

        & span {
            font-weight: 700;
        }
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
