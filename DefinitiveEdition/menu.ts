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
    new PaginaNarrativa(5, "Você segue em direção à saída iluminada. O ar fica mais fresco à medida que você avança.", [
        { descricao: "Entrar na sala secreta à esquerda", proximaPagina: 6 },
        { descricao: "Continuar em frente", proximaPagina: 7 }
    ]),
    new PaginaNarrativa(6, "Você encontra uma sala secreta cheia de livros antigos e pergaminhos.", [
        { descricao: "Ler os livros antigos", proximaPagina: 8 },
        { descricao: "Voltar para o corredor", proximaPagina: 5 }
    ]),
    new PaginaNarrativa(7, "Você chega em uma grande sala. No centro, há uma pedra misteriosa que brilha suavemente.", [
        { descricao: "Tocar a pedra", proximaPagina: 9 },
        { descricao: "Procurar por mais pistas na sala", proximaPagina: 10 }
    ]),
    new PaginaNarrativa(8, "Os livros falam sobre um antigo artefato perdido, o 'Cálice de Fogo'.", [
        { descricao: "Sair da sala secreta", proximaPagina: 6 }
    ]),
    new PaginaNarrativa(9, "Ao tocar a pedra, uma onda de energia percorre seu corpo. Você é transportado para uma nova dimensão.", [
        { descricao: "Explorar essa nova dimensão", proximaPagina: 11 },
        { descricao: "Voltar para a caverna", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(10, "Você encontra uma pista sobre um item perdido, o 'Anel da Eternidade'.", [
        { descricao: "Procurar mais pistas", proximaPagina: 12 },
        { descricao: "Voltar para o centro da caverna", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(11, "Você está em um mundo estranho, onde o tempo não parece passar da mesma forma.", [
        { descricao: "Continuar explorando", proximaPagina: 13 },
        { descricao: "Voltar para a sala misteriosa", proximaPagina: 9 }
    ]),
    new PaginaNarrativa(12, "A pista leva você até uma cripta antiga onde está o 'Anel da Eternidade'.", [
        { descricao: "Pegar o anel", proximaPagina: 14 },
        { descricao: "Deixar o anel e voltar", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(13, "Você encontra um ser misterioso que fala em enigmas.", [
        { descricao: "Tentar resolver o enigma", proximaPagina: 15 },
        { descricao: "Ignorar o enigma e continuar explorando", proximaPagina: 16 }
    ]),
    new PaginaNarrativa(14, "Você coloca o anel e sente uma onda de poder imensa. Você começa a ver visões do futuro.", [
        { descricao: "Tentar controlar o poder", proximaPagina: 17 },
        { descricao: "Retirar o anel", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(15, "O enigma leva você a uma chave secreta que pode abrir uma porta para outra parte da caverna.", [
        { descricao: "Usar a chave para abrir a porta", proximaPagina: 18 },
        { descricao: "Deixar a chave e sair", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(16, "Você encontra uma ponte quebrada, mas consegue atravessar com sucesso.", [
        { descricao: "Seguir para a nova área", proximaPagina: 19 },
        { descricao: "Voltar à sala anterior", proximaPagina: 9 }
    ]),
    new PaginaNarrativa(17, "O poder do anel é imenso. Você começa a dominar o controle temporal.", [
        { descricao: "Usar o poder para voltar no tempo", proximaPagina: 20 },
        { descricao: "Usar o poder para destruir os inimigos", proximaPagina: 21 }
    ]),
    new PaginaNarrativa(18, "A porta se abre, revelando um vasto templo antigo.", [
        { descricao: "Explorar o templo", proximaPagina: 22 },
        { descricao: "Voltar para a caverna", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(19, "Você entra em uma nova área cheia de inimigos.", [
        { descricao: "Lutar contra os inimigos", proximaPagina: 23 },
        { descricao: "Tentar negociar com eles", proximaPagina: 24 }
    ]),
    new PaginaNarrativa(20, "Ao voltar no tempo, você altera o curso de eventos. Uma nova realidade começa a surgir.", [
        { descricao: "Explorar essa nova realidade", proximaPagina: 25 },
        { descricao: "Voltar para o presente", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(21, "Usando o poder, você destrói todos os inimigos ao seu redor.", [
        { descricao: "Explorar os destroços", proximaPagina: 26 },
        { descricao: "Seguir em frente", proximaPagina: 27 }
    ]),
    new PaginaNarrativa(22, "Dentro do templo, você encontra um altar com um artefato misterioso.", [
        { descricao: "Pegar o artefato", proximaPagina: 28 },
        { descricao: "Examinar o altar", proximaPagina: 29 }
    ]),
    new PaginaNarrativa(23, "Você luta bravamente, mas os inimigos são muitos.", [
        { descricao: "Desistir e fugir", proximaPagina: 30 },
        { descricao: "Continuar lutando", proximaPagina: 31 }
    ]),
    new PaginaNarrativa(24, "Os inimigos começam a negociar com você, oferecendo informações valiosas.", [
        { descricao: "Aceitar a negociação", proximaPagina: 32 },
        { descricao: "Recusar e lutar", proximaPagina: 23 }
    ]),
    new PaginaNarrativa(25, "A nova realidade é estranha, cheia de paradoxos e seres desconhecidos.", [
        { descricao: "Investigar o novo mundo", proximaPagina: 33 },
        { descricao: "Voltar para a realidade original", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(26, "Nos destroços, você encontra uma pista sobre um tesouro escondido.", [
        { descricao: "Seguir a pista", proximaPagina: 34 },
        { descricao: "Voltar ao ponto inicial", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(27, "Você segue em frente e encontra uma criatura mística.", [
        { descricao: "Conversar com a criatura", proximaPagina: 35 },
        { descricao: "Atacar a criatura", proximaPagina: 36 }
    ]),
    new PaginaNarrativa(28, "O artefato brilha com uma luz intensa. Algo de poderoso acontece.", [
        { descricao: "Usar o artefato", proximaPagina: 37 },
        { descricao: "Guardar o artefato", proximaPagina: 38 }
    ]),
    new PaginaNarrativa(29, "O altar revela uma inscrição antiga que contém o segredo de um grande poder.", [
        { descricao: "Decifrar a inscrição", proximaPagina: 39 },
        { descricao: "Ignorar e sair", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(30, "Você foge para a segurança, mas se sente impotente.", [
        { descricao: "Voltar para a luta", proximaPagina: 23 },
        { descricao: "Procurar um refúgio", proximaPagina: 1 }
    ]),
    new PaginaNarrativa(31, "Após uma luta difícil, você consegue derrotar todos os inimigos.", [
        { descricao: "Procurar tesouros entre os inimigos", proximaPagina: 40 },
        { descricao: "Seguir para a próxima área", proximaPagina: 41 }
    ]),
    new PaginaNarrativa(32, "As informações revelam um caminho secreto.", [
        { descricao: "Seguir o caminho secreto", proximaPagina: 42 },
        { descricao: "Ignorar e continuar", proximaPagina: 43 }
    ]),
    new PaginaNarrativa(33, "O novo mundo parece um sonho, mas as regras são imprevisíveis.", [
        { descricao: "Tentar sair do novo mundo", proximaPagina: 44 },
        { descricao: "Explorar mais", proximaPagina: 45 }
    ]),
    new PaginaNarrativa(34, "A pista leva você até um esconderijo secreto, cheio de tesouros.", [
        { descricao: "Pegar os tesouros", proximaPagina: 46 },
        { descricao: "Ignorar os tesouros e sair", proximaPagina: 47 }
    ]),
    new PaginaNarrativa(35, "A criatura começa a contar histórias antigas e sábias.", [
        { descricao: "Ouvir mais histórias", proximaPagina: 48 },
        { descricao: "Fugir da criatura", proximaPagina: 49 }
    ])
];


// ======================== MENUS ========================
function Historia() {
    let opcao: number;

    do {
        console.log("\n=== MENU PRINCIPAL ===");
        console.log("1 - História Completa");
        console.log("2 - Personagens Ocultos - Easter eggs");
        console.log("3 - Habilidades Personagens");
        console.log("4 - Batalhas Fora da Realidade");
        console.log("5 - Escolhas Narrativas - Caminhos");
        console.log("6 - Inventário do Player");
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

// ======================== FUNÇÕES DE HISTÓRIA ========================
function jogarNarrativa() {
    // Inicia a jornada na primeira página
    let paginaAtual = paginasNarrativas.find(p => p.paginaNumero === 1);
    
    // Loop enquanto houver uma página atual
    while (paginaAtual) {
        paginaAtual.Verificarpagina();  // Exibe o conteúdo da página atual
        
        if (paginaAtual.escolhas.length === 0) {
            // Caso a página não tenha mais escolhas, encerra a jornada
            console.log("\n📖 Fim da jornada!");
            break;
        }
        
        // Exibe as escolhas para o jogador
        console.log("\nEscolhas:");
        paginaAtual.escolhas.forEach((opcao, index) => {
            console.log(`${index + 1} - ${opcao.descricao}`);
        });

        // Pergunta ao jogador qual escolha ele deseja fazer
        let escolha: number;
        do {
            escolha = Number(prompt("\nEscolha um caminho (número): "));
        } while (isNaN(escolha) || escolha < 1 || escolha > paginaAtual.escolhas.length);

        // Recupera a próxima página com base na escolha
        const opcaoSelecionada = paginaAtual.escolhas[escolha - 1];
        
        // Encontra a próxima página com base na escolha
        paginaAtual = paginasNarrativas.find(p => p.paginaNumero === opcaoSelecionada.proximaPagina);

        if (!paginaAtual) {
            console.log("Página não encontrada. Terminando a jornada.");
            break;
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
