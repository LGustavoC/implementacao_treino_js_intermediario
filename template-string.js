let meuNome = 'L. Gustavo';
let meuSobrenome = 'Cristo';
let minhaProfissao = 'Dev Fullstack';

// Sem Template String
console.log(
    'Olá, eu sou ' + 
    meuNome + 
    ' ' + 
    meuSobrenome + 
    ' minha profissão é: ' +
    minhaProfissao
);

// Com Template String

console.log(
    `Olá, eu sou ${meuNome} ${meuSobrenome} e minha profissão é: ${minhaProfissao}`
);

console.log(
    `O resultado da soma de 1 + 1 = ${1 + 1}`
);

console.log(
    `O objeto json ${{ chave: 'valor'}}`
    );

let meuObjeto = {
    chave: 'novoValor'
}

