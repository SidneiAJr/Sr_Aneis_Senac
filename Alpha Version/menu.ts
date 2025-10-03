import * as promptSync from "prompt-sync";
const prompt = promptSync();

import { Personagem } from "./infoPersonagem";
import { HabilidadePersongem } from "./Habilidade";
import { PaginaNarrativa } from "./PaginaNarrativa";
import { PaginaBatalha } from "./Paginabatalha";
import { ClasseOculta } from "./ClasseOculta";
import { Inventario } from "./inventario";

// ======================== HISTÓRIA ========================
const paginasNarrativas: PaginaNarrativa[] = [
    new PaginaNarrativa(1, "Você acorda em uma caverna escura... O ar é úmido e pesado.", [
        { descricao: "Mergulhar no lago", proximaPagina: 2 },
        { descricao: "Seguir para a saída iluminada", proximaPagina: 5 },
        { descricao: "Entrar no túnel sombrio", proximaPagina: 4 }
    ]),
    new PaginaNarrativa(2, "O laguinho misterioso. Algo brilha no fundo.", [
        { descricao: "Mergulhar para pegar o objeto", proximaPagina: 3 },
        { descricao: "Voltar para o centro da caverna", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(3, "Você encontra um anel dourado brilhante.", [
        { descricao: "Voltar para o centro da caverna", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(4, "Um beco sem saída. Não há saída por aqui.", [
        { descricao: "Voltar para o centro da caverna", proximaPagina: 1 }
    ]),
    // ... (demais páginas já definidas até a 38 no teu código anterior)
];

// ======================== MENUS ========================
function Historia() {
    let opcao: number;

    do {
        console.log("\n=== MENU PRINCIPAL ===");
        console.log("1 - História Completa");
        console.log("2 - Personagens Ocultos");
        console.log("3 - Habilidades");
        console.log("4 - Batalhas");
        console.log("5 - Escolhas Narrativas");
        console.log("6 - Inventário");
        console.log("7 - Sair");

        opcao = Number(prompt("Escolha: "));

        switch (opcao) {
            case 1: mostrarTodasPaginas(); break;
            case 2: mostrarPersonagensOcultos(); break;
            case 3: mostrarHabilidades(); break;
            case 4: batalhas(); break;
            case 5: jogarNarrativa(); break;
            case 6: gerenciarInventario(); break;
            case 7: console.log("Saindo do jogo... Até logo!"); break;
            default: console.log("🤦‍♂️ Opção inválida, tente novamente.");
        }

    } while (opcao !== 7);
}

// ======================== FUNÇÕES DE HISTÓRIA ========================
function mostrarTodasPaginas() {
    for (const pagina of paginasNarrativas) {
        pagina.Verificarpagina();
    }
}

function jogarNarrativa() {
    let paginaAtual = paginasNarrativas.find(p => p.paginaNumero === 1);

    while (paginaAtual) {
        paginaAtual.Verificarpagina();

        if (paginaAtual.escolhas.length === 0) {
            console.log("\n📖 Fim da jornada!");
            break;
        }

        const escolha = Number(prompt("\nEscolha um caminho: "));
        const opcao = paginaAtual.escolhas[escolha - 1];

        if (opcao) {
            paginaAtual = paginasNarrativas.find(p => p.paginaNumero === opcao.proximaPagina);
        } else {
            console.log("❌ Opção inválida.");
        }
    }
}

// ======================== FUNÇÕES DE HABILIDADES ========================
function mostrarHabilidades() {
    const personagens = [
        new HabilidadePersongem("Cajado", 1, 50, "Mão Oculta", 25, "Gandalf", "Dragão de Fogo"),
        new HabilidadePersongem("Espada", 1, 40, "Fúria Élfica", 35, "Aragorn", "Exército dos Homens"),
        new HabilidadePersongem("Adaga do Portador", 1, 15, "Coragem do Anel", 25, "Frodo", "Determinação"),
        new HabilidadePersongem("Anel de Nenya", 1, 45, "Luz de Valinor", 40, "Galadriel", "Aura de Proteção")
    ];

    for (const p of personagens) {
        p.VerificarStatusPersonagem();
        p.VerificarItens();
        p.VerificarHabilidade();
    }
}

// ======================== FUNÇÕES DE PERSONAGENS OCULTOS ========================
function mostrarPersonagensOcultos() {
    const ocultos = [
        new ClasseOculta("Cajado", 1, 100, "Passiva Maluca", 15, "Gadoff", "Explosão Final"),
        new ClasseOculta("Cálice Sombrio", 1, 666, "Explosão Cósmica Sombria", 9999, "Sauron", "Sussurro das Trevas"),
        new ClasseOculta("Olhar do Vazio", 1, 700, "Explosão Cósmica Sombria", 99999, "Galadriel", "Brilho Eterno")
    ];

    for (const p of ocultos) {
        p.VerificarStatusPersonagem();
        p.VerificarItens();
        p.VerificarHabilidade();
    }
}

// ======================== FUNÇÕES DE BATALHAS ========================
function batalhas() {
    const heroi = new Personagem("Espada", 1, 10, "Fúria Oculta", 30, "Aragorn", "Espadada Fatal");
    const batalha1 = new PaginaBatalha(2, "Você entra em uma clareira escura...", "Troll Comum", 25, heroi);

    const heroi2 = new Personagem("Orbe do Infinito", 2, 10, "Fúria Oculta", 30, "Aragorn", "Espadada Fatal");
    const batalha2 = new PaginaBatalha(2, "Você entra em uma Floresta Oculta", "Anão Grande", 25, heroi2);

    const heroi3 = new Personagem("Cajado", 1, 10, "Magia de Fogo", 30, "Gandoff", "Cajado Supremo");
    const batalha3 = new PaginaBatalha(2, "Você entra em uma clareira escura...", "Troll da Montanha", 25, heroi3);

    const heroi4 = new Personagem("Cajado", 1, 10, "Magia de Fogo", 30, "Gandoff", "Mecha Gandoff");
    const batalha4 = new PaginaBatalha(2, "Gandoff luta contra Saruman", "Saruman", 25, heroi4);

    batalha1.Verificarpagina();
    console.log("=== Luta do Aragorn ===");
    batalha2.Verificarpagina();
    console.log("=== Luta do Gandoff ===");
    batalha3.Verificarpagina();
    console.log("=== Luta do Gandoff 2 vs Saruman ===");
    batalha4.Verificarpagina();
}

// ======================== FUNÇÕES DE INVENTÁRIO ========================
function gerenciarInventario() {
    const inventario = new Inventario(10, []);
    inventario.AdicionarItem("Mecha Gandalf");
    inventario.AdicionarItem("Cajado do Gandalf");
    inventario.AdicionarItem("Anel Prime");

    let escolha: number;

    do {
        console.log("\n=== INVENTÁRIO ===");
        console.log("1 - Ver Inventário");
        console.log("2 - Jogar Item Fora");
        console.log("3 - Ver Total de Itens");
        console.log("4 - Voltar ao Menu Principal");

        escolha = Number(prompt("Escolha: "));

        switch (escolha) {
            case 1:
                inventario.VerificarItens();
                break;
            case 2:
                const itemRemover = prompt("Digite o nome do item que deseja remover: ");
                inventario.RemoverItem(itemRemover);
                break;
            case 3:
                console.log(`Total de itens no inventário: ${inventario['itens'].length}`);
                break;
            case 4:
                console.log("Voltando ao Menu Principal...");
                break;
            default:
                console.log("❌ Opção inválida.");
        }
    } while (escolha !== 4);
}

// ======================== INÍCIO DO JOGO ========================
Historia();
