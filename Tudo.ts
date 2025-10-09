// menu.ts
// Jogo de texto (POO) - "Senhor dos Anéis" (história fornecida por Jian & Arthur)
// Requer: npm install prompt-sync
import promptSync = require("prompt-sync");
const prompt = promptSync();

// ---------------------- Classes ----------------------
class Jogador {
  nome: string;
  inventario: string[] = [];

  constructor(nome = "Aventureiro") {
    this.nome = nome;
  }

  adicionarItem(item: string) {
    if (this.inventario.indexOf(item) === -1) {
      this.inventario.push(item);
      console.log(`\n✅ Você obteve: ${item}`);
    } else {
      console.log(`\nℹ️ Você já possui: ${item}`);
    }
  }

  possui(item: string): boolean {
    return this.inventario.indexOf(item) !== -1;
  }

  listarInventario() {
    if (this.inventario.length === 0) {
      console.log("\n🎒 Inventário: (vazio)");
    } else {
      console.log("\n🎒 Inventário:");
      for (let i = 0; i < this.inventario.length; i++) {
        console.log(` ${i + 1}. ${this.inventario[i]}`);
      }
    }
  }

  resetInventario() {
    this.inventario = [];
  }
}

class Jogo {
  jogador: Jogador;
  constructor(jogador: Jogador) {
    this.jogador = jogador;
  }

  iniciar() {
    console.clear();
    console.log("🧙‍♂️ Bem-vindo — Aventura: Senhor dos Anéis (POO)");
    prompt("\nPressione ENTER para começar...");
    this.menuPrincipalLoop();
  }

  lerEscolha(validas: string[]) {
    let escolha = "";
    do {
      escolha = (prompt("> ") || "").trim();
      if (validas.indexOf(escolha) === -1) {
        console.log("Opção inválida. Tente novamente.");
      }
    } while (validas.indexOf(escolha) === -1);
    return escolha;
  }

  // ---------------------- Páginas (1..38) ----------------------

  pagina1() {
    console.clear();
    console.log(`## 1 - Você acorda em uma caverna escura…
 O ar é úmido e pesado, e você sente o frio das pedras sob o corpo. Aos poucos, seus olhos se acostumam com a penumbra.
 À esquerda, há um pequeno lago cristalino, e no fundo dele algo brilha intensamente, como se fosse feito de ouro. À frente, uma saída estreita deixa escapar a luz do sol, convidando-o para fora. À direita, um túnel estreito se estende para as profundezas, coberto de musgo e ecoando um som estranho.`);
    console.log("1 - Olhar o lago → página 2");
    console.log("2 - Sair pela saída iluminada → página 5");
    console.log("3 - Sair imediatamente para casa (sem olhar o lago) → página 17");
    console.log("4 - Entrar no túnel sombrio → página 4");
    const e = this.lerEscolha(["1", "2", "3", "4"]);
    if (e === "1") this.pagina2();
    else if (e === "2") this.pagina5();
    else if (e === "3") this.pagina17();
    else this.pagina4();
  }

  pagina2() {
    console.clear();
    console.log(`## 2 - O laguinho misterioso
 A água é tão límpida que você consegue ver sua própria imagem refletida, mas o brilho dourado no fundo chama sua atenção com mais força. Ondulações leves se espalham, como se algo lá embaixo o esperasse.
 Um vento frio sopra pela caverna, quase como um aviso para não se arriscar.`);
    console.log("1 - Mergulhar para pegar o item → página 3");
    console.log("2 - Voltar para o centro da caverna → página 1");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina3();
    else this.pagina1();
  }

  pagina3() {
    console.clear();
    console.log(`## 3 - O anel dourado
 Você mergulha e sente a água gelada cortar sua pele. Tocando o fundo, seus dedos encontram um objeto circular e pesado. É um anel dourado, brilhante e misterioso. Ao segurá-lo, uma estranha energia percorre seu corpo, como se o próprio destino estivesse agora em suas mãos.
 Você sobe de volta à superfície, respira com dificuldade e decide retornar ao centro da caverna.`);
    this.jogador.adicionarItem("Anel do Poder");
    prompt("\nPressione ENTER para voltar ao centro da caverna...");
    this.pagina1();
  }

