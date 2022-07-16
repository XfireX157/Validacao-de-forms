import * as C from './Style'

export const CampoTexto = (props) => {

    return(
        <C.Container>
            <C.Label forHtml="Name">
                <C.Icon>
                    <span>{props.icon}</span>
                </C.Icon>
                <C.Input 
                    className={props.Style}
                    value={props.value} 
                    onChange={(e) => props.Change(e.target.value)} 
                    type="text" 
                    id="Name" 
                    placeholder={props.placeholder} 
                    required={props.Mandatory}/>
            </C.Label>
        </C.Container>
    )
}