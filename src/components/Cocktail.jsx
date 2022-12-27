import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Article = styled.article`
  position: relative;
    width: 40%;
  background: radial-gradient(100% 249.45% at 0% 2.78%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(11px);
padding: 15px;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  
  &:after {
    position: absolute;
    content: '';
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    border-radius: 17px;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  
  & img {
    width: 70%;
    border-radius: 17px;
  }
`

const Cocktail = ({cocktail}) => {
    const { idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb } = cocktail

    return (
        <Article>
            <div>
                <img src={strDrinkThumb} alt={strDrink} />
            </div>
            <div>
                <h3>{strDrink}</h3>
                <h4>{strGlass}</h4>
                <p>{strAlcoholic}</p>
                <Link to={'/cocktail/'+idDrink}>Details</Link>
            </div>
        </Article>
    )
}
export default Cocktail