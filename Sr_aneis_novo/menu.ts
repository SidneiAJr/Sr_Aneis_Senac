// Importa o pacote prompt-sync (para capturar entrada do usuário no terminal)
import * as promptSync from "prompt-sync";
const prompt = promptSync();

// Importa classes de outros arquivos para usar no jogo
import { Personagem } from "./infoPersonagem";
import { HabilidadePersongem } from "./Habilidade";
import { PaginaNarrativa } from "./PaginaNarrativa";
import { PaginaBatalha } from "./Paginabatalha";
import { ClasseOculta } from "./ClasseOculta";
import { Inventario } from "./inventario";

// =================== HISTÓRIA / NARRATIVA ===================
// Criação de todas as páginas narrativas (cada uma é um "capítulo" do jogo)
const paginasNarrativas: PaginaNarrativa[] = [
    new PaginaNarrativa(1, "Você acorda em uma caverna escura..."),
    new PaginaNarrativa(2, "O laguinho misterioso..."),
    new PaginaNarrativa(3, "O anel dourado..."),
    new PaginaNarrativa(4, "O beco sem saída..."),
    new PaginaNarrativa(5, "A floresta misteriosa..."),
    new PaginaNarrativa(6, "A bifurcação na floresta..."),
    new PaginaNarrativa(7, "O encontro com os anões..."),
    new PaginaNarrativa(8, "A batalha dos magos..."),
    new PaginaNarrativa(9, "A queda de Saruman..."),
    new PaginaNarrativa(10, "A jornada a Mordor..."),
    new PaginaNarrativa(11, "O confronto final em Mordor..."),
    new PaginaNarrativa(12, "Após a vitória esmagadora de Sidtopiazord..."),
    new PaginaNarrativa(13, "A escolha final..."),
    new PaginaNarrativa(14, "O triunfo da luz..."),
    new PaginaNarrativa(15, "O nascimento de um novo mal..."),
    new PaginaNarrativa(16, "A floresta incendiada..."),
    new PaginaNarrativa(17, "Voltando para casa..."),
    new PaginaNarrativa(18, "A vitória do Mal..."),
    new PaginaNarrativa(19, "O domínio de Sauron..."),
    new PaginaNarrativa(20, "A Caverna dos Trolls..."),
    new PaginaNarrativa(21, "O Combate Contra os Trolls..."),
    new PaginaNarrativa(22, "Enganando os Trolls..."),
    new PaginaNarrativa(23, "A Aparição de Aragorn..."),
    new PaginaNarrativa(24, "A Cidade dos Elfos..."),
    new PaginaNarrativa(25, "A Dádiva de Mithril..."),
    new PaginaNarrativa(26, "Seguindo sem a Dádiva de Mithril..."),
    new PaginaNarrativa(27, "Rumo ao Coração das Trevas..."),
    new PaginaNarrativa(28, "A Trilha Aberta..."),
    new PaginaNarrativa(29, "O Desfiladeiro Estreito..."),
    new PaginaNarrativa(30, "Combate na Trilha Aberta..."),
    new PaginaNarrativa(31, "Combate com Magia do Anel..."),
    new PaginaNarrativa(32, "Combate Corpo a Corpo..."),
    new PaginaNarrativa(33, "Desfiladeiro – Ataque com Adaga Élfica..."),
    new PaginaNarrativa(34, "Desfiladeiro – Magia do Anel..."),
    new PaginaNarrativa(35, "Desfiladeiro – Corpo a Corpo..."),
    new PaginaNarrativa(36, "A Chegada a Mordor..."),
    new PaginaNarrativa(37, "Vitória Contra Sauron..."),
    new PaginaNarrativa(38, "Derrota Catastrófica..."),
];

