function BankAccount(number, balance) {
    return{
        number:number,
        balance:balance,
        deposit(importance){
            this.balance += importance;
            console.log(`Depósito de ${importance}. Saldo atual: ${this.balance}.`);
        },
        withdrawal(importance){
            if(this.balance >= importance) {
                this.balance -= importance;
                console.log(`Saque de ${importance}. Saldo atual: ${this.balance}.`);
            } else {
                console.log(`Saldo insuficiente.`);
            }
        }
    };
}

const bankAccount01 = BankAccount('123456789', 1000);
bankAccount01.deposit(500);
bankAccount01.withdrawal(600);