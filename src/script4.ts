class Funcionarios {

    public nomeCompleto: string;
    public idade: number;
    public folgasMes: number;
    public salarioMes: number;

    public pagamento (horasExtras:number){
        this.salarioMes += horasExtras*0.20; 
    }

}

const funcionario:Funcionarios = new Funcionarios();
const nomeCompleto = funcionario.nomeCompleto = "Adriana Gomes";
const idade = funcionario.idade = 30;
const folgasMes = funcionario.folgasMes = 4;
const salarioMes = funcionario.salarioMes = 4000;

console.log(`Nome completo do funcionario: ${funcionario.nomeCompleto}`);
console.log(`Idade do funcionario: ${funcionario.idade}`);
console.log(`Numero de folgas que o funcionario utilizou ${funcionario.folgasMes}`);
console.log(`Salario do funcionario ${funcionario.salarioMes}`);
