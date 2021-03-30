const nomePetShop = 'Petoria';
const fs = require('fs'); //chamando o modulo nativo filesystem

let bancoDados = fs.readFileSync('./bancoDados.json');
bancoDados = JSON.parse(bancoDados);

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
    let petsAtualizado = JSON.stringify(bancoDados, null, 2);
    //atualização do arquivo bancoDados.json
    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
    

}

const listarPets = () => {
   
    bancoDados.pets.forEach( (pet) =>  {

        
        console.log(`Nome: ${pet.nome}, Idade: ${pet.idade} anos, Espécie: ${pet.especie}, Raça: ${pet.raca}, ${(pet.vacinado) ? 'Vacinado': 'Não vacinado'}`);
        
    });
}

const vacinarPet = (pet) => {  

    pet.vacinado? (
        console.log(`O pet ${pet.nome} já está vacinado`)
    ) : (
        pet.vacinado = true,
        console.log(`O pet ${pet.nome} foi vacinado`)
    );
    }

const verData = () => {

    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    console.log(`Data e Hora do Serviço: ${formatted_date}`)

}

const campanhaVacina = () => {
    let cont =0;


    bancoDados.pets.map(pet => {
        if (pet.vacinado == false) {
            pet.vacinado = true;
            cont++;
        }
        
    })
    console.log(`${cont} pets foram vaciados nessa campanha!`)
    atualizarBanco();

}

const adcionarNovoCliente = (cliente) => {
    bancoDados.pets.push(cliente);
    //console.log(bancoDados.pets);
    atualizarBanco();
    console.log(`${cliente.nome} foi adicionado com sucesso!`);

}

const darBanhoPet = (pet) => {
    pet.servicos.push('banho');
    atualizarBanco();
    console.log(`O ${pet.nome} está de banho tomado!`)
    verData();
    
}

const tosarPet = (pet) => {
    pet.servicos.push('tosar');
    atualizarBanco();
    console.log(`O ${pet.nome} está com cabelinho na régua!`)
    verData();

    
}

const apararPet = (pet) => {
    pet.servicos.push('aparar unhas');
    atualizarBanco();
    console.log(`O ${pet.nome} está de unhas aparadas!`)  
    verData(); 
}

const atenderCliente = (pet, servico) =>{
    servico(pet);
    console.log(`${pet.nome} realizou o serviço com sucesso! Obrigado e volte sempre`);

}

const buscarPet = (nome) => {
    const busca = bancoDados.pets.find(petAtual => petAtual.nome == nome);
    console.log(busca);
}

const fitrarTipoPet = (tipo) => {
    const busca = bancoDados.pets.filter(petAtual => petAtual.tipo == tipo);
    console.log(busca);
}

const clientePremium = (pet) =>{
    let quantidade = pet.servicos.length;
    
    if (quantidade > 5) {
        console.log(`Olá, ${pet.nome}! Você é um cliente especial e ganhou um descontão!`);
    } else {
        console.log(`Olá, ${pet.nome}! Você ainda não tem descontos disponiveis!`);
    }
}




listarPets();
//vacinarPet(bancoDados.pets[2]);
//campanhaVacina();
//adcionarNovoCliente(cliente);
//darBanhoPet(pets[3]);
//tosarPet(pets[3]);
//apararPet(pets[3]);
//atenderCliente (bancoDados.pets[4], tosarPet);
//buscarPet('Toto');
//fitrarTipoPet('cachorro');
//clientePremium(bancoDados.pets[1]);