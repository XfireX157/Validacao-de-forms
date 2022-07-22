
import * as C from './style'

export const ListaSuspensa = (props) => {
    return(
        <C.Container>
            <C.Label>{props.label}
                <C.Icon>{props.icon}</C.Icon>
                <select 
                    className={props.Style}
                    value={props.value} 
                    onChange={(e) => props.Change(e.target.value)}>
                        <option value=""></option>
                        {props.campo.map((item) => {
                            return <option key={item}>{item}</option>
                        })}
                </select>
            </C.Label>
        </C.Container>
    )
} 