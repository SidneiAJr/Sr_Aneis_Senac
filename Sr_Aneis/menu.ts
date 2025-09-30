import * as promptSync from "prompt-sync";
const prompt = promptSync();

import { Personagem } from "./InfoPersonagem";
import { HabilidadePersongem } from "./Habilidade";
import { PaginaNarrativa } from "./PaginaNarrativa";
import { PaginaBatalha } from "./Paginabatalha";
import { ClasseOculta } from "./ClasseOculta";

// 🔥 Torna acessível globalmente
const paginasNarrativas: PaginaNarrativa[] = [
    new PaginaNarrativa(1, "Você acorda em uma caverna escura..."),
    new PaginaNarrativa(2, "Ao sair da caverna, vê uma floresta misteriosa."),
    new PaginaNarrativa(3, "Lembra de Gandoff com seu Cajado e da risada."),
    new PaginaNarrativa(4, "Depois de andar pela floresta, vê uns anões caminhando e pergunta a eles onde está o resto do grupo."),
    new PaginaNarrativa(5, "Os anões perguntam se estou procurando Gandoff. Digo a eles que sim."),
    new PaginaNarrativa(6, "Vejo um brilho no horizonte. Gandoff havia invocado o Mecha Gandoff que usou sua magia especial Sentinela Nuclear."),
    new PaginaNarrativa(7, "Me pergunto o que é aquilo. Os anões ficam olhando, pensando o que é aquilo."),
    new PaginaNarrativa(8, "Os anões falam: 'Aquele velho chamou aquela coisa de novo!'"),
    new PaginaNarrativa(9, "Os anões dizem: 'Última vez que ele chamou aquela coisa, explodiu a floresta e destruiu o castelo.'"),
    new PaginaNarrativa(10, "Os anões contam a história de como ele enfrentou seu tutor com o Mecha Gandoff."),
    new PaginaNarrativa(11, "Gandoff descobre um artefato milenar, uma magia arcana suprema e um grimório antigo. Também encontra algumas coisas."),
    new PaginaNarrativa(12, "Tempo depois, Gandoff invoca o Mecha Gandoff que luta com Saruman até seu tutor ficar cansado. Então chama o Nuclear Strike."),
    new PaginaNarrativa(13, "Gandoff sai de perto e seu tutor é incinerado. Ele ri e diz: 'Essa magia é diferenciada.'")
];

// 🌟 MENU PRINCIPAL
function Historia() {
    let opcao = Number(prompt("\n=== Menu Principal ===\n1 - História\n2 - Personagens\n3 - Habilidades Ocultas\n4 - Batalha\n5 - Escolhas Narrativas\n6 - Sair\nEscolha: "));

    while (opcao !== 6) {
        switch (opcao) {
            case 1:
                pagina();
                break;
            case 2:
                Personagem2();
                break;
            case 3:
                Hab();
                break;
            case 4:
                Bat();
                break;
            case 5:
                escolhas();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }

        opcao = Number(prompt("\n=== Menu Principal ===\n1 - História\n2 - Personagens\n3 - Habilidades Ocultas\n4 - Batalha\n5 - Escolhas Narrativas\n6 - Sair\nEscolha: "));
    }
}
Historia();

// 🌟 MOSTRAR TODAS AS PÁGINAS
function pagina() {
    for (const pagina of paginasNarrativas) {
        pagina.Verificarpagina();
    }
}

// 🌟 HABILIDADES
function Hab() {
    const gandalf = new HabilidadePersongem("Cajado", 1, 50, "Mão Oculta", 25, "Gandalf", "Dragão de Fogo");
    const aragorn = new HabilidadePersongem("Espada", 1, 40, "Fúria Élfica", 35, "Aragorn", "Exército dos Homens");
    const frodo = new HabilidadePersongem("Adaga do Portador", 1, 15, "Coragem do Anel", 25, "Frodo", "Determinação");
    const galadriel = new HabilidadePersongem("Anel de Nenya", 1, 45, "Luz de Valinor", 40, "Galadriel", "Aura de Proteção");

    gandalf.VerificarStatusPersonagem();
    aragorn.VerificarStatusPersonagem();
    frodo.VerificarStatusPersonagem();

    gandalf.VerificarItens();
    aragorn.VerificarItens();

    gandalf.VerificarHabilidade();
    aragorn.VerificarHabilidade();
    frodo.VerificarHabilidade();
    galadriel.VerificarHabilidade();
}

// 🌟 PERSONAGENS OCULTOS
function Personagem2() {
    const gadoff = new ClasseOculta("Cajado", 1, 100, "Passiva Maluca", 15, "Gadoff", "Explosão Final");
    const sauron = new ClasseOculta("Cálice Sombrio", 1, 666, "Explosão Cósmica Sombria", 9999, "Sauron", "Sussurro das Trevas");
    const galadriel = new ClasseOculta("Olhar do Vazio", 1, 700, "Explosão Cósmica Sombria", 99999, "Galadriel", "Brilho Eterno");

    gadoff.VerificarStatusPersonagem();
    gadoff.VerificarItens();
    gadoff.VerificarHabilidade();

    sauron.VerificarStatusPersonagem();
    sauron.VerificarItens();
    sauron.VerificarHabilidade();

    galadriel.VerificarStatusPersonagem();
    galadriel.VerificarItens();
    galadriel.VerificarHabilidade();
}

// 🌟 BATALHAS
function Bat() {
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

// 🌟 ESCOLHAS NARRATIVAS
function escolhas() {
    console.log("Você chegou na parte de escolhas da história. Escolha uma opção:");
    const escolha = Number(prompt("1 - Selecionar Página Manualmente\n2 - Sorteio Aleatório de Página\n3 - Ir direto para a Página 3\nEscolha: "));

    switch (escolha) {
        case 1:
            const numPagina = Number(prompt("Digite o número da página (1 a 13): "));
            const paginaEncontrada = paginasNarrativas.find(p => p.paginaNumero === numPagina);
            if (paginaEncontrada) {
                paginaEncontrada.Verificarpagina();
            } else {
                console.log("Página não encontrada.");
            }
            break;

        case 2:
            const paginaSorteada = paginasNarrativas[Math.floor(Math.random() * paginasNarrativas.length)];
            console.log(`Página sorteada: ${paginaSorteada.paginaNumero}`);
            paginaSorteada.Verificarpagina();
            break;

        case 3:
            const pagina3 = paginasNarrativas.find(p => p.paginaNumero === 3);
            if (pagina3) {
                pagina3.Verificarpagina();
            }
            break;

        default:
            console.log("Escolha inválida.");
            break;
    }
}
