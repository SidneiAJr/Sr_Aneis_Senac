// menu.ts
// Jogo de texto (POO) - "Senhor dos Anéis" (história fornecida por Jian & Arthur)
// Requer: npm install prompt-sync
import promptSync from "prompt-sync";
const prompt = promptSync();

// ====================== Classes ======================
class Jogador {
  inventario: string[] = [];

  adicionarItem(item: string) {
    if (!this.inventario.includes(item)) {
      this.inventario.push(item);
      console.log(`\n✅ Você obteve: ${item}`);
    } else {
      console.log(`\nℹ️ Você já possui: ${item}`);
    }
  }

  possui(item: string) {
    return this.inventario.includes(item);
  }

  listarInventario() {
    if (this.inventario.length === 0) {
      console.log("\n🎒 Inventário: (vazio)");
    } else {
      console.log("\n🎒 Inventário:");
      this.inventario.forEach((i, idx) => console.log(` ${idx + 1}. ${i}`));
    }
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
    this.pagina1();
  }

  lerEscolha(validas: string[]) {
    let escolha: string;
    do {
      escolha = prompt("> ").trim();
      if (!validas.includes(escolha)) {
        console.log("Opção inválida. Tente novamente.");
      }
    } while (!validas.includes(escolha));
    return escolha;
  }

  // ================= PÁGINAS (1 a 38) =================

  pagina1() {
    console.clear();
    console.log(`
## 1 - Você acorda em uma caverna escura…
O ar é úmido e pesado. Aos poucos, seus olhos se acostumam.
À esquerda: um lago cristalino (algo brilha).
À frente: saída estreita com luz.
À direita: túnel estreito, musgo e ecos.
`);
    console.log("1 - Olhar o lago (→ página 2)");
    console.log("2 - Sair pela saída iluminada (→ página 5)");
    console.log("3 - Sair imediatamente para casa (sem olhar o lago) (→ página 17)");
    console.log("4 - Entrar no túnel sombrio (→ página 4)");
    const escolha = this.lerEscolha(["1", "2", "3", "4"]);
    switch (escolha) {
      case "1": return this.pagina2();
      case "2": return this.pagina5();
      case "3": return this.pagina17();
      case "4": return this.pagina4();
    }
  }

  pagina2() {
    console.clear();
    console.log(`
## 2 - O laguinho misterioso
A água é límpida. Algo dourado brilha no fundo. Um vento frio sopra.
`);
    console.log("1 - Mergulhar para pegar o item (→ página 3)");
    console.log("2 - Voltar para o centro da caverna (→ página 1)");
    const escolha = this.lerEscolha(["1", "2"]);
    if (escolha === "1") return this.pagina3();
    return this.pagina1();
  }

  pagina3() {
    console.clear();
    console.log(`
## 3 - O anel dourado
Você mergulha e pega um anel dourado, brilhante e misterioso.
Ao segurá-lo, sente uma energia percorrer seu corpo.
`);
    this.jogador.adicionarItem("Anel do Poder");
    prompt("\nPressione ENTER para voltar ao centro da caverna...");
    return this.pagina1();
  }

  pagina4() {
    console.clear();
    console.log(`
## 4 - O beco sem saída
O túnel termina em um paredão coberto de fungos. Não há saída.
`);
    prompt("\nPressione ENTER para voltar ao centro da caverna...");
    return this.pagina1();
  }

  pagina5() {
    console.clear();
    console.log(`
## 5 - A floresta misteriosa
Você sai da caverna e encontra uma vasta floresta antiga.
`);
    console.log("1 - Seguir pela floresta (→ página 6)");
    console.log("2 - Voltar para a caverna (→ página 1)");
    const escolha = this.lerEscolha(["1", "2"]);
    if (escolha === "1") return this.pagina6();
    return this.pagina1();
  }

  pagina6() {
    console.clear();
    console.log(`
## 6 - A bifurcação na floresta
O caminho se divide:
- Esquerda: trilha estreita com pegadas de anões.
- Direita: trilha aberta com sinais de fogo.
`);
    console.log("1 - Escolher o caminho da esquerda (→ página 7)");
    console.log("2 - Escolher o caminho da direita (→ página 16)");
    const escolha = this.lerEscolha(["1", "2"]);
    if (escolha === "1") return this.pagina7();
    return this.pagina16();
  }

