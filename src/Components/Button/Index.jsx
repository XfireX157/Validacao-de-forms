import * as C from './style'

export const Button = (props) => {


    return (
        <C.Container>
            <C.Btn>{props.children}</C.Btn>
        </C.Container>
    )
}