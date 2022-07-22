import styled from "styled-components";

export const Colaborador = styled.div`
    width: 280px;
    padding: 32px;
    img{
        width: 100px;
        border-radius: 50%;
        position: relative;
        bottom: -50px;
    }
`

export const Cabecalho = styled.div`
    background-color: ${(props) => props.corDeFundo};
    border-radius: 10px 10px 0 10px;
`

export const Rodape = styled.div`
    background-color: #FFFF;
    box-shadow: 5px 5px 15px rgba(0,0,0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;

    h4{
        color: #6278F7;
        font-size: 1.2rem;
        line-height: 22px;
        font-weight: bold;
        margin-bottom: 8px;
    }

    h5{
        font-size: 1.2rem;
        line-height: 22px;
        color: #212121;
        padding: 0 16px;
    }
`
