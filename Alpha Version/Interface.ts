export interface VerificaPagina{
    Verificarpagina():void;
}

export interface VerificaPersonagem{
    VerificarStatusPersonagem():void;
}

export interface VerInventario{
    VerificarItens():void;
}

export interface VerificarHabilidade{
    VerificarHabilidade():void;
}
export interface VerificarEscolhas{
    VerificarEscolha():void;
}

export interface IEscolha {
    texto: string;
    proximaPagina: number;
}

export interface IPagina {
    id: number;
    texto: string;
    escolhas: IEscolha[];
    executar(): void;
}
