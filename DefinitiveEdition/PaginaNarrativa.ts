export class PaginaNarrativa {
    paginaNumero: number;
    texto: string;
    escolhas: { descricao: string; proximaPagina: number }[];

    constructor(
        paginaNumero: number,
        texto: string,
        escolhas: { descricao: string; proximaPagina: number }[] = []
    ) {
        this.paginaNumero = paginaNumero;
        this.texto = texto;
        this.escolhas = escolhas;
    }

    Verificarpagina() {
        console.log(`\n${this.texto}`);
        if (this.escolhas.length > 0) {
            console.log("\nEscolhas possíveis:");
            this.escolhas.forEach((opcao, index) => {
                console.log(`${index + 1} - ${opcao.descricao}`);
            });
        }
    }
}
