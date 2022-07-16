import { Button } from "../Button/Index"
import { CampoTexto } from "../CampoTexto/Index"
import { ListaSuspensa } from "../ListaSuspensa/Index"
import {AiOutlineFileImage, AiOutlineUser} from 'react-icons/ai'
import {RiSuitcaseLine} from 'react-icons/ri'
import{HiOutlineOfficeBuilding} from 'react-icons/hi'
import * as C from './style'
import { useState } from "react"


export const Formulario = () => {
  
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')
    const [error, setError]= useState(false)

    console.log(nome)

    const handleClick = (e) => {
        e.preventDefault()

        if(nome.length == 0 || cargo.length == 0 || image.length == 0 || time.length == 0){
             setError(true)
        }else{
             setError(false)

             setCargo('')
             setNome('')
             setImage('')
        }   
    }

    return( 
        <C.Container>
            <C.Forms onSubmit={handleClick} >
                <legend>Preencha os dados para criar um card do colaborador</legend>
                <CampoTexto
                    label="Nome" 
                    icon={<AiOutlineUser/>} 
                    placeholder="Digite seu nome"
                    value={nome}
                    Change={(e) => setNome(e)}
                    Style={error ? `error` : ""}
                    />
                    {error ? (
                        <C.invalid>Campo invalido</C.invalid> 
                    ): (
                       <></>
                    )}
                <CampoTexto  
                    label="Cargo" 
                    icon={<RiSuitcaseLine/>} 
                    placeholder="Digite seu cargo"
                    value={cargo}
                    Change={(e) => setCargo(e)}
                    Style={error ? `error` : ""}
                    />
                    {error ? (
                        <C.invalid>Campo invalido</C.invalid> 
                    ): (
                       <></>
                    )}
                <CampoTexto  
                    label="Imagem" 
                    icon={<AiOutlineFileImage/>} 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    Change={(e) => setImage(e)}
                    Style={error ? `error` : ""}
                    />
                    {error ? (
                        <C.invalid>Campo invalido</C.invalid> 
                    ): (
                       <></>
                    )}
                <ListaSuspensa
                    value={time}
                    Change={(e) => setTime(e)} 
                    Style={error ? `error` : ""}
                    icon={<HiOutlineOfficeBuilding/>}/>
                    {error ? (
                        <C.invalid>Campo invalido</C.invalid> 
                    ): (
                       <></>
                    )}
                <Button>Criar card</Button>
            </C.Forms>
        </C.Container>
    )
}