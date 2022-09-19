class Avioes {

    public numPoltronas: number;
    public numJanelas: number;
    public modelo: string;
    
    public reservar (reservado:number) {
        this.numPoltronas -= reservado;
    }

}

const aviao:Avioes = new Avioes();
const numPoltronas = aviao.numPoltronas = 170;
const numJanelas = aviao.numJanelas = 120;
const modelo = aviao.modelo = 'Ak245';

console.log(`O numero de poltronas no avião é ${aviao.numPoltronas}`);
console.log(`O numero de janelas no avião é ${aviao.numJanelas}`);
console.log(`O modelo do avião é ${aviao.modelo}`);
