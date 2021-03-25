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
        vacinado: true,
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

//Criando uma função para imprimir a lista
const listarPets = () => {
    for(let i = 0; i < pets.length; i++ ){
        console.log(pets[i].nome);
    }
}


listarPets();