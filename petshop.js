let pets = [{nome:"doug"}];

const listarPets = () => {
    let conteudo = "";
    for (let pet of pets){
        conteudo += `
        ------------------
        Nome: ${pet.nome}
        ------------------`;   
    }
    return conteudo;
};

const adicionarPet = (novoPet) =>{
    return pets.push(novoPet);
};

const buscarPet = nomePet => {
    let petsEncontrados = pets.filter(pet => pet.nome == nomePet)
}

module.exports = {listarPets, adicionarPet, buscarPet};
