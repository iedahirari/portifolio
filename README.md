# Portfólio · Ieda Oliveira

**Análise de Dados & BI** · estudante de Matemática (IFSP) e Ciência da Computação, em transição de carreira.

| | Português | English |
| --- | --- | --- |
| 🌐 Portfólio | [iedahirari.github.io/portifolio](https://iedahirari.github.io/portifolio/) | [/en](https://iedahirari.github.io/portifolio/en/) |
| 📄 Currículo (página) | [curriculo.html](https://iedahirari.github.io/portifolio/curriculo.html) | [resume.html](https://iedahirari.github.io/portifolio/en/resume.html) |
| ⬇️ Currículo (PDF) | [Curriculo_Ieda_Oliveira.pdf](Curriculo_Ieda_Oliveira.pdf) | [Resume_Ieda_Oliveira.pdf](Resume_Ieda_Oliveira.pdf) |

Os currículos têm uma coluna e texto real (não imagem), para que sistemas de recrutamento como Gupy, LinkedIn e Indeed consigam ler. O link do portfólio gera prévia com foto e descrição quando é compartilhado no LinkedIn ou no WhatsApp.

## Projetos em destaque

- **[E-commerce Olist](https://github.com/iedahirari/dashboard-ecommerce-olist):** análise de 100 mil pedidos mostrando que entregas atrasadas derrubam a nota média de 4,29 para 2,27 (Python, pandas, Power BI).
- **[MONITORAÊ](https://github.com/iedahirari/Projeto-de-Engenharia-de-Software-2---ES2):** crawlers que coletam dados públicos do Tesouro Nacional e da Prefeitura de Mogi das Cruzes, atualizados toda semana com GitHub Actions.
- **[Preditor de falhas em redes](https://github.com/ZorahSai/Projeto-WebAgriculture-):** árvore de decisão treinada com medições do RIPE Atlas (em grupo, em andamento).
- **[Horta Limpa](https://github.com/iedahirari/Horta-Limpa):** pesquisa com consumidores e dados da Anvisa que viraram um jogo educativo.

## Como editar

Todo o texto (nos dois idiomas) fica em [`build/conteudo.js`](build/conteudo.js). Depois de editar, gere as páginas de novo:

```bash
node build/gerar.js
```

Para gerar também os PDFs do currículo (precisa do Google Chrome ou do Microsoft Edge instalado):

```bash
node build/gerar.js --pdf
```

## Estrutura

```text
├── index.html                    <- Portfólio em português (gerado)
├── curriculo.html                <- Currículo em português (gerado)
├── en/index.html                 <- Portfólio em inglês (gerado)
├── en/resume.html                <- Currículo em inglês (gerado)
├── Curriculo_Ieda_Oliveira.pdf   <- PDF do currículo em português (gerado)
├── Resume_Ieda_Oliveira.pdf      <- PDF do currículo em inglês (gerado)
├── assets/                       <- CSS, ícone e imagens dos projetos
└── build/
    ├── conteudo.js               <- Todo o conteúdo, em PT e EN
    └── gerar.js                  <- Gera as páginas e os PDFs
```

## Contato

[LinkedIn](https://www.linkedin.com/in/ieda-oliveira/) · [iedahirari@gmail.com](mailto:iedahirari@gmail.com) · [GitHub](https://github.com/iedahirari)