  pagina7() {
    console.clear();
    console.log(`
## 7 - O encontro com os anões
Você encontra anões reunidos. Um deles pede que leve uma Pulseira da Morfação para Gandalf.
`);
    this.jogador.adicionarItem("Pulseira da Morfação");
    prompt("\nPressione ENTER para seguir até Gandalf...");
    return this.pagina8();
  }

  pagina8() {
    console.clear();
    console.log(`
## 8 - A batalha dos magos
No alto de uma colina, Gandalf enfrenta Saruman. Ele precisa de ajuda.
`);
    // Condições conforme história:
    if (this.jogador.possui("Pulseira da Morfação")) {
      console.log("Você tem a Pulseira da Morfação — é possível entregá-la a Gandalf (→ página 9).");
      prompt("\nPressione ENTER para entregar a pulseira e ajudar Gandalf...");
      return this.pagina9();
    } else if (this.jogador.possui("Anel do Poder")) {
      console.log("Você tenta usar o Anel para distrair Saruman (→ página 18).");
      prompt("\nPressione ENTER para tentar usar o Anel...");
      return this.pagina18();
    } else {
      console.log("Sem itens para ajudar, Gandalf é derrotado.");
      prompt("\nPressione ENTER para continuar...");
      return this.pagina19();
    }
  }

  pagina9() {
    console.clear();
    console.log(`
## 9 - A queda de Saruman
Você entrega a Pulseira da Morfação. Gandalf morfa no SIDTOPIAZORD e destrói Saruman com Sentinela Nuclear.
`);
    prompt("\nPressione ENTER para seguir a jornada...");
    return this.pagina10();
  }

  pagina10() {
    console.clear();
    console.log(`
## 10 - A jornada a Mordor
Gandalf convida você a subir no mecha. Juntos, seguem rumo a Mordor.
`);
    prompt("\nPressione ENTER para seguir a Mordor...");
    return this.pagina11();
  }

  pagina11() {
    console.clear();
    console.log(`
## 11 - O confronto final em Mordor
Vocês chegam às terras de Mordor; Sauron se mostra colossal.
`);
    prompt("\nPressione ENTER para continuar...");
    return this.pagina12();
  }

  pagina12() {
    console.clear();
    console.log(`
## 12 - Após a vitória esmagadora de Sidtopiazord
Gandalf diz que enquanto o Um Anel existir, o mal persistirá. Vocês seguem para as Montanhas da Perdição.
`);
    prompt("\nPressione ENTER para seguir...");
    return this.pagina13();
  }

  pagina13() {
    console.clear();
    console.log(`
## 13 - A escolha final
Você está diante da fornalha eterna. O Anel pulsa em sua mão.
`);
    console.log("1 - Destruir o Anel (→ página 14)");
    console.log("2 - Reivindicar o poder (→ página 15)");
    const escolha = this.lerEscolha(["1", "2"]);
    if (escolha === "1") return this.pagina14();
    return this.pagina15();
  }

  pagina14() {
    console.clear();
    console.log(`
## 14 - O triunfo da luz
Você lança o Anel nas chamas. Sauron é destruído. A paz retorna.
Fim do Caminho da Luz ✨
`);
    prompt("\nPressione ENTER para voltar ao menu principal...");
    return this.menuPrincipal();
  }

  pagina15() {
    console.clear();
    console.log(`
## 15 - O nascimento de um novo mal
Você trai Gandalf, torna-se Senhor das Trevas Mecanizado. O mundo sucumbe.
Fim do Caminho das Sombras ☠️
`);
    prompt("\nPressione ENTER para voltar ao menu principal...");
    return this.menuPrincipal();
  }

  pagina16() {
    console.clear();
    console.log(`
## 16 - A floresta incendiada
Você segue pela trilha direita; encontra árvores queimadas e uma nova bifurcação.
`);
    console.log("1 - Seguir pela esquerda (leva à página 8)");
    console.log("2 - Seguir pela direita (leva a uma caverna desconhecida → página 20)");
    const escolha = this.lerEscolha(["1", "2"]);
    if (escolha === "1") return this.pagina8();
    return this.pagina20();
  }

  pagina17() {
    console.clear();
    console.log(`
## 17 - Voltando para casa
Exausto, você decide voltar para casa no Condado. Fim do Caminho do Descanso 🛏️
`);
    prompt("\nPressione ENTER para voltar ao menu principal...");
    return this.menuPrincipal();
  }

  pagina18() {
    console.clear();
    console.log(`
## 18 - A vitória do Mal (uso do Anel contra Saruman)
Você tenta usar o Anel contra Saruman, mas o poder falha parcialmente. Gandalf é capturado; Saruman foge com o Anel.
`);
    prompt("\nPressione ENTER para continuar...");
    return this.pagina19();
  }

