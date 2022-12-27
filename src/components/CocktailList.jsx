import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../AppProvider";
import styled from "styled-components";

const Section = styled.section`
    overflow: scroll;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: scroll;
    gap: 20px;
  }
`

const CocktailList = () => {
    const { cocktails } = useGlobalContext();

    if (cocktails === null) {
        return(
            <h2>no cocktails matched your search criteria</h2>
        )
    }
    return (
        <Section>
            <h2>cocktails</h2>
            <div>
                {cocktails.map((cocktail, index) => {
                    return <Cocktail key={index} cocktail={cocktail}/>;
                })}
            </div>
        </Section>
    );
};

export default CocktailList;