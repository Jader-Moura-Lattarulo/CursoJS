//Polimorfismo
//Superclass

function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag./C: ${this.agencia}/${this.conta}`);
    console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta01 = new Conta(1001, 213154, 10);
console.log(conta01);

conta01.depositar(100);
conta01.sacar(40);
