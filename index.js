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
        let {nome, idade, tipo, raca, vacinado, contato, tutor} = pet;
        
        console.log(`Nome: ${nome}, Tipo: ${tipo}, Idade: ${idade} anos, Raça: ${raca}, ${(vacinado) ? 'Vacinado': 'Não vacinado'}, Tutor: ${tutor}, Contato: ${contato}`);   
    });
}

const vacinarPet = (pet) => {  
    let {nome, vacinado} = pet

    vacinado? (
        console.log(`O pet ${nome} já está vacinado.`)
    ) : (
        vacinado = true,
        console.log(`O pet ${nome} acabou de ser vacinado.`)
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
        let {vacinado} = pet;
        if (!vacinado) {
            pet.vacinado = true;
            cont++;

        }
        
    })
    console.log(`${cont} pets foram vaciados nessa campanha!`)
    atualizarBanco();

}

const adcionarNovoCliente = (cliente) => {

    bancoDados.pets.push(cliente);
    let {nome} = cliente;
    atualizarBanco();
    console.log(`${nome} foi adicionado com sucesso!`);

}

const darBanhoPet = (pet) => {
    let {servicos, nome} = pet;
    servicos.push('banho');
    atualizarBanco();
    console.log(`O ${nome} está de banho tomado!`)
    verData();
    
}

const tosarPet = (pet) => {
    let {servicos, nome} = pet;
    servicos.push('tosar');
    atualizarBanco();
    console.log(`O ${nome} está com cabelinho na régua!`)
    verData();   
}

const apararPet = (pet) => {
    let {servicos, nome} = pet;
    servicos.push('aparar unhas');
    atualizarBanco();
    console.log(`O ${nome} está de unhas aparadas!`)  
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

const contatoTutor = (pet) => {
    let {nome, tutor, contato} = pet;
    
    return `Tutor: ${tutor}
    Contato: ${contato}
    Pet: ${nome}`;
}

const filtrarTutor = (nomeTutor) => {
    let petsTutor = bancoDados.pets.filter((pet) => {
        return pet.tutor == nomeTutor;
    });
    
    console.log(`Pets do tutor ${nomeTutor}:`)
    petsTutor.forEach((pet) => {
        console.log(`${pet.nome} - ${pet.tipo}`)
    })
}

//listarPets();
//vacinarPet(bancoDados.pets[2]);
//campanhaVacina();
//adcionarNovoCliente(cliente);
//darBanhoPet(bancoDados.pets[3]);
//tosarPet(bancoDados.pets[3]);
//apararPet(bancoDados.pets[3]);
//atenderCliente (bancoDados.pets[4], tosarPet);
//buscarPet('Toto');
//fitrarTipoPet('cachorro');
//clientePremium(bancoDados.pets[1]);
//console.log(contatoTutor(bancoDados.pets[0]));
//filtrarTutor('Maria Luciene');