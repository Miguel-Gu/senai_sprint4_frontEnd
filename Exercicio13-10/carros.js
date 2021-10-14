/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(booleano){
    if(booleano == true){
        return true
    }
    else{
        return false
    }
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true);
isTruthy(10);
isTruthy("verdade");
isTruthy({});
isTruthy([]);
isTruthy(new Date());
isTruthy(-10);
isTruthy(1.0);
isTruthy(Infinity);
isTruthy(-Infinity);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = new Object();
carro.marca = "Honda";
carro.modelo = "Fit";
carro.placa = "EEE4444";
carro.ano = 2011;
carro.cor = "cinza";
carro.quantasPortas = 4;
carro.assentos = 5;
carro.quantidadePessoas = 0;

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
mudarCor = function(cor)
{
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
obterCor = function()
{
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
obterModelo = function()
{
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
obterMarca = function()
{
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
obterMarcaModelo = function()
{
    return "Esse carro é um " + obterMarca() + " " + obterModelo();
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function(pessoasEntrarao)
{
    quantidadeDePessoasQueCabem = 5 - carro.quantidadePessoas;
    if (carro.quantidadePessoas == 5) 
    {
        return "Já temos " + carro.quantidadePessoas + " pessoas no carro! O carro já está lotado"
        
    } else
    {
        if (carro.quantidadePessoas + pessoasEntrarao > 5) 
        {
            if (quantidadeDePessoasQueCabem == 1) 
            {
                return "Já temos " + carro.quantidadePessoas + " pessoas no carro! Só cabe mais " + quantidadeDePessoasQueCabem + " pessoa no carro!"
            } 
            else if (quantidadeDePessoasQueCabem > 1) 
            {
                return "Já temos " + carro.quantidadePessoas + " pessoas no carro! Só cabem mais " + quantidadeDePessoasQueCabem + " pessoas no carro!"
            }
            
        } else if (carro.quantidadePessoas + pessoasEntrarao <= 5)
        {
            carro.quantidadePessoas = carro.quantidadePessoas + pessoasEntrarao

            return pessoasEntrarao + " entraram. O carro agora tem " + carro.quantidadePessoas + " pessoas."
        }
    }
}


//Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
//utilize sempre o formato de invocação do método (ou chamada da propriedade),
//adicionando comentários _inline_ ao lado com o valor retornado, se o método
//retornar algum valor.

//Qual a cor atual do carro?
console.log(obterCor());

// Mude a cor do carro para vermelho.
mudarCor("vermelho");

// E agora, qual a cor do carro?
console.log(obterCor());

// Mude a cor do carro para verde musgo.
mudarCor("verde musgo")

// E agora, qual a cor do carro?
console.log(obterCor());

// Qual a marca e modelo do carro?
console.log(obterMarcaModelo());

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2));

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4));

// Faça o carro encher.
console.log(carro.adicionarPessoas(5));

// Tire 4 pessoas do carro.
pessoasVaoSair = 4;
if (carro.quantidadePessoas - pessoasVaoSair < 0)
{
    console.log("não é possível tirar essa quantidade de pessoas do carro")
} else
{
    carro.quantidadePessoas = carro.quantidadePessoas - pessoasVaoSair;
    console.log("O carro agora tem " + carro.quantidadePessoas + " pessoa/s")
}


// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10));

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas);