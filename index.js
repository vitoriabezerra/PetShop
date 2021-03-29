const nomePetShop = 'Petoria';
const fs = require('fs'); //chamando o modulo nativo filesystem

let bancoDados = fs.readFileSync('./bancoDados.json');
bancoDados = JSON.parse(bancoDados);


//console.log(bancoDados);

//criando um novo cliente
let cliente = {
    nome : 'Toto',
    tipo : 'rato',
    idade: 7,
    raca: 'Twister',
    peso: 0.3,
    tutor: 'Leandro',
    contato: '(81) 99859-1395',
    vacinado: true,
    servicos: []
};

const atualizarBanco = () => {
    //conversão de objeto javascript para JSON
    let petsAtualizado = JSON.stringify(bancoDados);
    //atualização do arquivo bancoDados.json
    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
    

}


//Criando uma função para imprimir a lista
const listarPets = () => {
    for(let i = 0; i < bancoDados.pets.length; i++ ){
       // console.log(pets[i].nome);
       // console.log(`O nome do pet eh ${pets[i].nome}`);
    }
    for(let pet of bancoDados.pets){
        console.log(pet.nome, pet.raca, pet.vacinado, pet.peso);
    }
}

const vacinarPet = (pet) => {  
        if(pet.vacinado == true){ 
            console.log(`O pet ${pet.nome} já está vacinado`);
        }
        else{
            pet.vacinado = true;
            console.log(`O pet ${pet.nome} foi vacinado`);
        }
    }

//escolhendo o pet2 para ser vacinado   
//vacinarPet(pets[2]);

const verData = () => {

    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    console.log(`Data e Hora do Serviço: ${formatted_date}`)

}

const campanhaVacina = () => {
    let cont =0;

    for(let pet of bancoDados.pets){

        if(pet.vacinado == true){ 
            console.log(`O pet ${pet.nome} já está vacinado`);
        }
        else{
            pet.vacinado = true;
            cont++;
            console.log(`O pet ${pet.nome} irá ser vacinado`);
        }       
    }
    console.log(`${cont} pets foram vaciados nessa campanha!`)
}
//campanhaVacina();


const adcionarNovoCliente = (cliente) => {
    bancoDados.pets.push(cliente);
    //console.log(bancoDados.pets);
    atualizarBanco();
    console.log(`${cliente.nome} foi adicionado com sucesso!`);

}

adcionarNovoCliente(cliente);

//printar a lista de pets atualizada
//console.log(pets);

const darBanhoPet = (pet) => {
    pet.servicos.push('banho');
    console.log(`O ${pet.nome} está de banho tomado!`)
    verData();
    
}
//Chamando a função dar banho com o novo cliente
//darBanhoPet(pets[3]);

const tosarPet = (pet) => {
    pet.servicos.push('tosar');
    console.log(`O ${pet.nome} está com cabelinho na régua!`)
    verData();

    
}
//tosarPet(pets[3]);

const apararPet = (pet) => {
    pet.servicos.push('aparar unhas');
    console.log(`O ${pet.nome} está de unhas aparadas!`)  
    verData(); 
}
//apararPet(pets[3]);



