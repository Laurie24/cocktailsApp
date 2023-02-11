import { createGlobalStyle } from 'styled-components'
import { primaryColors, secondaryColors } from './theme'
import Bg from '../assets/gradient-color.svg'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    color: ${primaryColors.dark};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    font-size: 16px;
    background-image: url("${Bg}");
    background-position: center;
    background-size: cover;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ul, li {
    list-style-type: none;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input, textarea, button {font-family: inherit}
  ::-webkit-scrollbar {
    width: 20px;
    z-index: 10;
    
    &-track {
      border-radius: 15px;
      box-shadow: 5px 5px 10px ${secondaryColors.purple} inset, -5px -5px 10px #e8dbfd inset;
    }

    &-thumb {
      border-radius: 15px;
      box-shadow: -8px -8px 8px #e8dbfd inset, 4px 4px 4px ${secondaryColors.purple} inset;
      background-color: rgba(${secondaryColors.white}, .5);
      transition: 0.5s ease-in;
      
      &:hover {
        box-shadow: -5px -5px 12px ${secondaryColors.white} inset, 2px 2px 2px ${secondaryColors.purple} inset;
      }
    }
  }
  `
