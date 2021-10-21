import React from 'react';
import './App.css';

// Define um componente funcional DataFormatada que retorn o subtítulo com o valo da hora formatado
function DataFormatada(props) {
  return <h2>Horário Atual: {props.date.toLocaleTimeString()}</h2>
}

//Componente de classe
//Define a classe Clock que será chamada dentro da renderização do componente App
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // Define a propriedade date pegando a data e hora atual
      date : new Date()
    };
  }

  // Define a função thick() que atualiza a propriedade date com a data e hora atual
  // toda vez que a função for invocada
  thick(){
    this.setState({
      date : new Date()
    })
  }

  pause(){
    this.componentWillUnmount()
    console.log('Relógio ' + this.timerID + ' pausado')
  }

  resume(){
    this.timerID = setInterval( () => {
      this.thick()
    }, 1000)
    console.log('Relógio retomado!')
    console.log('Agora eu sou o relógio ' + this.timerID)
  }

  // Ciclo de vida que ocorre quando o componente Clock é inserio na árvore DOM
  // ou seja, o ciclo de vida de montagem/nascimento
  componentDidMount(){
    this.timerID = setInterval( () => {
      this.thick()
    }, 1000)

    //Exibe no console o ID de cada relógio
    console.log('Eu sou o relógio ' + this.timerID);
  };

  // Ciclo de vida que ocorre quando o componente Clock é removido da árvore DOM
  // ou seja, o ciclo de vida da desmontagem/morte
  // Quando isso ocorre, a função clearInterval limpa o relógio criado pela função
  // setInterval
  componentWillUnmount(){
    clearInterval(this.timerID);
  };

  // Renderia o conteúdo do retorno na tela
  render(){
    return(
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
        <button onClick={() => this.pause()}>Pausar relógio</button>
        <button onClick={() => this.resume()}>Retomar relógio</button>
      </div>
    )
  }
}

//Componente funcional
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
}

export default App;
