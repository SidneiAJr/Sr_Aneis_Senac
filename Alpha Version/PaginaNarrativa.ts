export class PaginaNarrativa {
    constructor(
        public paginaNumero: number,
        public texto: string,
        public escolhas: Escolha[] = []
    ) {}

    mostrar(): void {
        console.log(`\n=== Página ${this.paginaNumero} ===`);
        console.log(this.texto);

        if (this.escolhas.length > 0) {
            console.log("\nO que você faz?");
            this.escolhas.forEach((op, i) => {
                console.log(`${i + 1} - ${op.descricao}`);
            });
        } else {
            console.log("\n📖 Fim da história.");
        }
    }
}
