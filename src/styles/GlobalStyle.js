import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --border-color: #2e344e;
    --background-light-color: #f1f1f1;
    --white-color: #fff;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
}

body {
    background-color: var(--background-dark-color) ;
    color: var(--font-light-color)
}

a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}

h1{
    font-size: 3.5rem;
    color: var(----white-color);
    span {
        font-size: inherit;

    }
}

span {
    color: var(--primary-color)
}

`;

export default GlobalStyle;
