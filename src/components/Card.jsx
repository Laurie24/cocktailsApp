import React from 'react'
import styled from 'styled-components'
import { device, primaryColors, secondaryColors } from '../style/theme.jsx'
import { Link } from 'react-router-dom'

const CardStyled = styled.div`
    margin: 25px auto 0 auto;
    width: 100%;
    height: auto;
    padding: 30px 20px;
    color: ${primaryColors.dark};
    font-weight: 600;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 4px 4px 8px ${secondaryColors.pink}, -5px -5px 10px ${secondaryColors.white};
    @media${device.tablet} {
        margin: 20px auto 0 auto;
        width: 65%;
    }

    &:focus {
        box-shadow: inset 4px 4px 8px ${secondaryColors.pink}, inset -6px -6px 12px white;
    }

    & img {
        width: 100%;
        border-radius: 17px;
        margin-bottom: 10px;
    }

    & h2 {
        text-align: center;
        letter-spacing: 0.5px;
    }
`

const LinkStyled = styled(Link)`
    position: relative;
    text-decoration: none;
    color: ${primaryColors.dark};
`
const Card = ({ name, img, id }) => {
    return (
        <LinkStyled to={id !== '' ? `/cocktail/ + ${id}` : ''}>
            <CardStyled>
                <img src={img} alt={name} />

                <h2>{name}</h2>
            </CardStyled>
        </LinkStyled>
    )
}

export default Card
