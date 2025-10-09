import promptSync = require("prompt-sync");
const prompt = promptSync();

class Jogador {
  nome: string;
  inventario: string[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

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
      console.log("\n🎒 Inventário vazio.");
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
    console.log("🧙‍♂️ Bem-vindo à Aventura: Senhor dos Anéis (POO)");
    prompt("\nPressione ENTER para começar...");
    this.pagina1();
  }

  lerEscolha(validas: string[]) {
    let e = "";
    do {
      e = (prompt("> ") || "").trim();
      if (!validas.includes(e)) console.log("Opção inválida, tente novamente.");
    } while (!validas.includes(e));
    return e;
  }

  // ======= PÁGINAS =======

  pagina1() {
    console.clear();
    console.log(`
## 1 - Você acorda em uma caverna escura…
À esquerda: um lago cristalino (algo brilha).
À frente: saída iluminada.
À direita: túnel sombrio com ecos.
`);
    console.log("1 - Olhar o lago (página 2)");
    console.log("2 - Sair pela luz (página 5)");
    console.log("3 - Sair direto pra casa (página 17)");
    console.log("4 - Entrar no túnel sombrio (página 4)");
    const e = this.lerEscolha(["1", "2", "3", "4"]);
    if (e === "1") this.pagina2();
    else if (e === "2") this.pagina5();
    else if (e === "3") this.pagina17();
    else this.pagina4();
  }

  pagina2() {
    console.clear();
    console.log(`
## 2 - O lago misterioso
Algo dourado brilha no fundo...
`);
    console.log("1 - Mergulhar (página 3)");
    console.log("2 - Voltar (página 1)");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina3();
    else this.pagina1();
  }

  pagina3() {
    console.clear();
    console.log(`
## 3 - O anel dourado
Você encontra um anel brilhante e sente poder fluir.
`);
    this.jogador.adicionarItem("Anel do Poder");
    prompt("ENTER para voltar...");
    this.pagina1();
  }

  pagina4() {
    console.clear();
    console.log(`
## 4 - Beco sem saída
O túnel termina em fungos e pedras.
`);
    prompt("ENTER para voltar...");
    this.pagina1();
  }

  pagina5() {
    console.clear();
    console.log(`
## 5 - A floresta antiga
Você encontra uma floresta densa e viva.
`);
    console.log("1 - Seguir pela floresta (página 6)");
    console.log("2 - Voltar à caverna (página 1)");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina6();
    else this.pagina1();
  }

  pagina6() {
    console.clear();
    console.log(`
## 6 - A bifurcação
Esquerda: pegadas de anões.
Direita: rastros de fogo.
`);
    console.log("1 - Esquerda (página 7)");
    console.log("2 - Direita (página 16)");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina7();
    else this.pagina16();
  }

  pagina7() {
    console.clear();
    console.log(`
## 7 - Os anões
Você conhece anões que lhe confiam a Pulseira da Morfação para Gandalf.
`);
    this.jogador.adicionarItem("Pulseira da Morfação");
    prompt("ENTER para seguir...");
    this.pagina8();
  }

  pagina8() {
    console.clear();
    console.log(`
## 8 - Gandalf vs Saruman
Você vê Gandalf enfrentando Saruman.
`);
    if (this.jogador.possui("Pulseira da Morfação")) {
      console.log("Você entrega a pulseira a Gandalf.");
      prompt("ENTER...");
      this.pagina9();
    } else if (this.jogador.possui("Anel do Poder")) {
      console.log("Você tenta usar o anel para ajudar...");
      prompt("ENTER...");
      this.pagina18();
    } else {
      console.log("Sem ajuda, Gandalf é derrotado.");
      prompt("ENTER...");
      this.pagina19();
    }
  }

  pagina9() {
    console.clear();
    console.log(`
## 9 - Vitória sobre Saruman
Gandalf usa a Pulseira e derrota Saruman.
`);
    prompt("ENTER...");
    this.pagina10();
  }

  pagina10() {
    console.clear();
    console.log(`
## 10 - Rumo a Mordor
Gandalf convida você a segui-lo em direção a Mordor.
`);
    prompt("ENTER...");
    this.pagina11();
  }

