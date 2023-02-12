import styled from 'styled-components'
import { device, primaryColors } from '../style/theme.jsx'
import { Link } from 'react-router-dom'

export const Article = styled.article`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px;
    background: radial-gradient(100% 249.45% at 0% 2.78%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(11px);
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 17px;
    z-index: 5;
    @media${device.tablet} {
        flex-direction: column;
        padding: 8px;
        gap: 10px;
    }

    & > div:first-child {
        width: 45%;
        @media${device.tablet} {
            width: 90%;
        }
    }
    & img {
        width: 100%;
        border-radius: 17px;
    }

    h3 {
        margin-bottom: 6px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: bold;
    }

    h4 {
        margin-bottom: 6px;
        font-size: 14px;
        letter-spacing: 0.5px;
        font-weight: bold;
    }

    p {
        margin-bottom: 16px;
        font-size: 14px;
    }
`

export const LinkStyled = styled(Link)`
    position: relative;
    width: 35%;
    text-decoration: none;
    color: ${primaryColors.dark};
    @media${device.tablet} {
        width: 45%;
    }
`
