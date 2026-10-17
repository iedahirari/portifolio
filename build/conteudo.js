// Conteúdo do portfólio e do currículo, em português e inglês.
// Edite aqui e rode `node build/gerar.js` para atualizar as 4 páginas e os PDFs.

const contato = {
  nome: 'Ieda Oliveira',
  cidade: 'Suzano, SP',
  email: 'iedahirari@gmail.com',
  telefone: '(11) 93012-2714',
  telefoneIntl: '+55 11 93012-2714',
  whatsapp: 'https://wa.me/5511930122714',
  linkedin: 'https://www.linkedin.com/in/ieda-oliveira/',
  github: 'https://github.com/iedahirari',
  site: 'https://iedahirari.github.io/portifolio/',
  foto: 'https://avatars.githubusercontent.com/u/61597704?v=4',
};

const links = {
  olist: 'https://github.com/iedahirari/dashboard-ecommerce-olist',
  monitorae: 'https://github.com/iedahirari/Projeto-de-Engenharia-de-Software-2---ES2',
  monitoraeSite: 'https://iedahirari.github.io/Projeto-de-Engenharia-de-Software-2---ES2/',
  webagri: 'https://github.com/ZorahSai/Projeto-WebAgriculture-',
  horta: 'https://github.com/iedahirari/Horta-Limpa',
  hortaSite: 'https://iedahirari.github.io/Horta-Limpa/',
  artigo: 'https://revistaedufatec.fatecfranca.edu.br/wp-content/uploads/2024/04/edufatec-n06v2a07.pdf',
};

