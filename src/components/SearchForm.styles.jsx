import styled from 'styled-components'
import { device, primaryColors, secondaryColors } from '../style/theme.jsx'
import Search from '../assets/search.svg'

export const Section = styled.section`
    position: relative;
    width: 30%;
    padding: 25px 20px;
    background: radial-gradient(100% 249.45% at 0% 2.78%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(11px);
    border: 0.787901px solid rgba(255, 255, 255, 0.24);
    border-radius: 17px;
    z-index: 5;
    @media${device.tablet} {
        width: 100%;
        padding: 15px 20px 10px 20px;
    }

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Input = styled.div`
    input {
        height: 40px;
        width: 100%;
        padding-left: 45px;
        margin-top: 10px;
        outline: none;
        border: none;
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

export const Br = styled.div`
    height: 2px;
    width: 100%;
    margin: 25px 0;
    background-color: white;
    @media${device.tablet} {
        margin: 15px 0;
    }
`

export const Button = styled.button`
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