  pagina19() {
    console.clear();
    console.log(`
## 19 - O domínio de Sauron
Com o Anel em mãos dos inimigos, Sauron domina a Terra-Média. Fim do Caminho da Ruína ☠️
`);
    prompt("\nPressione ENTER para voltar ao menu principal...");
    return this.menuPrincipal();
  }

  pagina20() {
    console.clear();
    console.log(`
## 20 - A Caverna dos Trolls
Você encontra uma gruta úmida com três trolls devorando ossos.
No chão, uma adaga élfica brilha entre os restos.
`);
    console.log("1 - Guardar a Adaga Élfica no inventário e enfrentar os trolls (→ página 21)");
    console.log("2 - Tentar enganar os trolls (→ página 22)");
    const escolha = this.lerEscolha(["1", "2"]);
    if (escolha === "1") {
      this.jogador.adicionarItem("Adaga Élfica");
      return this.pagina21();
    }
    return this.pagina22();
  }

  pagina21() {
    console.clear();
    console.log(`
## 21 - O Combate Contra os Trolls
Você luta bravamente. Quando tudo parece perdido, uma lâmina atravessa um dos trolls.
`);
    prompt("\nPressione ENTER para continuar...");
    return this.pagina23();
  }

  pagina22() {
    console.clear();
    console.log(`
## 22 - Enganando os Trolls
Você distrai os trolls com pedras; uma lâmina aparece e ajuda a derrotá-los.
`);
    prompt("\nPressione ENTER para continuar...");
    return this.pagina23();
  }

  pagina23() {
    console.clear();
    console.log(`
## 23 - A Aparição de Aragorn
Aragorn surge e derrota os trolls. Ele oferece que você o acompanhe.
`);
    console.log("1 - Aceitar seguir com Aragorn (→ página 24)");
    const escolha = this.lerEscolha(["1"]);
    return this.pagina24();
  }

  pagina24() {
    console.clear();
    console.log(`
## 24 - A Cidade dos Elfos
Guiado por Aragorn, você chega à cidade élfica. Elrond oferece uma malha de Mithril.
`);
    console.log("1 - Aceitar a Dádiva de Mithril (→ página 25)");
    console.log("2 - Recusar e seguir com Aragorn (→ página 26)");
    const escolha = this.lerEscolha(["1", "2"]);
    if (escolha === "1") return this.pagina25();
    return this.pagina26();
  }

  pagina25() {
    console.clear();
    console.log(`
## 25 - A Dádiva de Mithril
Você recebe a malha de Mithril — leve e extremamente resistente.
`);
    this.jogador.adicionarItem("Malha de Mithril");
    prompt("\nPressione ENTER para partir rumo ao coração das trevas...");
    return this.pagina27();
  }

  pagina26() {
    console.clear();
    console.log(`
## 26 - Seguindo sem a Dádiva de Mithril
Você prefere confiar em sua própria força. Aragorn respeita sua escolha.
`);
    prompt("\nPressione ENTER para partir rumo ao coração das trevas...");
    return this.pagina27();
  }

  pagina27() {
    console.clear();
    console.log(`
## 27 - Rumo ao Coração das Trevas
Vocês se aproximam de Mordor. Dois caminhos aparecem:
`);
    console.log("1 - Trilha aberta (rápida, arriscada) (→ página 28)");
    console.log("2 - Desfiladeiro estreito (perigoso, possivelmente seguro) (→ página 29)");
    const escolha = this.lerEscolha(["1", "2"]);
    if (escolha === "1") return this.pagina28();
    return this.pagina29();
  }

  pagina28() {
    console.clear();
    console.log(`
## 28 - A Trilha Aberta
Orcs atacam! Você tem opções de combate:
`);
    console.log("1 - Atacar com a Adaga Élfica (→ página 30)");
    console.log("2 - Usar o Anel para distração/magia (→ página 31)");
    console.log("3 - Confiar na Malha de Mithril e lutar corpo a corpo (→ página 32)");
    const entrada = this.lerEscolha(["1", "2", "3"]);
    if (entrada === "1") return this.pagina30();
    if (entrada === "2") return this.pagina31();
    return this.pagina32();
  }

