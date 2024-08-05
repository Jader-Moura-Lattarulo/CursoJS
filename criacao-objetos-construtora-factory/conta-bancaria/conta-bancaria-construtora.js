function BankAccount(number, balance){
    this.number = number;
    this.balance = balance;
    this.deposit = function(importance){
        this.balance += importance;
        console.log(`Depósito de ${importance}. Saldo atual: ${this.balance}.`);        
    };   
    this.withdrawal = function(importance){
        if(this.balance >= importance){
            this.balance -= importance;
            console.log(`Saque de ${importance}. Saldo atual: ${this.balance}.`);
        } else {
            console.log('Saldo insuficiente.');
        }
    };
}

const bankAccount01 = new BankAccount('123456', 1000);
bankAccount01.deposit(500);
bankAccount01.withdrawal(200);