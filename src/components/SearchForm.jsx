import React, { useState } from 'react'
import { useGlobalContext } from '../AppProvider'
import styled from 'styled-components'
import { device, primaryColors, secondaryColors } from '../style/theme.jsx'
import Search from '../assets/search.svg'
import Card from './Card.jsx'
import Image from '../assets/undraw_questions.svg'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

const Section = styled.section`
    width: 30%;
    background: radial-gradient(100% 249.45% at 0% 2.78%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(11px);
    border: 0.787901px solid rgba(255, 255, 255, 0.24);
    padding: 25px 20px;
    border-radius: 17px;
    z-index: 5;
    position: relative;
    @media${device.tablet} {
        width: 100%;
    }

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

const Input = styled.div`
    input {
        height: 40px;
        width: 100%;
        outline: none;
        border: none;
        padding-left: 45px;
        margin-top: 10px;
        color: ${primaryColors.dark};
        background: transparent;
        border-radius: 15px;
        box-shadow: inset 4px 4px 8px ${secondaryColors.pink}, inset -6px -6px 12px white;
        background: url('${Search}');
        background-repeat: no-repeat;
        background-position: 20px 50%;
    }

    label {
        font-weight: bold;
        letter-spacing: 0.5px;
    }
`

const Br = styled.div`
    height: 2px;
    width: 100%;
    background-color: white;
    margin: 25px 0;
    @media${device.tablet} {
        margin: 15px 0;
    }
`

const Button = styled.button`
    width: 100%;
    height: 50px;
    color: ${primaryColors.dark};
    font-weight: 600;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 4px 4px 8px ${secondaryColors.pink}, -5px -5px 10px ${secondaryColors.white};

    &:focus {
        box-shadow: inset 4px 4px 8px ${secondaryColors.pink}, inset -6px -6px 12px white;
    }
`

const SearchForm = () => {
    const { cocktailInput, setCocktailInput } = useGlobalContext()
    const [randomCocktail, setRandomCocktail] = useState(null)

    const handleChange = (e) => {
        e.preventDefault()
        setCocktailInput(e.target.value)
    }

    const handleRandomCocktail = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setRandomCocktail(data.drinks[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Section>
            <form onSubmit={handleSubmit}>
                <Input>
                    <label htmlFor="name">Search your favorite cocktail</label>

                    <input type="text" id="name" name="name" value={cocktailInput} onChange={handleChange} />
                </Input>

                <div>
                    <Br />

                    <Button onClick={handleRandomCocktail}>Random cocktail</Button>

                    <Card
                        id={randomCocktail ? randomCocktail.idDrink : ''}
                        name={randomCocktail ? randomCocktail.strDrink : 'What will your cocktail be for today?'}
                        img={randomCocktail ? randomCocktail.strDrinkThumb : Image}
                    />
                </div>
            </form>
        </Section>
    )
}

export default SearchForm
