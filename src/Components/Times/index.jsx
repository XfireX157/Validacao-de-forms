import React from "react"
import { Colaborador } from "../Colaborador"
import  * as C from './style'

export const Time = (props) => {
    return(
        <>
            {props.colaboradores.length > 0 ? (
                <C.Container>
                    <C.TxtInfo primary={`4px solid ${props.primary}`}>{props.titulo}</C.TxtInfo>

                    <C.Box primary={props.fundo}>
                    {props.colaboradores.map(colaborador => 
                        <Colaborador 
                        key={colaborador.nome}
                        nome={colaborador.nome} 
                        image={colaborador.image} 
                        cargo={colaborador.cargo} 
                        corDeFundo={props.corSolid}
                        />)}
                    </C.Box>
                </C.Container>
            ): ('')}
        </>
    )
}