const pt = {
  lang: 'pt-BR',
  arquivo: { site: 'index.html', curriculo: 'curriculo.html', pdf: 'Curriculo_Ieda_Oliveira.pdf' },
  outro: { rotulo: 'English', site: 'en/', curriculo: 'en/resume.html' },
  meta: {
    titulo: 'Ieda Oliveira · Análise de Dados & BI',
    descricao: 'Portfólio de Ieda Oliveira: estudante de Matemática e Ciência da Computação em transição para Análise de Dados e BI, com projetos em Python, SQL e Power BI.',
  },
  menu: { sobre: 'Sobre', projetos: 'Projetos', habilidades: 'Habilidades', trajetoria: 'Trajetória', contato: 'Contato' },
  hero: {
    status: 'Disponível para estágio e vagas júnior',
    cargo: 'Análise de Dados & BI',
    subtitulo: 'em transição de carreira',
    texto: 'Estudante de Matemática (IFSP) e Ciência da Computação. Junto 6 anos de gestão comercial com Python, SQL e Power BI para transformar dados em decisões.',
    projetos: 'Ver projetos',
    curriculo: 'Currículo',
    curriculoEn: 'Resume (EN)',
  },
  diferenciais: {
    titulo: 'O que eu levo para um time de dados',
    itens: [
      { icone: 'calc', titulo: 'Base quantitativa', texto: 'Matemática no IFSP e Ciência da Computação: estatística, lógica e programação no dia a dia.' },
      { icone: 'loja', titulo: 'Visão de negócio', texto: '6 anos como gerente comercial acompanhando metas, curva ABC, giro de estoque e equipe. Sei que pergunta o dado precisa responder.' },
      { icone: 'codigo', titulo: 'Projetos com dados reais', texto: 'Crawlers, análises e dashboards com dados públicos, publicados no GitHub para qualquer pessoa conferir.' },
    ],
  },
  projetosTitulo: 'Projetos',
  projetosIntro: 'Cada projeto começa com uma pergunta de negócio. Clique para ver o código, os dados e o resultado.',
  rotulos: { pergunta: 'Pergunta', fiz: 'O que eu fiz', resultado: 'Resultado', codigo: 'Ver código', online: 'Ver online', jogar: 'Jogar', ler: 'Ler artigo', emAndamento: 'Em andamento', destaque: 'Destaque', grupo: 'Projeto em grupo' },
  projetos: [
    {
      id: 'olist', destaque: true,
      titulo: 'E-commerce Olist: atraso na entrega × satisfação',
      pergunta: 'O atraso na entrega derruba a satisfação do cliente? Onde vale a pena agir primeiro?',
      fiz: 'Análise exploratória em Python de cerca de 100 mil pedidos reais (Olist, 2016–2018), juntando 6 tabelas relacionais, com checagem de qualidade, engenharia de atributos (tempo de entrega, dias de atraso), estatística descritiva e correlação de Pearson. Dashboard em Power BI com modelo Star Schema, Power Query e medidas DAX.',
      resultado: [
        'Pedidos atrasados recebem nota média <strong>2,27</strong>, contra <strong>4,29</strong> dos entregues no prazo.',
        'São só <strong>7%</strong> dos pedidos, mas geram <strong>32%</strong> das avaliações negativas.',
        'O Nordeste concentra as maiores taxas de atraso (AL <strong>21%</strong>); o RJ, 2º maior mercado, atrasa <strong>12%</strong>, quase 3 vezes mais que SP e MG.',
        'Faturamento de jan–ago/2018 <strong>141%</strong> maior que no mesmo período de 2017, com pico na Black Friday.',
      ],
      stack: ['Python', 'pandas', 'Seaborn', 'Power BI', 'DAX', 'Star Schema'],
      imagem: 'assets/img/olist.png',
      imagemAlt: 'Gráfico de barras: a nota média cai de 4,29 para 1,7 conforme o atraso aumenta',
      links: [{ tipo: 'codigo', url: links.olist }],
    },
    {
      id: 'monitorae', destaque: true,
      titulo: 'MONITORAÊ: para onde vai o dinheiro público de Mogi',
      pergunta: 'Como mostrar, de forma simples para o cidadão, quanto a prefeitura gasta em cada área e quanto recebe do Estado?',
      fiz: 'Web crawlers em PHP e Node.js que coletam dados do Portal da Transparência da Prefeitura, do site da Câmara e da API do Tesouro Nacional (SICONFI/RREO). Pipeline de ETL com GitHub Actions: a coleta roda toda semana e publica JSON, sem servidor nem banco em produção. Versão acadêmica com MySQL/MariaDB e script Python que converte SQL em JSON. Também cuidei da engenharia de requisitos (requisitos, matriz de rastreabilidade e casos de uso em UML), em equipe de 4 pessoas, na Fatec Mogi das Cruzes.',
      resultado: [
        'Gastos por área de 2019 até hoje: <strong>R$ 2,3 bi</strong> em 2025, com Educação e Saúde à frente.',
        'Repasses do Estado (ICMS e IPVA) e salários de <strong>5,6 mil</strong> servidores.',
        'Corrigi um bug do crawler original que apagava os centavos dos salários.',
      ],
      stack: ['Node.js', 'PHP', 'MySQL', 'Python', 'ETL', 'GitHub Actions', 'UML'],
      imagem: 'assets/img/monitorae.png',
      imagemAlt: 'Página de relatórios do MONITORAÊ com gastos por área de governo',
      links: [{ tipo: 'online', url: links.monitoraeSite }, { tipo: 'codigo', url: links.monitorae }],
    },
    {
      id: 'webagri', emAndamento: true, grupo: true,
      titulo: 'Preditor de degradação de rede com árvore de decisão',
      pergunta: 'Dá para saber que um ponto da internet está degradando antes que ele caia, comparando cada medição com o comportamento normal do próprio fluxo?',
      fiz: 'Coleta de medições reais de ping da API do RIPE Atlas (97 fluxos entre 20 destinos e 5 origens), rótulo de cada medição como OK, RISCO ou FALHA pelo desvio em relação ao próprio histórico, engenharia de atributos (z-score robusto, aumento de RTT, jitter, perda de pacotes, janelas móveis) e treino de uma árvore de decisão com corte temporal entre treino, validação e teste. Projeto integrador de 3 disciplinas, em Scrum, com equipe de 5 pessoas. Minha parte: coleta, limpeza, rotulagem e treino.',
      resultado: [
        'Árvore treinada com mais de <strong>115 mil</strong> medições e validada em cerca de <strong>45 mil</strong>, com F1 macro de <strong>0,99</strong> e análise crítica dos erros.',
        'Pipeline reprodutível, parâmetros em arquivos de configuração e dicionário de dados.',
      ],
      stack: ['Python', 'scikit-learn', 'pandas', 'APIs REST', 'Scrum'],
      links: [{ tipo: 'codigo', url: links.webagri }],
    },
    {
      id: 'horta', grupo: true,
      titulo: 'Horta Limpa: dados de pesquisa viram jogo educativo',
      pergunta: 'Por que as pessoas se preocupam com agrotóxicos, mas quase não pensam neles na hora de comprar?',
      fiz: 'Questionário com 57 moradores de Mogi das Cruzes cruzado com os dados do programa PARA da Anvisa. Os achados viraram as regras de um jogo de navegador em que o jogador passa um ano cultivando uma horta, com cada mecânica ligada a uma base pedagógica (Piaget, Paulo Freire). Feito em JavaScript puro com mundo isométrico em Canvas 2D, funciona no computador e no celular. Projeto de extensão do Centro Universitário Braz Cubas.',
      resultado: [
        '<strong>86%</strong> se preocupam com agrotóxicos, mas <strong>73,7%</strong> escolhem o alimento pela aparência.',
        'A Anvisa encontrou <strong>20,6%</strong> das amostras irregulares no ciclo de 2024.',
      ],
      stack: ['Pesquisa quantitativa', 'JavaScript', 'Canvas 2D'],
      links: [{ tipo: 'jogar', url: links.hortaSite }, { tipo: 'codigo', url: links.horta }],
    },
    {
      id: 'artigo',
      titulo: 'Artigo publicado: controle de acesso em bancos de dados na nuvem',
      pergunta: 'Qual modelo de controle de acesso (DAC, MAC ou RBAC) protege melhor bancos de dados na nuvem?',
      fiz: 'Revisão comparativa de 16 trabalhos acadêmicos (IEEE, ACM e Google Acadêmico) sobre integridade, disponibilidade e governança de dados.',
      resultado: ['Publicado na <strong>Revista EduFatec</strong> (ed. 6, 2023).'],
      stack: ['Governança de dados', 'Segurança', 'Pesquisa científica'],
      links: [{ tipo: 'ler', url: links.artigo }],
    },
  ],
  habilidades: {
    titulo: 'Habilidades',
    intro: 'Separei o que já uso em projetos do que estou estudando agora.',
    usoTitulo: 'Uso em projetos',
    estudoTitulo: 'Estudando agora',
    grupos: [
      { titulo: 'Análise & Python', itens: ['Python (pandas, NumPy)', 'Matplotlib e Seaborn', 'Jupyter', 'Análise exploratória (EDA)', 'Estatística descritiva'] },
      { titulo: 'BI & Visualização', itens: ['Power BI (DAX, Power Query)', 'Modelagem Star Schema', 'Looker Studio', 'Excel (tabelas dinâmicas, PROCV/XLOOKUP)', 'Storytelling com dados'] },
      { titulo: 'Dados & Engenharia', itens: ['SQL (joins, agregações, subconsultas)', 'MySQL e modelagem relacional', 'Web scraping e APIs REST', 'Automação com GitHub Actions', 'Git e GitHub'] },
    ],
    estudo: ['Machine Learning com scikit-learn', 'Estatística inferencial', 'PostgreSQL'],
  },
  trajetoria: {
    titulo: 'Trajetória',
    intro: 'Antes de tecnologia, trabalhei com metas, estoque e clientes. É dessa experiência que vêm as perguntas que hoje respondo com dados.',
    experiencias: [
      {
        cargo: 'Gerente Comercial e de Operações', empresa: 'Lua Luana', local: 'São Paulo, SP', periodo: 'Jun/2020 – Set/2026',
        itens: [
          'Acompanhamento de KPIs diários e mensais, metas e funil de vendas.',
          'Controle de estoque com curva ABC e giro de mercadorias para planejar compras e reduzir rupturas.',
          'Relatórios gerenciais em planilhas para a diretoria e para o financeiro.',
          'Liderança, recrutamento e treinamento da equipe de vendas.',
        ],
      },
      {
        cargo: 'Recepcionista e Apoio Administrativo', empresa: 'Odonto Pride', local: 'Suzano, SP', periodo: 'Nov/2018 – Fev/2019',
        itens: ['Agendamentos em sistema, atendimento e organização de prontuários com foco em dados corretos e sigilo.'],
      },
      {
        cargo: 'Atendente de Vendas', empresa: 'Lua Luana', local: 'São Paulo, SP', periodo: 'Ago/2016 – Mar/2018',
        itens: ['Atendimento consultivo, conferência de inventário e reposição de mercadorias.'],
      },
      {
        cargo: 'Operadora de Recuperação de Crédito', empresa: 'Rede de Cobranças Bandeirantes', local: 'São Paulo, SP', periodo: 'Out/2013 – Abr/2015',
        itens: ['Análise de carteira de inadimplência e negociação orientada a metas de recuperação.'],
      },
    ],
    formacaoTitulo: 'Formação',
    formacao: [
      { curso: 'Bacharelado em Ciência da Computação', instituicao: 'Centro Universitário Braz Cubas', periodo: 'Previsão: 2029' },
      { curso: 'Graduação em Matemática', instituicao: 'Instituto Federal de São Paulo (IFSP)', periodo: 'Previsão: 2028' },
      { curso: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', instituicao: 'Fatec Mogi das Cruzes', periodo: '2019 – 2024 (interrompido)' },
    ],
    cursosTitulo: 'Certificados e publicação',
    cursos: [
      { nome: 'Artigo: "Modelos de Controle de Acesso em Bancos de Dados na Nuvem: uma análise comparativa"', origem: 'Revista EduFatec, n. 6, v. 2', ano: '2023' },
      { nome: 'Preparando Dados para Análise com Microsoft Power BI', origem: 'Fundação Bradesco', ano: 'jan/2025' },
      { nome: 'Cultura Digital', origem: 'Fundação Bradesco', ano: 'jan/2025' },
      { nome: 'Análise de Dados no Power BI', origem: 'Fundação Bradesco', ano: 'nov/2024' },
      { nome: 'Introdução à Análise de Dados: Microsoft Power BI', origem: 'Fundação Bradesco', ano: 'nov/2024' },
      { nome: 'Implementando Banco de Dados', origem: 'Fundação Bradesco', ano: 'dez/2023' },
    ],
    voluntariadoTitulo: 'Voluntariado',
    voluntariado: [
      {
        cargo: 'Monitora Voluntária: Inclusão Digital para a Melhor Idade', instituicao: 'Fatec Mogi das Cruzes', periodo: 'Mar/2019 – Jun/2019',
        texto: 'Apoiei idosos nas aulas práticas de informática e ajudei a incluir no curso tarefas básicas no celular, com atendimento individual e linguagem simples para que cada aluno ganhasse autonomia.',
      },
    ],
    idiomasTitulo: 'Idiomas',
    idiomas: ['Português: nativo', 'Inglês: básico a intermediário', 'Espanhol: básico a intermediário'],
  },
  contatoSecao: {
    titulo: 'Vamos conversar?',
    texto: 'Procuro estágio ou vaga júnior em Análise de Dados, BI ou áreas próximas. Respondo rápido por e-mail, LinkedIn ou WhatsApp.',
    email: 'Enviar e-mail',
    whatsapp: 'WhatsApp',
    mensagemWhats: 'Olá, Ieda! Vi seu portfólio e gostaria de conversar.',
  },
  rodape: 'Feito por Ieda Oliveira · código aberto no GitHub',
  curriculo: {
    titulo: 'Currículo · Ieda Oliveira',
    objetivoTitulo: 'Objetivo',
    objetivo: 'Estágio ou posição júnior em Análise de Dados, Business Intelligence ou áreas próximas.',
    resumoTitulo: 'Resumo',
    resumo: 'Estudante de Matemática (IFSP) e Ciência da Computação (Braz Cubas) em transição de carreira para dados, com 6 anos de experiência em gestão comercial acompanhando KPIs, estoque e equipe. Desenvolvo projetos com Python (pandas), SQL e Power BI sobre dados reais, como uma análise de 100 mil pedidos de e-commerce e crawlers que coletam dados públicos da API do Tesouro Nacional. Artigo publicado sobre segurança de bancos de dados na nuvem.',
    habilidadesTitulo: 'Habilidades',
    projetosTitulo: 'Projetos',
    experienciaTitulo: 'Experiência profissional',
    imprimir: 'Salvar em PDF / Imprimir',
    baixar: 'Baixar PDF',
    voltar: 'Voltar ao portfólio',
    dica: 'Formato em uma coluna, legível por sistemas de recrutamento (Gupy, LinkedIn, Indeed).',
    projetos: [
      {
        titulo: 'Análise de satisfação e entregas em e-commerce (Olist)', stack: 'Python, pandas, Seaborn, Power BI, DAX', url: links.olist,
        itens: [
          'Analisou cerca de 100 mil pedidos reais (6 tabelas) e mostrou que pedidos atrasados recebem nota média 2,27 contra 4,29 dos entregues no prazo, e geram 32% das avaliações negativas sendo só 7% dos pedidos.',
          'Construiu dashboard de vendas e logística em Power BI com modelo Star Schema, Power Query e medidas DAX (faturamento, ticket médio, prazo e taxa de atraso).',
        ],
      },
      {
        titulo: 'MONITORAÊ: portal de transparência de Mogi das Cruzes', stack: 'Node.js, PHP, MySQL, GitHub Actions', url: links.monitoraeSite,
        itens: [
          'Desenvolveu crawlers que coletam dados da API do Tesouro Nacional (SICONFI) e do portal da Prefeitura, com tratamento de encoding e valores monetários.',
          'Automatizou a coleta semanal com GitHub Actions e publicou relatórios de gastos por área e repasses do Estado para o cidadão.',
        ],
      },
      {
        titulo: 'Preditor de degradação de rede com árvore de decisão (em grupo, em andamento)', stack: 'Python, scikit-learn, pandas', url: links.webagri,
        itens: ['Coletou medições do RIPE Atlas (97 fluxos), rotulou cada uma pelo desvio do próprio fluxo e treinou árvore de decisão com mais de 115 mil medições, chegando a F1 macro de 0,99 na validação, com corte temporal entre treino e teste, em Scrum.'],
      },
    ],
  },
};

const en = {
  lang: 'en',
  arquivo: { site: 'en/index.html', curriculo: 'en/resume.html', pdf: 'Resume_Ieda_Oliveira.pdf' },
  outro: { rotulo: 'Português', site: '../', curriculo: '../curriculo.html' },
  meta: {
    titulo: 'Ieda Oliveira · Data Analytics & BI',
    descricao: 'Portfolio of Ieda Oliveira: Mathematics and Computer Science student moving into Data Analytics and BI, with projects in Python, SQL and Power BI.',
  },
  menu: { sobre: 'About', projetos: 'Projects', habilidades: 'Skills', trajetoria: 'Experience', contato: 'Contact' },
  hero: {
    status: 'Open to internships and junior roles',
    cargo: 'Data Analytics & BI',
    subtitulo: 'career changer',
    texto: 'Mathematics (IFSP) and Computer Science student. I combine 6 years of retail management with Python, SQL and Power BI to turn data into decisions.',
    projetos: 'See projects',
    curriculo: 'Resume',
    curriculoEn: 'Currículo (PT)',
  },
  diferenciais: {
    titulo: 'What I bring to a data team',
    itens: [
      { icone: 'calc', titulo: 'Quantitative background', texto: 'Mathematics at IFSP and Computer Science: statistics, logic and programming every day.' },
      { icone: 'loja', titulo: 'Business sense', texto: '6 years as a retail manager tracking targets, ABC analysis, inventory turnover and a sales team. I know which question the data needs to answer.' },
      { icone: 'codigo', titulo: 'Real-data projects', texto: 'Crawlers, analyses and dashboards built on public data and published on GitHub for anyone to check.' },
    ],
  },
  projetosTitulo: 'Projects',
  projetosIntro: 'Every project starts with a business question. Open them to see the code, the data and the result.',
  rotulos: { pergunta: 'Question', fiz: 'What I did', resultado: 'Result', codigo: 'View code', online: 'Live site', jogar: 'Play', ler: 'Read paper', emAndamento: 'In progress', destaque: 'Featured', grupo: 'Team project' },
  projetos: [
    {
      id: 'olist', destaque: true,
      titulo: 'Olist e-commerce: late deliveries × customer satisfaction',
      pergunta: 'Do late deliveries hurt customer satisfaction? Where should the company act first?',
      fiz: 'Exploratory analysis in Python of about 100k real orders (Olist, 2016–2018), joining 6 relational tables, with data quality checks, feature engineering (delivery time, days late), descriptive statistics and Pearson correlation. Power BI dashboard with a star schema, Power Query and DAX measures.',
      resultado: [
        'Late orders get an average rating of <strong>2.27</strong>, versus <strong>4.29</strong> for on-time orders.',
        'They are only <strong>7%</strong> of orders but drive <strong>32%</strong> of all negative reviews.',
        'The Northeast has the highest late rates (Alagoas <strong>21%</strong>); Rio de Janeiro, the 2nd largest market, is late <strong>12%</strong> of the time, almost 3 times as often as São Paulo and Minas Gerais.',
        'Jan–Aug 2018 revenue was <strong>141%</strong> higher than the same period of 2017, peaking on Black Friday.',
      ],
      stack: ['Python', 'pandas', 'Seaborn', 'Power BI', 'DAX', 'Star schema'],
      imagem: 'assets/img/olist.png',
      imagemAlt: 'Bar chart: the average rating drops from 4.29 to about 1.7 as delays grow',
      links: [{ tipo: 'codigo', url: links.olist }],
    },
    {
      id: 'monitorae', destaque: true,
      titulo: 'MONITORAÊ: where public money goes in Mogi das Cruzes',
      pergunta: 'How can citizens easily see how much the city spends in each area and how much it receives from the State?',
      fiz: 'Web crawlers in PHP and Node.js that collect data from the city transparency portal, the city council site and the Brazilian Treasury API (SICONFI/RREO). ETL pipeline on GitHub Actions: collection runs weekly and publishes JSON, with no server or database in production. Academic version with MySQL/MariaDB and a Python script that converts SQL to JSON. I also handled requirements engineering (requirements, traceability matrix and UML use cases) in a team of 4 at Fatec Mogi das Cruzes.',
      resultado: [
        'Spending by area from 2019 to today: <strong>R$ 2.3 billion</strong> in 2025, led by Education and Health.',
        'State transfers (ICMS and IPVA taxes) and salaries of <strong>5.6k</strong> public employees.',
        'Fixed a bug in the original crawler that dropped the cents from salaries.',
      ],
      stack: ['Node.js', 'PHP', 'MySQL', 'Python', 'ETL', 'GitHub Actions', 'UML'],
      imagem: 'assets/img/monitorae.png',
      imagemAlt: 'MONITORAÊ reports page showing spending by government area',
      links: [{ tipo: 'online', url: links.monitoraeSite }, { tipo: 'codigo', url: links.monitorae }],
    },
    {
      id: 'webagri', emAndamento: true, grupo: true,
      titulo: 'Network degradation predictor with a decision tree',
      pergunta: 'Can we tell that an internet path is degrading before it goes down, by comparing each measurement with that flow’s own normal behavior?',
      fiz: 'Collected real ping measurements from the RIPE Atlas API (97 flows between 20 targets and 5 probes), labeled each one OK, RISK or FAILURE by its deviation from the flow’s own baseline, engineered features (robust z-score, RTT increase, jitter, packet loss, rolling windows) and trained a decision tree with a time-based train/validation/test split. Capstone across 3 courses, run with Scrum in a team of 5. My part: collection, cleaning, labeling and training.',
      resultado: [
        'Tree trained on over <strong>115k</strong> measurements and validated on about <strong>45k</strong>, reaching a macro F1 of <strong>0.99</strong>, with a critical error analysis.',
        'Reproducible pipeline, parameters in config files and a data dictionary.',
      ],
      stack: ['Python', 'scikit-learn', 'pandas', 'REST APIs', 'Scrum'],
      links: [{ tipo: 'codigo', url: links.webagri }],
    },
    {
      id: 'horta', grupo: true,
      titulo: 'Horta Limpa: survey data turned into an educational game',
      pergunta: 'Why do people worry about pesticides but barely consider them when buying food?',
      fiz: 'Survey of 57 residents of Mogi das Cruzes cross-checked with data from ANVISA’s PARA program (Brazil’s health regulator). The findings became the rules of a browser game where the player spends a year growing a vegetable garden, with each mechanic tied to a teaching approach (Piaget, Paulo Freire). Built in plain JavaScript with an isometric Canvas 2D world; works on desktop and mobile. University outreach project at Braz Cubas.',
      resultado: [
        '<strong>86%</strong> worry about pesticides, yet <strong>73.7%</strong> choose produce by its looks.',
        'ANVISA found <strong>20.6%</strong> of samples non-compliant in the 2024 cycle.',
      ],
      stack: ['Survey research', 'JavaScript', 'Canvas 2D'],
      links: [{ tipo: 'jogar', url: links.hortaSite }, { tipo: 'codigo', url: links.horta }],
    },
    {
      id: 'artigo',
      titulo: 'Published paper: access control for cloud databases',
      pergunta: 'Which access control model (DAC, MAC or RBAC) best protects cloud databases?',
      fiz: 'Comparative review of 16 academic papers (IEEE, ACM and Google Scholar) on data integrity, availability and governance.',
      resultado: ['Published in <strong>Revista EduFatec</strong> (issue 6, 2023, in Portuguese).'],
      stack: ['Data governance', 'Security', 'Research'],
      links: [{ tipo: 'ler', url: links.artigo }],
    },
  ],
  habilidades: {
    titulo: 'Skills',
    intro: 'What I already use in projects, and what I am learning right now.',
    usoTitulo: 'Used in projects',
    estudoTitulo: 'Currently learning',
    grupos: [
      { titulo: 'Analysis & Python', itens: ['Python (pandas, NumPy)', 'Matplotlib and Seaborn', 'Jupyter', 'Exploratory data analysis (EDA)', 'Descriptive statistics'] },
      { titulo: 'BI & Visualization', itens: ['Power BI (DAX, Power Query)', 'Star schema modeling', 'Looker Studio', 'Excel (pivot tables, VLOOKUP/XLOOKUP)', 'Data storytelling'] },
      { titulo: 'Data & Engineering', itens: ['SQL (joins, aggregations, subqueries)', 'MySQL and relational modeling', 'Web scraping and REST APIs', 'Automation with GitHub Actions', 'Git and GitHub'] },
    ],
    estudo: ['Machine Learning with scikit-learn', 'Inferential statistics', 'PostgreSQL'],
  },
  trajetoria: {
    titulo: 'Experience',
    intro: 'Before tech, I worked with sales targets, inventory and customers. That is where the questions I now answer with data come from.',
    experiencias: [
      {
        cargo: 'Sales & Operations Manager', empresa: 'Lua Luana (retail)', local: 'São Paulo, Brazil', periodo: 'Jun 2020 – Sep 2026',
        itens: [
          'Tracked daily and monthly KPIs, sales targets and the sales funnel.',
          'Managed inventory with ABC analysis and stock turnover to plan purchases and reduce stockouts.',
          'Built management reports in spreadsheets for the board and the finance team.',
          'Led, hired and trained the sales team.',
        ],
      },
      {
        cargo: 'Receptionist & Administrative Assistant', empresa: 'Odonto Pride (dental clinic)', local: 'Suzano, Brazil', periodo: 'Nov 2018 – Feb 2019',
        itens: ['Scheduling system, customer service and patient records kept accurate and confidential.'],
      },
      {
        cargo: 'Sales Associate', empresa: 'Lua Luana (retail)', local: 'São Paulo, Brazil', periodo: 'Aug 2016 – Mar 2018',
        itens: ['Consultative sales, inventory counts and restocking.'],
      },
      {
        cargo: 'Credit Recovery Agent', empresa: 'Rede de Cobranças Bandeirantes', local: 'São Paulo, Brazil', periodo: 'Oct 2013 – Apr 2015',
        itens: ['Analyzed delinquent accounts and negotiated payment agreements to meet recovery targets.'],
      },
    ],
    formacaoTitulo: 'Education',
    formacao: [
      { curso: 'B.Sc. in Computer Science', instituicao: 'Centro Universitário Braz Cubas', periodo: 'Expected 2029' },
      { curso: 'Degree in Mathematics', instituicao: 'Federal Institute of São Paulo (IFSP)', periodo: 'Expected 2028' },
      { curso: 'Associate degree in Systems Analysis and Development', instituicao: 'Fatec Mogi das Cruzes', periodo: '2019 – 2024 (not completed)' },
    ],
    cursosTitulo: 'Certifications & publication',
    cursos: [
      { nome: 'Paper: "Access Control Models for Cloud Databases: a comparative analysis" (in Portuguese)', origem: 'Revista EduFatec, no. 6, v. 2', ano: '2023' },
      { nome: 'Preparing Data for Analysis with Microsoft Power BI', origem: 'Fundação Bradesco', ano: 'Jan 2025' },
      { nome: 'Digital Culture', origem: 'Fundação Bradesco', ano: 'Jan 2025' },
      { nome: 'Data Analysis in Power BI', origem: 'Fundação Bradesco', ano: 'Nov 2024' },
      { nome: 'Introduction to Data Analysis: Microsoft Power BI', origem: 'Fundação Bradesco', ano: 'Nov 2024' },
      { nome: 'Implementing Databases', origem: 'Fundação Bradesco', ano: 'Dec 2023' },
    ],
    voluntariadoTitulo: 'Volunteering',
    voluntariado: [
      {
        cargo: 'Volunteer Tutor: Digital Inclusion for Seniors', instituicao: 'Fatec Mogi das Cruzes', periodo: 'Mar 2019 – Jun 2019',
        texto: 'Helped seniors in hands-on computer classes and added basic smartphone tasks to the course, with one-on-one support and plain language so each student could do things on their own.',
      },
    ],
    idiomasTitulo: 'Languages',
    idiomas: ['Portuguese: native', 'English: basic to intermediate', 'Spanish: basic to intermediate'],
  },
  contatoSecao: {
    titulo: 'Let’s talk',
    texto: 'I am looking for an internship or junior role in Data Analytics, BI or related areas. I reply quickly by email, LinkedIn or WhatsApp.',
    email: 'Send email',
    whatsapp: 'WhatsApp',
    mensagemWhats: 'Hi Ieda! I saw your portfolio and would like to talk.',
  },
  rodape: 'Made by Ieda Oliveira · open source on GitHub',
  curriculo: {
    titulo: 'Resume · Ieda Oliveira',
    objetivoTitulo: 'Objective',
    objetivo: 'Internship or junior role in Data Analytics, Business Intelligence or related areas.',
    resumoTitulo: 'Summary',
    resumo: 'Mathematics (IFSP) and Computer Science (Braz Cubas) student moving into data, with 6 years of retail management experience tracking KPIs, inventory and a sales team. I build projects with Python (pandas), SQL and Power BI on real data, such as an analysis of 100k e-commerce orders and crawlers that collect public data from the Brazilian Treasury API. Published paper on cloud database security.',
    habilidadesTitulo: 'Skills',
    projetosTitulo: 'Projects',
    experienciaTitulo: 'Professional experience',
    imprimir: 'Save as PDF / Print',
    baixar: 'Download PDF',
    voltar: 'Back to portfolio',
    dica: 'Single-column format, readable by applicant tracking systems (LinkedIn, Indeed, Workday).',
    projetos: [
      {
        titulo: 'E-commerce delivery and satisfaction analysis (Olist)', stack: 'Python, pandas, Seaborn, Power BI, DAX', url: links.olist,
        itens: [
          'Analyzed about 100k real orders (6 tables) and showed that late orders average a 2.27 rating versus 4.29 for on-time orders, driving 32% of negative reviews while being only 7% of orders.',
          'Built a sales and logistics dashboard in Power BI with a star schema, Power Query and DAX measures (revenue, average order value, delivery time and late rate).',
        ],
      },
      {
        titulo: 'MONITORAÊ: public spending transparency portal', stack: 'Node.js, PHP, MySQL, GitHub Actions', url: links.monitoraeSite,
        itens: [
          'Developed crawlers that collect data from the Brazilian Treasury API (SICONFI) and the city portal, handling encoding and currency formats.',
          'Automated weekly data collection with GitHub Actions and published spending-by-area and state-transfer reports for citizens.',
        ],
      },
      {
        titulo: 'Network degradation predictor with a decision tree (team project, in progress)', stack: 'Python, scikit-learn, pandas', url: links.webagri,
        itens: ['Collected RIPE Atlas measurements (97 flows), labeled each by its deviation from the flow’s baseline and trained a decision tree on over 115k measurements, reaching a 0.99 macro F1 on validation with a time-based train/test split, using Scrum.'],
      },
    ],
  },
};

module.exports = { contato, pt, en };
