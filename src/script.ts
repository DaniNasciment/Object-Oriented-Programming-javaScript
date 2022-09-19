class Clientes {

    public nome: string;
    public email: string;
    public numeroCadastro:number;
    public saldo: number;
    
    public pagar (valor:number) {
        this.saldo -= valor;
    }

    public extornar (valor:number) {
        this.saldo += valor;
    }
    
}
const cliente:Clientes = new Clientes();
const nome = cliente.nome = 'Sandro';
const email = cliente.email = 'sandrovalim@hotmail.com';
const numeroCadastro = cliente.numeroCadastro = 4567;

console.log(`-Novo Cliente`);
console.log(`Nome do cliente é ${cliente.nome}`);
console.log(`E-mail de cadastro é ${cliente.email}`);
console.log(`Numero do cadastro do cliente é ${cliente.numeroCadastro}`);



