import { useState } from "react";
import { Banner } from "../../Components/Banner/Index";
import { Footer } from "../../Components/Footer";
import { Formulario } from "../../Components/Formulario";
import { Time } from "../../Components/Times";
import {Cards} from '../../Mock/Cards'

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador = (colaborador) => {
    console.log(colaborador)

    setColaboradores([...colaboradores, colaborador])
  }

  return (
      <>
        <Banner/>
        <Formulario ColaborationSingUp={colaborador => aoNovoColaborador(colaborador)}/>

        {Cards.map((time) => <Time
            key={time.id} 
            titulo={time.nome} 
            fundo={time.background}
            primary={time.corSolid}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            />
        )}
        <Footer/>
      </>
      
  );
}

export default App

