import { Component } from 'react';
import './repositorio.css';


export default class Repositories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaRepositories: [],
            nomeUsuario : '' 
        };
    };


    buscarRepositories = (nomeUsuario) => {

        nomeUsuario.preventDefault();
        fetch('https://api.github.com/users/' + this.state.nomeUsuario + '/repos?per_page=10&sort=author-date-desc')

            .then(resposta => resposta.json())
            .then(dados => this.setState({ listaRepositories: dados }))
            .catch(erro => console.log(erro))
            

    }

    atualizarNome = async(nome) => {
        await this.setState({nomeUsuario: nome.target.value})
        console.log(this.state.nomeUsuario)
    }


    render() {
        return (
            <div>
                <main>

                    <form onSubmit={this.buscarRepositories}>
                        <input type="text" value={this.state.nomeUsuario} placeholder="Nome do usuário" onChange={this.atualizarNome}/>
                        <button type="submit" >Buscar</button>
                    </form>

                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Criado</th>
                                <th>Tamanho</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listaRepositories.map((repositorio) => {
                                    return (
                                        <tr key={repositorio.id}>
                                            <td>{repositorio.id}</td>
                                            <td>{repositorio.name}</td>
                                            <td>{repositorio.description}</td>
                                            <td>{repositorio.created_at}</td>
                                            <td>{repositorio.size}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </main>
            </div>
        )
    }
};