import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { primaryColors } from '../style/theme.jsx'

const Article = styled.article`
    background: radial-gradient(100% 249.45% at 0% 2.78%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(11px);
    border: 1px solid rgba(255, 255, 255, 0.24);
    padding: 15px;
    border-radius: 17px;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 20px;

    & > div:first-child {
        width: 45%;
    }
    & img {
        width: 100%;
        border-radius: 17px;
    }

    h3 {
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: bold;
        margin-bottom: 6px;
    }

    h4 {
        font-size: 14px;
        letter-spacing: 0.5px;
        font-weight: bold;
        margin-bottom: 6px;
    }

    p {
        font-size: 14px;
        margin-bottom: 16px;
    }
`

const LinkStyled = styled(Link)`
    position: relative;
    width: 35%;
    text-decoration: none;
    color: ${primaryColors.dark};
`

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
