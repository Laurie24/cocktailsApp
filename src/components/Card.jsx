import React from 'react'
import { CardStyled, LinkStyled } from './Card.styles.jsx'

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
