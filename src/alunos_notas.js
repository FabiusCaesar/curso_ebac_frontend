class Alunos {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const alunos = [
    new Alunos('João', 7),
    new Alunos('Maria', 8),
    new Alunos('Pedro', 5),
    new Alunos('Ana', 4)
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);
console.log(alunosAprovados)