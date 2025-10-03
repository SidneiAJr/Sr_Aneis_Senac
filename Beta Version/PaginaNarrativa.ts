import { VerificaPagina } from "./Interface";

// Tipo para escolhas
export type Escolha = {
    descricao: string;   // Texto da escolha
    destino: number;     // Número da página para onde vai
};

export class PaginaNarrativa implements VerificaPagina {
    constructor(
        public paginaNumero: number,
        public texto: string,
        public escolhas: Escolha[] = [] // agora cada página pode ter escolhas próprias
    ) {}

    Verificarpagina(): void {
        console.log(`\n=== Página ${this.paginaNumero} ===`);
        console.log(this.texto);

        if (this.escolhas.length > 0) {
            console.log("\nEscolhas disponíveis:");
            this.escolhas.forEach((escolha, i) => {
                console.log(`${i + 1} - ${escolha.descricao} (→ página ${escolha.destino})`);
            });
        }
    }
}
