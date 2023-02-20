import styled from 'styled-components'
import { device, primaryColors, secondaryColors } from '../style/theme.jsx'
import { Link } from 'react-router-dom'

export const CardStyled = styled.div`
    width: 100%;
    height: auto;
    padding: 30px 20px;
    margin: 25px auto 0 auto;
    color: ${primaryColors.dark};
    font-weight: 600;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 4px 4px 8px ${secondaryColors.pink}, -5px -5px 10px ${secondaryColors.white};
    @media${device.tablet} {
        padding: 10px;
        margin: 20px auto 0 auto;
        width: 60%;
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

export const LinkStyled = styled(Link)`
    position: relative;
    text-decoration: none;
    color: ${primaryColors.dark};
`
