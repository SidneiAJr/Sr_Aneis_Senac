// Interface para escolhas
interface Escolha {
    descricao: string;
    destino: number;
}

// Atualizando PaginaNarrativa para aceitar escolhas
export class PaginaNarrativa {
    constructor(
        public paginaNumero: number,
        public texto: string,
        public escolhas: Escolha[] = [] // <- adicionamos isso
    ) {}

    Verificarpagina(): void {
        console.log(`\n=== Página ${this.paginaNumero} ===\n${this.texto}`);
        if (this.escolhas.length > 0) {
            console.log("\nO que você faz?");
            this.escolhas.forEach((op, i) => {
                console.log(`${i + 1} - ${op.descricao}`);
            });
        } else {
            console.log("\n Historia Terminada.");
        }
    }
}
