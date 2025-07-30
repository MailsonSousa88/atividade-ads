//Crie uma classe Conta com método de transferir(valor:number/destino:Conta) que transfere um valor de uma conta para outra
class Conta {
    public titular : string;
    public saldo : number;

    constructor(titularDaConta:string, saldoDoTitular:number){
        this.titular = titularDaConta;
        this.saldo = saldoDoTitular;
    }

    tranferir(valor:number, destino:Conta): void{
        if(valor > this.saldo){
            //não pode ser executado, saldo negativo
            console.log(`A transferencia foi negada, o valor de transferencia nao pode ser processado!`);
            return;
        }
        this.saldo -= valor;
        destino.saldo += valor;
        console.log(`A transferencia do valor de R$${valor} feita por ${this.titular} foi um sucesso!`);
    }
}

//criando as contas
let pessoa1 = new Conta("Jonas", 10000);
let pessoa2 = new Conta("Julia", 3000);

pessoa1.tranferir(1000, pessoa2);//executando a transferencia para outra conta

console.log(`${pessoa2.titular} esta com saldo atual de R$${pessoa2.saldo}`);


//Crie uma classe Cachorro com um método latir() que imprime "Au au!" no console.
class Cachorro{
   nome:string;
   constructor(n:string){
   this.nome=n;
 };
 latir(){
    console.log('Cachorro esta latindo');
   console.log('Au au');
   };
 };
   let cachorro=new Cachorro('tobias');
   cachorro.latir();

  
   //Crie uma classe Musica com atributos titulo, artista e duracao. Adicione um método tocar() que imprime “Tocando TITULO de ARTISTA”. 
class Musica{ 
  titulo : string; 
  artista : string; 
  duracao : number;

  constructor (titulo : string, artista : string,duracao : number){ 
  this.titulo = titulo;
  this.artista = artista;
  this.duracao = duracao; 
  }
   tocar():void {
     console.log("Tocando " + this.titulo + " de "+ this.artista)
     } 
  }
       let musica = new Musica ("Magica","Calcinha preta",2.30) 
       musica.tocar();