// =================== FUNÇÕES DE MENU ===================
function Historia() {
    // Pergunta inicial para o jogador no menu
    let opcao = Number(prompt("\n=== Menu Principal ===\n1 - História Direta \n2 - Personagens\n3 -  Habilidade Ocultas(EasterEggs)\n4 - Batalhas \n5 - Escolhas de Caminhos\n6 - Inventário\n7 - Sair\nEscolha: "));

    // Enquanto o jogador não escolher "7 - Sair", o menu continua
    while (opcao !== 7) {
        switch (opcao) {
            case 1:
                pagina(); // Mostra toda a história direto
                break;
            case 2:
                Personagem2(); // Mostra personagens ocultos
                break;
            case 3:
                Hab(); // Mostra habilidades dos personagens
                break;
            case 4:
                Bat(); // Executa batalhas
                break;
            case 5:
                escolhas(); // Caminhos narrativos (jogo interativo)
                break;
            case 6:
                Inv(); // Acessa inventário
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
        // Pergunta de novo até o jogador sair
        opcao = Number(prompt("\n=== Menu Principal ===\n1 - História Direta \n2 - Personagens\n3 -  Habilidade Ocultas(EasterEggs)\n4 - Batalhas \n5 - Escolhas de Caminhos\n6 - Inventário\n7 - Sair\nEscolha: "));
    }
    console.log("Saindo do jogo... Até logo!");
}
Historia(); // Chama o menu principal para iniciar o jogo

// =================== SUBFUNÇÕES ===================

// MOSTRAR TODAS AS PÁGINAS
function pagina() {
    for (const pagina of paginasNarrativas) {
        pagina.Verificarpagina(); // Mostra cada capítulo da narrativa
    }
}

// HABILIDADES
function Hab() {
    // Cria personagens com habilidades especiais
    const gandalf = new HabilidadePersongem("Cajado", 1, 50, "Mão Oculta", 25, "Gandalf", "Dragão de Fogo");
    const aragorn = new HabilidadePersongem("Espada", 1, 40, "Fúria Élfica", 35, "Aragorn", "Exército dos Homens");
    const frodo = new HabilidadePersongem("Adaga do Portador", 1, 15, "Coragem do Anel", 25, "Frodo", "Determinação");
    const galadriel = new HabilidadePersongem("Anel de Nenya", 1, 45, "Luz de Valinor", 40, "Galadriel", "Aura de Proteção");

    // Mostra status e habilidades
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

// PERSONAGENS OCULTOS (Easter Eggs)
function Personagem2() {
    const gadoff = new ClasseOculta("Cajado", 1, 100, "Passiva Maluca", 15, "Gadoff", "Explosão Final");
    const sauron = new ClasseOculta("Cálice Sombrio", 1, 666, "Explosão Cósmica Sombria", 9999, "Sauron", "Sussurro das Trevas");
    const galadriel = new ClasseOculta("Olhar do Vazio", 1, 700, "Explosão Cósmica Sombria", 99999, "Galadriel", "Brilho Eterno");

    // Mostra status dos personagens ocultos
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

// BATALHAS
function Bat() {
    // Cria personagens e páginas de batalha
    const heroi = new Personagem("Espada", 1, 10, "Fúria Oculta", 30, "Aragorn", "Espadada Fatal");
    const batalha1 = new PaginaBatalha(2, "Você entra em uma clareira escura...", "Troll Comum", 25, heroi);

    const heroi2 = new Personagem("Orbe do Infinito", 2, 10, "Fúria Oculta", 30, "Aragorn", "Espadada Fatal");
    const batalha2 = new PaginaBatalha(2, "Você entra em uma Floresta Oculta", "Anão Grande", 25, heroi2);

    const heroi3 = new Personagem("Cajado", 1, 10, "Magia de Fogo", 30, "Gandoff", "Cajado Supremo");
    const batalha3 = new PaginaBatalha(2, "Você entra em uma clareira escura...", "Troll da Montanha", 25, heroi3);

    const heroi4 = new Personagem("Cajado", 1, 10, "Magia de Fogo", 30, "Gandoff", "Mecha Gandoff");
    const batalha4 = new PaginaBatalha(2, "Gandoff luta contra Saruman", "Saruman", 25, heroi4);

    // Executa batalhas
    batalha1.Verificarpagina();
    console.log("=== Luta do Aragorn ===");
    batalha2.Verificarpagina();
    console.log("=== Luta do Gandoff ===");
    batalha3.Verificarpagina();
    console.log("=== Luta do Gandoff 2 vs Saruman ===");
    batalha4.Verificarpagina();
}

// ESCOLHAS NARRATIVAS (história interativa com múltiplos caminhos)
function escolhas() {
    const escolhasNarrativas = [
        {
            pagina: 1,
            escolhas: [
                { descricao: "Sair da caverna → vá para a página 5", destino: 5 },
                { descricao: "Sair da caverna sem olhar o lago → vá para a página 17", destino: 17 },
                { descricao: "Olhar o lago → vá para a página 2", destino: 2 },
                { descricao: "Seguir pelo outro caminho → vá para a página 4", destino: 4 }
            ]
        },
        {
            pagina: 2,
            escolhas: [
                { descricao: "Voltar para a caverna → vá para a página 1", destino: 1 },
                { descricao: "Mergulhar para pegar o item → vá para a página 3", destino: 3 }
            ]
        },
        {
            pagina: 3,
            escolhas: [
                { descricao: "Retornar ao centro da caverna → vá para a página 1", destino: 1 }
            ]
        },
        // ... continua para as demais páginas
    ];

    let paginaAtual = 1;
    while (true) {
        const pagina = paginasNarrativas.find(p => p.paginaNumero === paginaAtual);
        const opcoes = escolhasNarrativas.find(e => e.pagina === paginaAtual);

        if (pagina) pagina.Verificarpagina();

        if (!opcoes || opcoes.escolhas.length === 0) {
            console.log("Fim da história.");
            break;
        }

        // Mostra escolhas possíveis
        console.log("\nO que você faz?");
        opcoes.escolhas.forEach((op, i) => {
            console.log(`${i + 1} - ${op.descricao}`);
        });

        const escolha = Number(prompt("Escolha: "));
        const opcao = opcoes.escolhas[escolha - 1];

        if (opcao) {
            paginaAtual = opcao.destino; // Muda a página de acordo com a escolha
        } else {
            console.log("Opção inválida.");
        }
    }
}

// INVENTÁRIO
function Inv() {
    const inventario = new Inventario(10, []); // Cria inventário com limite de 10 itens
    inventario.AdicionarItem("Mecha Gandalf");
    inventario.AdicionarItem("Cajado do Gandalf");
    inventario.AdicionarItem("Anel Prime");

    // Menu do inventário
    let escolha = Number(prompt("1 - Ver Inventário \n2 - Jogar Item Fora \n3 - Ver Inventário Total \n4 - Voltar ao Menu Principal\nEscolha: "));

    while (escolha !== 4) {
        switch (escolha) {
            case 1:
                inventario.VerificarItens(); // Lista os itens
                break;
            case 2:
                const itemRemover = prompt("Digite o nome do item que deseja remover: ");
                inventario.RemoverItem(itemRemover); // Remove item pelo nome
                break;
            case 3:
                console.log(`Total de itens no inventário: ${inventario['itens'].length}`);
                break;
            default:
                console.log("Opção inválida.");
        }
        escolha = Number(prompt("1 - Ver Inventário \n2 - Jogar Item Fora \n3 - Ver Inventário Total \n4 - Voltar ao Menu Principal\nEscolha: "));
    }
}
