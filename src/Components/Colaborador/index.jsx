import React from "react";
import * as C from './style'

export const Colaborador = (props) => {
    return(
        <C.Colaborador>
            <C.Cabecalho corFundo={props.corDeFundo}>
                <img src={props.image} alt={props.nome} />
            </C.Cabecalho>
            <C.Rodape>
                <h4>{props.nome}</h4>  
                <h5>{props.cargo}</h5>
            </C.Rodape>
        </C.Colaborador>
    )
}