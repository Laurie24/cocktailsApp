import React from 'react'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../AppProvider'
import styled from 'styled-components'

const Section = styled.section`
    width: 100%;
    display: flex;
    overflow: auto;
    position: relative;
    z-index: 5;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
`

const CocktailList = () => {
    const { cocktails } = useGlobalContext()

    if (cocktails === null) {
        return <h2>No cocktails matched your search criteria</h2>
    }
    return (
        <Section>
            {cocktails.map((cocktail, index) => {
                return <Cocktail key={index} cocktail={cocktail} />
            })}
        </Section>
    )
}

export default CocktailList
