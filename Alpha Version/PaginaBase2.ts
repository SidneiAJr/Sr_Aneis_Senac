import { IEscolha, IPagina } from "./Interface";

export abstract class PaginaBase2 implements IPagina {
    constructor(
        public id: number,
        public texto: string,
        public escolhas: IEscolha[] = []
    ) {}

    abstract executar(): void;

    protected mostrarEscolhas(): void {
        console.log(`\n--- Página ${this.id} ---`);
        console.log(this.texto);

        if (this.escolhas.length > 0) {
            console.log("\n--- Suas opções ---");
            this.escolhas.forEach((escolha, i) => {
                console.log(`${i + 1}. ${escolha.texto}`);
            });
        } else {
            console.log("\n[Fim da história]");
        }
    }
}
