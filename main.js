const Decimal = require('decimal.js');


function ColaboradorDev(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.colaboradorSalarioAtual = function ColaboradorSalarioAtual(salario) {
        return salario * 1.1;
    }
}

function ColaboradorDevJunior(salario) {
    ColaboradorDev.call(this, "Santos", 30);
    this.colaboradorSalarioAtual = function (salario) {
        const resultado = new Decimal(salario).mul(1.15);
        return resultado;
    }
    
    this.salarioAtualizado = this.colaboradorSalarioAtual(salario);
}

function ColaboradorDevPleno(salario){
    ColaboradorDev.call(this, "Wll", 34);
    this.colaboradorSalarioAtual = function(salario){
        const resultado = new Decimal(salario).mul(1.18);
        return resultado;
    }
    this.salarioAtualizado = this.colaboradorSalarioAtual(salario);
}

function ColaboradorDevSenior(salario) {
    ColaboradorDev.call(this, "Souza", 38);
    this.colaboradorSalarioAtual = function (salario) {
        const resultado = Decimal(salario).mul(1.2);
        return resultado;
    }
    this.salarioAtualizado = this.colaboradorSalarioAtual(salario);
}




const devJunior = new ColaboradorDevJunior(5000);
const devPleno = new ColaboradorDevPleno(8500);
const devSenior = new ColaboradorDevSenior(10000);


    console.log(`Dev Junior: ${devJunior.nome} - Salario Atualizado: ${devJunior.salarioAtualizado}`);
    console.log(`Dev Senior: ${devPleno.nome} - Salario Atualizado: ${devPleno.salarioAtualizado}`);
    console.log(`Dev Senior: ${devSenior.nome} - Salario Atualizado: ${devSenior.salarioAtualizado}`);
    