  pagina4() {
    console.clear();
    console.log(`## 4 - O beco sem saída
 O túnel estreito leva você até um corredor apertado, mas ele termina em um paredão coberto de fungos e raízes secas. Não há saída por aqui. O silêncio é perturbador, e algo parece observá-lo nas sombras.
 Sem alternativas, você volta para onde começou.`);
    prompt("\nPressione ENTER para voltar ao centro da caverna...");
    this.pagina1();
  }

  pagina5() {
    console.clear();
    console.log(`## 5 - A floresta misteriosa
 Saindo da caverna, a luz do sol o cega por alguns instantes. Logo, você percebe estar diante de uma vasta floresta antiga, onde as árvores se erguem como gigantes milenares. O canto dos pássaros mistura-se com estalos de galhos quebrando ao longe. Há algo mágico no ar, mas também um perigo que você não sabe identificar.`);
    console.log("1 - Seguir pela floresta → página 6");
    console.log("2 - Voltar para a caverna → página 1");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina6();
    else this.pagina1();
  }

  pagina6() {
    console.clear();
    console.log(`## 6 - A bifurcação na floresta
 O caminho à sua frente se divide em duas trilhas.
 A da esquerda é estreita, com pegadas pequenas que lembram passos de anões. A da direita parece mais aberta, mas há sinais de fogo nas árvores, como se algo perigoso tivesse passado por ali.`);
    console.log("1 - Escolher o caminho da esquerda → página 7");
    console.log("2 - Escolher o caminho da direita → página 16");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina7();
    else this.pagina16();
  }

  pagina7() {
    console.clear();
    console.log(`## 7 - O encontro com os anões
 Seguindo pela trilha estreita, você encontra um grupo de anões reunidos em torno de uma fogueira. Suas barbas longas e machados reluzentes demonstram experiência em batalha.
 Um deles se aproxima e diz:
 — Estrangeiro, estamos em tempos sombrios. O mago Gandalf precisa de ajuda, mas não podemos ir até ele. Leve esta Pulseira da Morfação e entregue-a em suas mãos.
 Você aceita o artefato, sentindo seu peso mágico pulsar como um coração vivo.`);
    this.jogador.adicionarItem("Pulseira da Morfação");
    prompt("\nPressione ENTER para seguir até Gandalf...");
    this.pagina8();
  }

  pagina8() {
    console.clear();
    console.log(`## 8 - A batalha dos magos
 No alto de uma colina, você vê Gandalf enfrentando Saruman. O chão treme a cada feitiço lançado, e as árvores ao redor ardem em chamas azuis.
 Gandalf parece cansado, prestes a ser derrotado. Gandalf precisa de ajuda, você corre até ele e o que você faz?`);
    // Condição: se tem pulseira -> 9; else if tem anel -> 18; else -> 19
    if (this.jogador.possui("Pulseira da Morfação")) {
      console.log("Você tem a pulseira e pode entregá-la a Gandalf (→ página 9).");
      prompt("\nPressione ENTER para entregar a pulseira...");
      this.pagina9();
    } else if (this.jogador.possui("Anel do Poder")) {
      console.log("Você tenta usar o Anel para distrair Saruman (→ página 18).");
      prompt("\nPressione ENTER para tentar usar o Anel...");
      this.pagina18();
    } else {
      console.log("Você não tem itens para ajudar. Infelizmente Gandalf pode ser derrotado.");
      prompt("\nPressione ENTER para continuar...");
      this.pagina19();
    }
  }

  pagina9() {
    console.clear();
    console.log(`## 9 - A queda de Saruman
 Entregando a Pulseira da Morfação. Gandalf dá um grito poderoso, ele ergue o braço:
 — É HORA DE MORFAR!
 Em um clarão, Gandalf se transforma no Sidtopiazord, um mecha colossal envolto em magia. 
O Mecha Gandalf ergue seu cajado metálico e invoca sua habilidade mais devastadora: Sentinela Nuclear.
 Uma esfera de luz incandescente se forma e explode em um clarão que desintegra Saruman, reduzindo-o a cinzas no vento.
 O silêncio recai sobre a floresta. Você respira fundo, sabendo que testemunhou algo impossível de esquecer.`);
    prompt("\nPressione ENTER para seguir...");
    this.pagina10();
  }

