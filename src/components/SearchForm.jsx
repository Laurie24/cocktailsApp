import React, { useState } from 'react'
import { useGlobalContext } from '../AppProvider'
import Card from './Card.jsx'
import Image from '../assets/undraw_questions.svg'
import { Br, Button, Input, Section } from './SearchForm.styles.jsx'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
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
