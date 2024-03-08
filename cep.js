document.getElementById('btnBuscar').addEventListener('click', consultarCep);

function consultarCep(){
    var cep = document.getElementById('cepinput').value;

    fetch (`https://viacep.com.br/ws/${cep}/json/`)

    .then(resposta => resposta.json())
    .then(dados =>{
        var resultDiv = document.getElementById('resultado');
        if (dados.erro){
            resultDiv.innerHTML = 'CEP nao encontrado!';
        }
        else{
            resultDiv.innerHTML = `
          <p> <strong> Logradouro: </strong> ${dados.logradouro} </p>
          <p> <strong> Bairro: </strong> ${dados.bairro} </p> 
          <p> <strong> Localidade: </strong> ${dados.localidade} - ${dados.uf} </p>
          
        `            
        }
    })
    .catch(error =>{
         console.log('Erro na requisição', error);
         resultDiv = 'Erro na requisição!'

    })


    }
