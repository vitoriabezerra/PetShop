const nomePetShop = 'Petoria';

let pets = [{
        nome : 'Pituco',
        tipo : 'cachorro',
        idade: 7,
        raca: 'yorkshire',
        peso: 10,
        tutor: 'Maria Luciene',
        contato: '(81) 99859-1395',
        vacinado: true,
        servicos: ['banho', 'tosa']
},

{nome : 'Lady',
        tipo : 'cachorro',
        idade: 5,
        raca: 'poodle',
        peso: 4,
        tutor: 'Luana',
        contato: '(81) 95659-1395',
        vacinado: false,
        servicos: ['banho', 'tosa']
},
{nome : 'Liliane',
        tipo : 'gato',
        idade: 7,
        raca: 'Vira-lata',
        peso: 5,
        tutor: 'Mariana',
        contato: '(81) 99459-1455',
        vacinado: false,
        servicos: ['tosa', 'vacina']
}];

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

//Criando uma função para imprimir a lista
const listarPets = () => {
    for(let i = 0; i < pets.length; i++ ){
       // console.log(pets[i].nome);
       // console.log(`O nome do pet eh ${pets[i].nome}`);
    }

    for(let pet of pets){
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
vacinarPet(pets[2]);

const verData = () => {

    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    console.log(`Data e Hora do Serviço: ${formatted_date}`)

}

const campanhaVacina = () => {
    let cont =0;

    for(let pet of pets){

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
campanhaVacina();


const adcionarNovoCliente = (cliente) => {
     pets.push(cliente);

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
darBanhoPet(pets[3]);

const tosarPet = (pet) => {
    pet.servicos.push('tosar');
    console.log(`O ${pet.nome} está com cabelinho na régua!`)
    verData();

    
}
tosarPet(pets[3]);

const apararPet = (pet) => {
    pet.servicos.push('aparar unhas');
    console.log(`O ${pet.nome} está de unhas aparadas!`)  
    verData(); 
}
apararPet(pets[3]);