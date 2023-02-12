import React from 'react'
import SearchForm from '../components/SearchForm.jsx'
import CocktailList from '../components/CocktailList.jsx'
import { HomeBg } from './Home.styles.jsx'

const Home = () => {
    return (
        <HomeBg>
            <SearchForm />

            <CocktailList />
        </HomeBg>
    )
}
export default Home