  pagina10() {
    console.clear();
    console.log(`## 10 - A jornada a Mordor
 Gandalf abre a escotilha do mecha e sorri para você:
 — Suba, pequeno aventureiro. Juntos, ainda temos uma guerra a vencer.
 Com um salto, você entra na cabine do Sidtopiazord, sentindo o poder mágico percorrer suas veias.
 O caminho de Mordor se estende diante de vocês, e a sombra de Sauron cresce no horizonte.`);
    prompt("\nPressione ENTER para seguir...");
    this.pagina11();
  }

  pagina11() {
    console.clear();
    console.log(`## 11 - O confronto final em Mordor
 As terras de Mordor se abrem diante de seus olhos: um deserto de cinzas, rios de lava e o Olho Flamejante de Sauron brilhando no alto da torre de Barad-dûr.
 De repente, o chão treme. O próprio Sauron surge, colossal, envolto em chamas negras, empunhando uma espada do tamanho de uma montanha.
 A batalha final começou. O destino da Terra-Média está em suas mãos.`);
    prompt("\nPressione ENTER para seguir...");
    this.pagina12();
  }

  pagina12() {
    console.clear();
    console.log(`## 12 – Após a vitória esmagadora de Sidtopiazord
 A fumaça da batalha contra Sauron ainda cobre os céus, mas a sensação de triunfo é apenas momentânea. Gandalf, de dentro do mecha, vira-se para você com um olhar sério:
— A luta não acabou, jovem. Enquanto o Um Anel existir, o mal sempre encontrará um caminho para retornar.
Vocês seguem juntos rumo às Montanhas da Perdição, o único lugar capaz de destruir para sempre o artefato maligno. O ar fica cada vez mais quente, o solo rachado exala fogo, e rios de lava iluminam o horizonte em vermelho intenso.
O destino do mundo repousa agora em suas mãos.`);
    prompt("\nPressione ENTER para seguir...");
    this.pagina13();
  }

  pagina13() {
    console.clear();
    console.log(`## 13 – A escolha final
 Você se encontra diante da fornalha eterna, no coração das Montanhas da Perdição.
 O Anel do Poder brilha em sua mão, pulsando como se tivesse vida própria. Sussurros ecoam em sua mente, prometendo glória, domínio e imortalidade.
 Atrás de você, Gandalf observa em silêncio, confiante de que você fará o que é certo.`);
    console.log("1 - Destruir o Anel: Jogue-o nas chamas ardentes e liberte a Terra-Média de todo o mal. → página 14");
    console.log("2 - Reivindicar o poder para si: Traia Gandalf, tome o poder e torne-se a nova sombra que dominará o mundo. → página 15");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina14();
    else this.pagina15();
  }

  pagina14() {
    console.clear();
    console.log(`## 14 – O triunfo da luz
 Com um grito de coragem, você ergue o Anel e o lança nas chamas ardentes da Montanha da Perdição.
 O ouro maldito derrete, liberando uma energia escura que se dissipa em meio à lava. Um rugido de dor ecoa por toda a Terra-Média: Sauron é finalmente destruído.
Gandalf sorri, orgulhoso. Frodo e os povos livres celebram a vitória. A paz reina, e você será lembrado como o herói que derrotou a escuridão ao lado de Gandalf e de seu Sidtopiazord.
Fim do Caminho da Luz ✨`);
    prompt("\nPressione ENTER para voltar ao menu principal...");
    this.menuPrincipalLoop();
  }

