import styled from 'styled-components'
import { device } from '../style/theme.jsx'

export const Section = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 30px;
    width: 90vw;
    height: 95vh;
    padding: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    z-index: 1055;
    backdrop-filter: blur(8.66691px);
    background: radial-gradient(100% 249.45% at 0% 2.78%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);

    @media${device.tablet} {
        flex-direction: column;
        justify-content: center;
        padding: 25px;
    }
    &:after {
        content: '';
        position: absolute;
        top: -12px;
        bottom: -12px;
        right: -12px;
        left: -12px;
        border: 12.6064px solid rgba(255, 255, 255, 0.24);
        border-radius: 15px;
        z-index: 0;
    }

    & div {
        width: 50%;
        height: auto;
        @media${device.tablet} {
            width: 100%;
            &:first-child {
                display: flex;
                justify-content: center;
            }
        }
    }

    & img {
        width: 100%;
        height: auto;
        border-radius: 15px;
        @media${device.tablet} {
            width: 90%;
        }
    }

    & h1 {
        margin-bottom: 20px;
        text-align: center;
        font-size: 25px;
    }

    & p {
        margin-bottom: 10px;
        line-height: 20px;

        & span {
            font-weight: 700;
        }
    }
`
