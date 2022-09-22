class telefono{
   private estaPrendido:boolean;
   private bateriaActual:number;
   public mandarMensaje:string;
   public hacerLlamada:number;
   public prenderApagar:string;

constructor(paramestaPrendido:boolean,parambateriaActual:number,parammandarMensaje:string,paramhacerLlamada:number,paramprenderApagar:string){
      this.estaPrendido=paramestaPrendido;
      this.bateriaActual=parambateriaActual;
      this.mandarMensaje=parammandarMensaje;
      this.hacerLlamada=paramhacerLlamada;
      this.prenderApagar=paramprenderApagar;
}

}