  pagina15() {
    console.clear();
    console.log(`## 15 – O nascimento de um novo mal
 Os sussurros do Anel se tornam irresistíveis. Ao invés de lançá-lo às chamas, você se volta contra Gandalf.
 Com um golpe traiçoeiro, o lança no abismo de lava, ouvindo seu grito desaparecer em meio às labaredas.
O poder do Anel queima em sua mão, mas ao unir-se à força colossal do Sidtopiazord, você se transforma em algo nunca visto antes: um Senhor das Trevas Mecanizado, invencível.
Agora, a Terra-Média se curva diante de você. Elfos, anões, homens e hobbits tremem ao ouvir seu nome.
 Com o Anel do Poder e o mecha sob seu comando, nenhum exército poderá detê-lo.
Fim do Caminho das Sombras ☠️`);
    prompt("\nPressione ENTER para voltar ao menu principal...");
    this.menuPrincipalLoop();
  }

  pagina16() {
    console.clear();
    console.log(`## 16 – A floresta incendiada
 Seguindo pelo caminho da direita, o cheiro de fumaça invade suas narinas. As árvores ao redor estão queimadas, algumas ainda crepitam em brasas vivas. Você avança com cautela até encontrar uma nova bifurcação:
Um caminho à esquerda continua floresta adentro, levando a estrondos mágicos no horizonte. → página 8
Um caminho à direita retorna a um desfiladeiro de pedra que leva de volta a uma caverna desconhecida. → página 20`);
    console.log("1 - Seguir pela esquerda (→ página 8)");
    console.log("2 - Seguir pela direita (→ página 20)");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina8();
    else this.pagina20();
  }

  pagina17() {
    console.clear();
    console.log(`## 17 – Voltando para casa
 Exausto da escuridão e do perigo, você decide que aventuras não são para você. Ao sair da caverna, retorna pelos campos até sua casa aconchegante no Condado.
 Lá, aquece um chocolate quente, se enrola em um cobertor e adormece em paz, enquanto o destino da Terra-Média continua sem você.
 Afinal, o que um simples hobbit poderia fazer contra as forças do mal?
Fim do Caminho do Descanso🛏️`);
    prompt("\nPressione ENTER para voltar ao menu principal...");
    this.menuPrincipalLoop();
  }

  pagina18() {
    console.clear();
    console.log(`## 18 – A vitória do Mal
 Você tenta usar o Anel contra Saruman, mas sua força ainda é instável. As vozes dentro dele confundem sua mente, e sua magia falha no momento decisivo.
 Gandalf, já enfraquecido, não resiste aos feitiços do inimigo e cai mortalmente ferido.
 Saruman o captura, arranca o Anel de sua mão e, triunfante, corre para entregá-lo ao verdadeiro senhor das trevas.`);
    prompt("\nPressione ENTER para seguir...");
    this.pagina19();
  }

  pagina19() {
    console.clear();
    console.log(`## 19 – O domínio de Sauron
 Com o Anel recuperado, Sauron desperta em sua forma completa. Sua sombra cobre toda a Terra-Média, e exércitos de orcs, trolls e Nazgûl marcham sem oposição.
 As cidades caem, os povos livres são escravizados e a esperança desaparece.
 Nada pode conter o poder absoluto do Senhor do Escuro.
Fim do Caminho da Ruína ☠️`);
    prompt("\nPressione ENTER para voltar ao menu principal...");
    this.menuPrincipalLoop();
  }

