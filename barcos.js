// Função construtura para classe pai
function Embarcacoes(nome, tipo, numeroDeVelas, hpMotor, comprimento) {
    this.nome = nome;
    this.tipo = tipo;
    this.numeroDeVelas = numeroDeVelas;
    this.hpMotor = hpMotor ? hpMotor + " HP": null; // Se hpMotor existir, concatena "HP"
    this.comprimento = comprimento + " metros";
}

// Funções construtoras para as classes filha (herdeiras)
function Veleiro(nome, numeroDeVelas, comprimento) {
    Embarcacoes.call(this, nome, "Veleiro", numeroDeVelas, null, comprimento);
}

function Lancha(nome, hpMotor, comprimento) {
    Embarcacoes.call(this, nome, "Lancha", null, hpMotor, comprimento);
}

// Instâncias de objetos
const veleiroDingue = new Veleiro("Dingue", 1, 4.16);
const veleiroLaser = new Veleiro("Laser", 1, 4.23);
const veleiroSnipe = new Veleiro("Snipe", 2, 4.72);
const lanchaCruiser = new Lancha("Cruiser", 350, 9.12)

console.log(veleiroDingue)
console.log(veleiroLaser)
console.log(veleiroSnipe)
console.log(lanchaCruiser)