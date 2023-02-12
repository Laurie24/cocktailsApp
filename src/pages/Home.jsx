import React from 'react'
import SearchForm from '../components/SearchForm.jsx'
import styled from 'styled-components'
import CocktailList from '../components/CocktailList.jsx'
import { device } from '../style/theme.jsx'

const HomeBg = styled.div`
    display: flex;
    gap: 20px;
    position: relative;
    padding: 50px;
    border-radius: 5px;
    box-sizing: border-box;
    width: 90vw;
    height: 95vh;
    z-index: 1055;
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
        border: 12.6064px solid rgba(255, 255, 255, 0.24);
        border-radius: 15px;
        z-index: 0;
    }
`
const Home = () => {
    return (
        <HomeBg>
            <SearchForm />

            <CocktailList />
        </HomeBg>
    )
}
export default Home
