import React from "react";
import SearchForm from "../components/SearchForm.jsx";
import styled from "styled-components";
import CocktailList from "../components/CocktailList.jsx";

const HomeBg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 15px;
  box-sizing: border-box;
  width: 80vw;
  height: 80vh;
  background: radial-gradient(100% 249.45% at 0% 2.78%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  &:after {
    content: '';
    position: absolute;
    top: -16px;
    left: -16px;
    bottom: -16px;
    right: -16px;
    border: 16px solid rgba(255, 255, 255, 0.24);
    border-radius: 33px;
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