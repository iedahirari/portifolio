# Portfólio · Ieda Oliveira

**Análise de Negócios, Requisitos e Processos** · estudante de Ciência da Computação e Licenciatura em Matemática, em transição para tecnologia. Busco oportunidades **júnior ou de estágio** em Análise de Negócios, Análise de Requisitos e Processos. Também considero Suporte Funcional e Implantação de Sistemas; Dados/BI com foco em operações é uma frente complementar.

Tenho mais de seis anos de experiência em gestão comercial e operações no varejo, com acompanhamento de indicadores, metas, estoque e relatórios para apoiar decisões. Em projetos acadêmicos, participei do levantamento e organização de requisitos, modelagem e desenvolvimento em equipe. Concluí **Process Modeling — Bizagi (BPMN), outubro de 2026**.

| | Português | English |
| --- | --- | --- |
| 🌐 Portfólio | [iedahirari.github.io/portifolio](https://iedahirari.github.io/portifolio/) | [/en](https://iedahirari.github.io/portifolio/en/) |
| 📄 Currículo (página) | [curriculo.html](https://iedahirari.github.io/portifolio/curriculo.html) | [resume.html](https://iedahirari.github.io/portifolio/en/resume.html) |
| ⬇️ Currículo (PDF) | [Curriculo_Ieda_Oliveira.pdf](Curriculo_Ieda_Oliveira.pdf) | [Resume_Ieda_Oliveira.pdf](Resume_Ieda_Oliveira.pdf) |

Os currículos têm uma coluna e texto real (não imagem), para que sistemas de recrutamento como Gupy, LinkedIn e Indeed consigam ler. O link do portfólio gera prévia com foto e descrição quando é compartilhado no LinkedIn ou no WhatsApp.

## Projetos em destaque

- **[MONITORAÊ](https://github.com/iedahirari/Projeto-de-Engenharia-de-Software-2---ES2):** projeto em equipe com coleta de dados públicos do Tesouro Nacional e da Prefeitura de Mogi das Cruzes, atualizados semanalmente com GitHub Actions. Incluiu levantamento e organização de requisitos, matriz de rastreabilidade e casos de uso UML.
- **[E-commerce Olist](https://github.com/iedahirari/dashboard-ecommerce-olist):** análise de cerca de 100 mil pedidos; identificou que pedidos atrasados representavam 7% do total e concentravam 32% das avaliações negativas (Python, pandas, Power BI).
- **[Horta Limpa](https://github.com/iedahirari/Horta-Limpa):** pesquisa com consumidores e dados da Anvisa que viraram um jogo educativo.
- **[Preditor de falhas em redes](https://github.com/ZorahSai/Projeto-WebAgriculture-):** projeto em grupo, em andamento, que explora árvore de decisão com medições do RIPE Atlas.

## Como editar

O conteúdo do site nos dois idiomas fica em [`build/conteudo.js`](build/conteudo.js). Depois de editar, gere as páginas de novo:

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