  pagina11() {
    console.clear();
    console.log(`
## 11 - Chegada a Mordor
As sombras de Sauron dominam o horizonte.
`);
    prompt("ENTER...");
    this.pagina12();
  }

  pagina12() {
    console.clear();
    console.log(`
## 12 - A Fornalha da Perdição
Vocês se aproximam do Monte da Perdição.
`);
    prompt("ENTER...");
    this.pagina13();
  }

  pagina13() {
    console.clear();
    console.log(`
## 13 - A escolha final
Você segura o Anel sobre as chamas.
`);
    console.log("1 - Destruir o anel (página 14)");
    console.log("2 - Ficar com o poder (página 15)");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina14();
    else this.pagina15();
  }

  pagina14() {
    console.clear();
    console.log(`
## 14 - Vitória da Luz ✨
Você destrói o anel. Sauron é derrotado.
`);
    prompt("ENTER...");
    this.menuPrincipal();
  }

  pagina15() {
    console.clear();
    console.log(`
## 15 - O Novo Senhor das Trevas ☠️
Você mantém o anel e domina tudo.
`);
    prompt("ENTER...");
    this.menuPrincipal();
  }

  pagina16() {
    console.clear();
    console.log(`
## 16 - A floresta queimada
Você encontra rastros de guerra e fogo.
`);
    console.log("1 - Voltar e ajudar Gandalf (página 8)");
    console.log("2 - Entrar em uma caverna (página 20)");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina8();
    else this.pagina20();
  }

  pagina17() {
    console.clear();
    console.log(`
## 17 - Retorno ao Condado
Você abandona a aventura e volta pra casa.
`);
    prompt("ENTER...");
    this.menuPrincipal();
  }

  pagina18() {
    console.clear();
    console.log(`
## 18 - Derrota parcial
Saruman foge com o anel. Gandalf é capturado.
`);
    prompt("ENTER...");
    this.pagina19();
  }

  pagina19() {
    console.clear();
    console.log(`
## 19 - O domínio de Sauron ☠️
Sauron vence e a Terra-Média cai.
`);
    prompt("ENTER...");
    this.menuPrincipal();
  }

