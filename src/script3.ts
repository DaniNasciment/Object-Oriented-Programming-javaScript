class Eletronicos {

    public modeloCel: string;
    public numEntradas: number;
    public operadora: string;
    public saldoCel: number;
    
    public credito (uso:number) {
        this.saldoCel -= uso;
    }


}

const eletro:Eletronicos = new Eletronicos ();
const modeloCel = eletro.modeloCel = "Sansung A20";
const numEntradas = eletro.numEntradas = 2;
const operadora = eletro.operadora = "vivo";
const saldoCel = eletro.saldoCel = 37;

console.log(`O modelo do eletronico é ${eletro.modeloCel}`);
console.log(`Numero de entradas: ${eletro.numEntradas}`);
console.log(`Operadora é a(o) ${eletro.operadora}`);
console.log(`O saldo disponivel é de ${eletro.saldoCel}`);