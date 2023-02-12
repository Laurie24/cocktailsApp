import React from 'react'
import { Article, LinkStyled } from './Cocktail.styles.jsx'

const Cocktail = ({ cocktail }) => {
    const { idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb } = cocktail

    return (
        <LinkStyled to={'/cocktail/' + idDrink}>
            <Article>
                <div>
                    <img src={strDrinkThumb} alt={strDrink} />
                </div>

                <div>
                    <h3>{strDrink}</h3>

                    <h4>{strGlass}</h4>

                    <p>{strAlcoholic}</p>
                </div>
            </Article>
        </LinkStyled>
    )
}
export default Cocktail