  pagina29() {
    console.clear();
    console.log(`
## 29 - O Desfiladeiro Estreito
A ponte está danificada; trolls patrulham a área.
`);
    console.log("1 - Usar a Adaga Élfica à distância (→ página 33)");
    console.log("2 - Confiar no Anel para confundir (→ página 34)");
    console.log("3 - Seguir cautelosamente com a Malha de Mithril (→ página 35)");
    const escolha = this.lerEscolha(["1", "2", "3"]);
    if (escolha === "1") return this.pagina33();
    if (escolha === "2") return this.pagina34();
    return this.pagina35();
  }

  pagina30() {
    console.clear();
    console.log(`
## 30 - Combate na Trilha Aberta (Adaga Élfica)
Você e seus aliados derrotam os Orcs. A trilha está segura.
`);
    prompt("\nPressione ENTER para seguir...");
    return this.pagina36();
  }

  pagina31() {
    console.clear();
    console.log(`
## 31 - Combate com Magia do Anel
Você usa o Anel para confundir os Orcs. A batalha termina com vitória.
`);
    prompt("\nPressione ENTER para seguir...");
    return this.pagina36();
  }

  pagina32() {
    console.clear();
    console.log(`
## 32 - Combate Corpo a Corpo (Malha de Mithril)
Com a Malha de Mithril, você resiste a golpes e vence a batalha.
`);
    prompt("\nPressione ENTER para seguir...");
    return this.pagina36();
  }

  pagina33() {
    console.clear();
    console.log(`
## 33 - Desfiladeiro – Ataque com Adaga Élfica
Você ataca de longe e ajuda a abrir passagem. Vocês atravessam.
`);
    prompt("\nPressione ENTER para seguir...");
    return this.pagina36();
  }

  pagina34() {
    console.clear();
    console.log(`
## 34 - Desfiladeiro – Magia do Anel
Você usa o Anel para criar ilusões; os trolls se confundem. Vocês vencem.
`);
    prompt("\nPressione ENTER para seguir...");
    return this.pagina36();
  }

  pagina35() {
    console.clear();
    console.log(`
## 35 – Desfiladeiro – Corpo a Corpo com Malha de Mithril
Você luta corpo a corpo com proteção do Mithril e vence.
`);
    prompt("\nPressione ENTER para seguir...");
    return this.pagina36();
  }

  pagina36() {
    console.clear();
    console.log(`
## 36 - A Chegada a Mordor
Vocês alcançam a entrada de Mordor. Sauron se prepara para o ataque final.
`);
    console.log("1 - Usar todos os artefatos e aliados para enfrentar Sauron (→ página 37)");
    console.log("2 - Subestimar/ser traído pelo Anel (→ página 38)");
    const escolha = this.lerEscolha(["1", "2"]);
    if (escolha === "1") return this.pagina37();
    return this.pagina38();
  }

  pagina37() {
    console.clear();
    console.log(`
## 37 - Vitória Contra Sauron
Com coordenação perfeita, você e seus aliados derrotam Sauron. A Terra-Média é libertada.
Fim do Caminho da Luz ✨
`);
    prompt("\nPressione ENTER para voltar ao menu principal...");
    return this.menuPrincipal();
  }

  pagina38() {
    console.clear();
    console.log(`
## 38 - Derrota Catastrófica
O poder do Anel é demais; Sauron domina e tudo se perde.
Fim do Caminho das Sombras ☠️
`);
    prompt("\nPressione ENTER para voltar ao menu principal...");
    return this.menuPrincipal();
  }

  // ================= Menu principal do jogo =================
  menuPrincipal() {
    console.clear();
    console.log("=== MENU PRINCIPAL ===");
    console.log("1 - Jogar História (começar / recomeçar)");
    console.log("2 - Ver Inventário");
    console.log("3 - Sair");
    const escolha = this.lerEscolha(["1", "2", "3"]);
    if (escolha === "1") {
      // reset do inventário para nova jogada
      this.jogador.inventario = [];
      return this.pagina1();
    } else if (escolha === "2") {
      this.jogador.listarInventario();
      prompt("\nPressione ENTER para voltar ao menu...");
      return this.menuPrincipal();
    } else {
      console.log("\nAté a próxima, aventureiro!");
      process.exit(0);
    }
  }
}

// ================= Execução =================
const nome = prompt("Qual é o seu nome, aventureiro? ");
const jogador = new Jogador();
if (nome && nome.trim().length > 0) {
  jogador.adicionarItem(`Nome: ${nome.trim()}`); // opcional: salvar nome no inventário como registro simples
}
const jogo = new Jogo(jogador);
jogo.iniciar();
