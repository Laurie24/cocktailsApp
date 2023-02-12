import styled from 'styled-components'
import { device } from '../style/theme.jsx'

export const HomeBg = styled.div`
    position: relative;
    display: flex;
    gap: 20px;
    width: 90vw;
    height: 95vh;
    z-index: 1055;
    padding: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    backdrop-filter: blur(8.66691px);
    background: radial-gradient(100% 249.45% at 0% 2.78%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
    @media${device.tablet} {
        flex-direction: column;
        padding: 10px;
    }
    &:after {
        content: '';
        position: absolute;
        top: -12px;
        bottom: -12px;
        right: -12px;
        left: -12px;
        z-index: 0;
        border: 12.6064px solid rgba(255, 255, 255, 0.24);
        border-radius: 15px;
    }
`