  pagina20() {
    console.clear();
    console.log(`
## 20 - Caverna dos Trolls
Há uma adaga élfica no chão.
`);
    console.log("1 - Pegar a adaga (página 21)");
    console.log("2 - Tentar enganar os trolls (página 22)");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") {
      this.jogador.adicionarItem("Adaga Élfica");
      this.pagina21();
    } else this.pagina22();
  }

  pagina21() {
    console.clear();
    console.log(`
## 21 - Combate feroz
Você luta bravamente e quase cai.
`);
    prompt("ENTER...");
    this.pagina23();
  }

  pagina22() {
    console.clear();
    console.log(`
## 22 - Engano bem-sucedido
Você engana os trolls e sobrevive.
`);
    prompt("ENTER...");
    this.pagina23();
  }

  pagina23() {
    console.clear();
    console.log(`
## 23 - Aragorn aparece
Ele o convida a seguir com ele.
`);
    this.lerEscolha(["1"]);
    this.pagina24();
  }

  pagina24() {
    console.clear();
    console.log(`
## 24 - Cidade dos Elfos
Elrond oferece uma Malha de Mithril.
`);
    console.log("1 - Aceitar (página 25)");
    console.log("2 - Recusar (página 26)");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina25();
    else this.pagina26();
  }

  pagina25() {
    console.clear();
    console.log(`
## 25 - Dádiva de Mithril
Você recebe a armadura élfica.
`);
    this.jogador.adicionarItem("Malha de Mithril");
    prompt("ENTER...");
    this.pagina27();
  }

  pagina26() {
    console.clear();
    console.log(`
## 26 - Seguindo por conta própria
Você rejeita o presente e segue com coragem.
`);
    prompt("ENTER...");
    this.pagina27();
  }

  pagina27() {
    console.clear();
    console.log(`
## 27 - Rumo à batalha final
Vocês se aproximam de Mordor.
`);
    console.log("1 - Trilha aberta (página 28)");
    console.log("2 - Desfiladeiro estreito (página 29)");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina28();
    else this.pagina29();
  }

  pagina28() {
    console.clear();
    console.log(`
## 28 - A trilha aberta
Orcs atacam de surpresa!
`);
    console.log("1 - Usar Adaga (página 30)");
    console.log("2 - Usar Anel (página 31)");
    console.log("3 - Lutar com Mithril (página 32)");
    const e = this.lerEscolha(["1", "2", "3"]);
    if (e === "1") this.pagina30();
    else if (e === "2") this.pagina31();
    else this.pagina32();
  }

  pagina29() {
    console.clear();
    console.log(`
## 29 - Desfiladeiro
Trolls bloqueiam a passagem.
`);
    console.log("1 - Adaga (página 33)");
    console.log("2 - Anel (página 34)");
    console.log("3 - Mithril (página 35)");
    const e = this.lerEscolha(["1", "2", "3"]);
    if (e === "1") this.pagina33();
    else if (e === "2") this.pagina34();
    else this.pagina35();
  }

  pagina30() {
    console.clear();
    console.log(`
## 30 - Vitória com Adaga
Você derrota os orcs com precisão élfica.
`);
    prompt("ENTER...");
    this.pagina36();
  }

  pagina31() {
    console.clear();
    console.log(`
## 31 - Vitória com Anel
Você usa o anel para confundir os orcs.
`);
    prompt("ENTER...");
    this.pagina36();
  }

  pagina32() {
    console.clear();
    console.log(`
## 32 - Vitória com Mithril
A armadura o protege e você vence.
`);
    prompt("ENTER...");
    this.pagina36();
  }

  pagina33() {
    console.clear();
    console.log(`
## 33 - Trolls abatidos à distância
Sua adaga corta o ar e salva o grupo.
`);
    prompt("ENTER...");
    this.pagina36();
  }

  pagina34() {
    console.clear();
    console.log(`
## 34 - Ilusões do Anel
Os trolls fogem das visões e vocês passam.
`);
    prompt("ENTER...");
    this.pagina36();
  }

  pagina35() {
    console.clear();
    console.log(`
## 35 - Luta corpo a corpo
Com a malha, você resiste e vence.
`);
    prompt("ENTER...");
    this.pagina36();
  }

  pagina36() {
    console.clear();
    console.log(`
## 36 - A batalha final
Sauron aguarda em Mordor.
`);
    console.log("1 - Enfrentá-lo (página 37)");
    console.log("2 - Ser corrompido (página 38)");
    const e = this.lerEscolha(["1", "2"]);
    if (e === "1") this.pagina37();
    else this.pagina38();
  }

  pagina37() {
    console.clear();
    console.log(`
## 37 - Vitória final ✨
Você derrota Sauron e a paz retorna.
`);
    prompt("ENTER...");
    this.menuPrincipal();
  }

  pagina38() {
    console.clear();
    console.log(`
## 38 - O fim sombrio ☠️
Você sucumbe ao poder do Anel.
`);
    prompt("ENTER...");
    this.menuPrincipal();
  }

  // ========== MENU ==========
  menuPrincipal() {
    console.clear();
    console.log("=== MENU PRINCIPAL ===");
    console.log("1 - Jogar novamente");
    console.log("2 - Ver inventário");
    console.log("3 - Sair");
    const e = this.lerEscolha(["1", "2", "3"]);
    if (e === "1") {
      this.jogador.inventario = [];
      this.pagina1();
    } else if (e === "2") {
      this.jogador.listarInventario();
      prompt("ENTER...");
      this.menuPrincipal();
    } else {
      console.log("Até a próxima, aventureiro!");
      process.exit(0);
    }
  }
}

// ===== EXECUÇÃO =====
const nome = prompt("Qual é o seu nome, aventureiro? ") || "Sem Nome";
const jogador = new Jogador(nome);
const jogo = new Jogo(jogador);
jogo.iniciar();