  pagina20() {
    console.clear();
    console.log(`## 20 – A Caverna dos Trolls
O caminho pela direita leva você até uma gruta úmida e abafada, completamente diferente da primeira caverna onde acordou. O teto é baixo, o ar é pesado, e as paredes estão cobertas de símbolos rudes esculpidos na pedra.
Você avança cautelosamente até tropeçar em algo metálico entre pilhas de ossos espalhados pelo chão. Ao afastar os restos de cadáveres, encontra uma adaga élfica brilhante, ainda envolta por um leve fulgor azulado. O fio da lâmina parece novo, como se tivesse sido forjado ontem.
Você pode guardar a adaga élfica no inventário, que poderá ser usada em combates futuros.
Logo em seguida, um estrondo faz o chão tremer: três trolls imensos estão reunidos ao redor de uma fogueira, devorando ossos ainda cobertos de carne. Suas vozes ecoam como trovões, e o cheiro de sangue e fumaça toma conta do ambiente.
Eles ainda não notaram sua presença, mas o espaço é apertado demais para simplesmente fugir. Você precisará agir.`);
    console.log("1 - Enfrentar os trolls (se tiver Anel ou Adaga) → página 21");
    console.log("2 - Tentar enganar os trolls → página 22");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") {
      // Se jogador tem Anel ou Adaga, luta; senão, ainda segue a cena (manter história)
      if (this.jogador.possui("Anel do Poder") || this.jogador.possui("Adaga Élfica")) {
        this.pagina21();
      } else {
        // Permitir pegar adaga no chão antes da luta
        console.log("Você não tem itens; no chão há uma Adaga Élfica disponível.");
        console.log("Deseja pegar a Adaga antes de lutar?");
        console.log("1 - Sim (pegar Adaga e lutar)");
        console.log("2 - Não (tentar lutar sem ela)");
        const escolha2 = this.lerEscolha(["1", "2"]);
        if (escolha2 === "1") {
          this.jogador.adicionarItem("Adaga Élfica");
          this.pagina21();
        } else {
          this.pagina21(); // a narrativa continua (Aragorn pode salvar depois)
        }
      }
    } else {
      this.pagina22();
    }
  }

  pagina21() {
    console.clear();
    console.log(`## 21 – O Combate Contra os Trolls
Você avança empunhando sua arma. O brilho da adaga élfica corta a escuridão da caverna, e os trolls finalmente percebem sua presença. Rugindo como tempestades, eles se levantam, enormes e furiosos.
Você luta com tudo o que tem: esquivas rápidas, cortes certeiros e golpes desesperados. Ainda assim, o peso de cada martelada dos monstros faz o chão tremer, e parece que a derrota é inevitável.
Quando um dos trolls ergue sua clava para esmagá-lo, uma lâmina atravessa a criatura por trás.`);
    prompt("\nPressione ENTER para continuar...");
    this.pagina23();
  }

  pagina22() {
    console.clear();
    console.log(`## 22 – Enganando os Trolls
Você se esconde nas sombras e, aproveitando a escuridão, começa a atirar pedras para distrair os trolls. Eles se viram uns contra os outros, rosnando e discutindo, até que o maior deles ergue a clava para esmagar um companheiro.
Antes do golpe acontecer, uma lâmina brilhante corta o ar.`);
    prompt("\nPressione ENTER para continuar...");
    this.pagina23();
  }

  pagina23() {
    console.clear();
    console.log(`## 23 – A Aparição de Aragorn
Das trevas surge Aragorn, filho de Arathorn, espada em punho. Com golpes rápidos e precisos, ele derruba os três trolls sozinho, finalizando o último com uma estocada certeira no coração.
O silêncio retorna à caverna. Aragorn limpa a lâmina e olha diretamente para você.
— “Nenhum mal resistirá enquanto eu estiver por perto. Você teve coragem… mas também sorte em sobreviver.”
Ele se aproxima e continua:
— “Fui enviado por Gandalf para encontrar Frodo, o portador do Anel. Há muito tempo sigo o rastro das trevas, e sei que o caminho até a cidade dos elfos é nossa melhor chance de proteger a Terra-Média. Venha comigo — juntos seguiremos rumo aos aliados que nos ajudarão a enfrentar o que está por vir.”`);
    prompt("\nPressione ENTER para seguir com Aragorn...");
    this.pagina24();
  }

  pagina24() {
    console.clear();
    console.log(`## 24 – A Cidade dos Elfos
Guiado por Aragorn, você deixa para trás a caverna dos trolls. Após dias de caminhada pela floresta, o ar pesado de musgo e pedras começa a mudar. Uma brisa leve, perfumada por flores silvestres, enche seus pulmões.
De repente, diante de seus olhos, ergue-se a magnífica cidade élfica, oculta entre colinas e árvores gigantescas. Torres brancas se misturam à natureza como se fossem parte dela, e pontes de cristal atravessam rios brilhantes. O canto de vozes élficas ecoa, suave como um feitiço.
Na entrada, um grupo de guardiões o saúda, reconhecendo Aragorn com respeito. Um deles se aproxima e fala em língua comum:
— “Sejam bem-vindos. O Conselho Élfico já os aguarda.”
Você é levado até um salão iluminado por tochas mágicas e cristais suspensos no ar. No centro, um trono esculpido em madeira viva abriga Lord Elrond, que observa você com olhos antigos e sábios.
— “Estranho viajante… carrega em sua alma tanto a sombra quanto a esperança. Seu destino pode mudar o rumo da guerra.”`);
    console.log("1 - Aceitar a bênção dos elfos: receber a Malha de Mithril (→ página 25)");
    console.log("2 - Recusar e seguir adiante com Aragorn (→ página 26)");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina25();
    else this.pagina26();
  }

  pagina25() {
    console.clear();
    console.log(`## 25 – A Dádiva de Mithril
Você aceita a bênção dos elfos. Elrond ergue a mão, e dois elfos se aproximam trazendo uma pequena caixa prateada. Ao abri-la, você vê algo que reluz como se fosse tecido de estrelas: uma malha de Mithril.
— “Este presente não é comum, jovem aventureiro. O Mithril é mais leve que o linho e mais duro que o ferro mais resistente. Com ele, sua vida poderá ser poupada diante das maiores ameaças.”
Aragorn observa em silêncio, mas você percebe respeito em seu olhar. Receber uma dádiva dessas não é apenas um presente: é um voto de confiança dos elfos em seu destino.
Você veste a malha, sentindo sua leveza quase etérea. É como se estivesse protegido não apenas por metal, mas também pela própria esperança dos povos livres.
Galadriel sorri para você, transmitindo segurança e confiança:
 — “Com esta proteção, seus passos serão guiados e suas batalhas mais seguras. Mas lembre-se: coragem e sabedoria são tão importantes quanto a armadura que veste.”`);
    this.jogador.adicionarItem("Malha de Mithril");
    prompt("\nPressione ENTER para partir rumo ao próximo destino...");
    this.pagina27();
  }

  pagina26() {
    console.clear();
    console.log(`## 26 – Seguindo sem a Dádiva de Mithril
Você decide recusar a dádiva dos elfos, preferindo confiar em sua própria força e nos artefatos que já possui.
Aragorn assente, respeitando sua escolha:
 — “A coragem não vem apenas das armas ou da proteção. Que sua determinação seja sua armadura.”
Galadriel observa seu gesto com aprovação, compreendendo que você quer confiar na própria habilidade.
 — “Então seguiremos juntos, mas esteja atento a cada passo. A sombra de Sauron é traiçoeira e não espera por ninguém.”`);
    prompt("\nPressione ENTER para partir rumo ao próximo destino...");
    this.pagina27();
  }

  pagina27() {
    console.clear();
    console.log(`## 27 – Rumo ao Coração das Trevas
A floresta se abre e uma trilha de pedra se revela, levando vocês a uma planície árida. Montanhas negras se erguem ao longe, e a sombra de Mordor cobre o horizonte.
Aragorn vira-se para você e fala com seriedade:
 — “O caminho não será fácil. Precisamos atravessar territórios inimigos e chegar até o coração das trevas.”
Galadriel estende a mão, e uma luz suave envolve vocês, revelando pequenas passagens e atalhos seguros pela planície.
 — “Fiquem atentos. Cada passo que derem poderá ser decisivo. Use seus artefatos com sabedoria.”`);
    console.log("1 - Seguir pela trilha aberta (rápida, arriscada) → página 28");
    console.log("2 - Seguir pelo desfiladeiro estreito (perigoso, possivelmente seguro) → página 29");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina28();
    else this.pagina29();
  }

  pagina28() {
    console.clear();
    console.log(`## 28 – A Trilha Aberta
Vocês decidem seguir pela trilha aberta. O caminho é mais rápido, mas logo percebem sinais de alerta: rastros de Orcs espalhados pelo solo, árvores queimadas e corvos observando de cima.
Aragorn aponta discretamente:
 — “Estes sinais indicam emboscadas. Preparem-se.”
De repente, um grupo de Orcs surge das sombras, avançando com gritos agudos. Galadriel ergue as mãos, e uma barreira de luz dourada desacelera os inimigos, dando tempo para você reagir.`);
    console.log("1 - Atacar com a Adaga Élfica (→ página 30)");
    console.log("2 - Usar o Anel para criar distração ou atacar (→ página 31)");
    console.log("3 - Confiar na proteção da Malha de Mithril e lutar corpo a corpo (→ página 32)");
    const e = this.lerEscolha(["1", "2", "3"]);
    if (e === "1") this.pagina30();
    else if (e === "2") this.pagina31();
    else this.pagina32();
  }

  pagina29() {
    console.clear();
    console.log(`## 29 – O Desfiladeiro Estreito
Vocês escolhem o desfiladeiro estreito. O caminho é perigoso: pedras soltas e penhascos íngremes tornam cada passo arriscado. No entanto, a chance de emboscadas é menor, e vocês se movem com mais cuidado.
De repente, uma ponte de pedra parcialmente destruída bloqueia o caminho. Um rugido ecoa do desfiladeiro: trolls menores patrulham a área.
Galadriel levanta a mão, invocando uma luz que revela pontos seguros sobre a ponte e pedras firmes nas bordas do desfiladeiro.
 — “Sigam com cuidado. Um passo em falso pode custar a vida de vocês.”`);
    console.log("1 - Usar a Adaga Élfica para atacar os trolls à distância (→ página 33)");
    console.log("2 - Confiar na magia do Anel para confundir os trolls (→ página 34)");
    console.log("3 - Seguir cautelosamente usando a proteção da Malha de Mithril (→ página 35)");
    const e = this.lerEscolha(["1", "2", "3"]);
    if (e === "1") this.pagina33();
    else if (e === "2") this.pagina34();
    else this.pagina35();
  }

  pagina30() {
    console.clear();
    console.log(`## 30 – Combate na Trilha Aberta (Adaga Élfica)
Você empunha a adaga élfica, e seu brilho corta a escuridão. Cada golpe atinge Orcs com precisão, derrubando alguns antes que eles possam reagir.
Aragorn avança com sua espada, eliminando qualquer inimigo que se aproxime. Galadriel conjura rajadas de luz, desorientando os restantes.
Após uma batalha intensa, todos os Orcs caem, e a trilha aberta está segura. Vocês continuam avançando, sabendo que Mordor está cada vez mais próximo.`);
    prompt("\nPressione ENTER para seguir...");
    this.pagina36();
  }

  pagina31() {
    console.clear();
    console.log(`## 31 – Combate com Magia do Anel
Você ativa o Anel, criando ilusões e distrações que confundem os Orcs. Alguns se atacam entre si, outros fogem apavorados.
Aragorn aproveita a confusão para eliminar os inimigos restantes com golpes precisos, enquanto Galadriel envia ondas de luz que incapacitam os Orcs mais resistentes.
Após a batalha, a trilha está livre, e vocês prosseguem para Mordor.`);
    prompt("\nPressione ENTER para seguir...");
    this.pagina36();
  }

  pagina32() {
    console.clear();
    console.log(`## 32 – Combate Corpo a Corpo (Malha de Mithril)
Com a Malha de Mithril, você se lança contra os Orcs com confiança. A armadura protege você de golpes letais, e você consegue atingir vários inimigos.
Aragorn e Galadriel combatem lado a lado com você. A batalha é intensa, mas a proteção da malha e a coordenação com seus aliados garantem vitória.`);
    prompt("\nPressione ENTER para seguir...");
    this.pagina36();
  }

  pagina33() {
    console.clear();
    console.log(`## 33 – Desfiladeiro – Ataque com Adaga Élfica
Você ataca os Orcs sombrios de Sauron à distância, atingindo pontos vitais. Dois Orcs sombrios de Sauron caem antes mesmo de perceberem sua presença.
Aragorn corta o terceiro com um golpe certeiro, enquanto Galadriel lança luz sobre a ponte, garantindo que vocês atravessem sem cair.`);
    prompt("\nPressione ENTER para seguir...");
    this.pagina36();
  }

  pagina34() {
    console.clear();
    console.log(`## 34 – Desfiladeiro – Magia do Anel
Você usa a magia do Anel para criar ilusões, confundindo os Orcs sombrios de Sauron. Eles começam a atacar uns aos outros, e a passagem se abre.
Com Aragorn e Galadriel ao lado, vocês derrotam os Orcs sombrios de Sauron e avançam com segurança.`);
    prompt("\nPressione ENTER para seguir...");
    this.pagina36();
  }

  pagina35() {
    console.clear();
    console.log(`## 35 – Desfiladeiro – Corpo a Corpo com Malha de Mithril
Você se lança contra os Orcs sombrios de Sauron, protegido pela Malha de Mithril. Cada ataque é absorvido pela armadura, e você consegue derrubar os inimigos um a um.
Galadriel conjura luz para manter o equilíbrio na ponte, enquanto Aragorn finaliza o último Orcs sombrios de Sauron.`);
    prompt("\nPressione ENTER para seguir...");
    this.pagina36();
  }

  pagina36() {
    console.clear();
    console.log(`## 36 – A Chegada a Mordor
Vocês finalmente alcançam a entrada de Mordor. O céu está vermelho com nuvens de cinza e fogo. A torre de Barad-dûr ergue-se ameaçadora, e o Olho de Sauron brilha, percebendo sua chegada.
Aragorn vira-se para você:
 — “Tudo depende de nós agora. Este é o momento decisivo.”
 Galadriel acrescenta:
 — “Se estivermos unidos e usarmos todos os artefatos com sabedoria, há esperança.”`);
    console.log("1 - Usar todos os artefatos e a ajuda de Aragorn e Galadriel para enfrentar Sauron diretamente → página 37");
    console.log("2 - Subestimar a batalha ou ser traído pelo Anel → página 38");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina37();
    else this.pagina38();
  }

  pagina37() {
    console.clear();
    console.log(`## 37 – Vitória Contra Sauron
Com coordenação perfeita: você usa a Adaga Élfica e o Anel estrategicamente, Aragorn corta o caminho de Sauron, e Galadriel envia rajadas de luz poderosa.
No momento decisivo, você consegue atingir o ponto fraco de Sauron. Ele é destruído, sua espada despedaçada e a torre de Barad-dûr treme e colapsa.
O mundo da Terra-Média é libertado da sombra. Frodo celebra a vitória, Gandalf sorri do alto da torre de Barad-dûr, e a paz é restaurada.
Fim do Caminho da Luz ✨`);
    prompt("\nPressione ENTER para voltar ao menu principal...");
    this.menuPrincipalLoop();
  }

  pagina38() {
    console.clear();
    console.log(`## 38 – Derrota Catastrófica
O poder do Anel ou a sobrecarga de magia é demais para controlar. Sauron domina a batalha, e seus ataques devastadores não deixam espaço para defesa.
Um Tengai Shinsei lançado do Olho de Sauron atinge o solo, destruindo toda a planície, queimando exércitos e aliados. Aragorn, Galadriel e você são atingidos, e a Terra-Média cai sob uma sombra eterna.
O mundo está perdido. O poder de Sauron é absoluto.
Fim do Caminho das Sombras ☠️`);
    prompt("\nPressione ENTER para voltar ao menu principal...");
    this.menuPrincipalLoop();
  }

  // ---------------------- Menu principal (loop) ----------------------
  menuPrincipalLoop() {
    let sair = false;
    while (!sair) {
      console.clear();
      console.log("=== MENU PRINCIPAL ===");
      console.log("1 - Jogar História (começar / recomeçar)");
      console.log("2 - Ver Inventário");
      console.log("3 - Sair");
      const escolha = this.lerEscolha(["1", "2", "3"]);
      if (escolha === "1") {
        this.jogador.resetInventario();
        this.pagina1();
      } else if (escolha === "2") {
        this.jogador.listarInventario();
        prompt("\nPressione ENTER para voltar...");
      } else {
        console.log("\nAté a próxima, aventureiro!");
        sair = true;
      }
    }
  }
}

// ---------------------- Execução ----------------------
const nome = prompt("Qual é o seu nome, aventureiro? ") || "Aventureiro";
const jogador = new Jogador(nome);
const jogo = new Jogo(jogador);
jogo.iniciar();
