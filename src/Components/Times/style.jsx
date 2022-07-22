import styled from "styled-components";

export const Container = styled.section`
    text-align: center;
    font-size: 2rem;
    background-color: 2px solid ${props => props.background};
    padding: 32px;
`

export const TxtInfo = styled.h3`
        position: relative;
        display: inline-block;
        padding-bottom: 8px;
        border-bottom: ${(props) => props.primary};
`

export const Box = styled.article`
    background-color: ${(props) => props.primary};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 32px;
`