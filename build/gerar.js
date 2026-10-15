// Gera as páginas do portfólio e do currículo (PT e EN) a partir de build/conteudo.js.
// Uso, na raiz do repositório:
//   node build/gerar.js          -> gera os HTML
//   node build/gerar.js --pdf    -> gera os HTML e também os PDFs do currículo (precisa do Chrome ou Edge)

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { contato, pt, en } = require('./conteudo');

const RAIZ = path.join(__dirname, '..');

const ICONES = {
	calc: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h8"/>',
	loja: '<path d="M3 9l1.5-5h15L21 9M3 9h18M3 9v11h18V9M9 20v-6h6v6"/>',
	codigo: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
	github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
	linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
	email: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
	whatsapp: '<path d="M3 21l1.7-5A9 9 0 1 1 8 19.3z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>',
	documento: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/>',
	externo: '<path d="M7 17 17 7M8 7h9v9"/>',
	play: '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4z"/>',
	menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
	download: '<path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16"/>',
	impressora: '<path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"/>',
	seta: '<path d="M19 12H5m7 7-7-7 7-7"/>',
	globo: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
};

const icone = (nome) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONES[nome]}</svg>`;
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const semTags = (t) => String(t).replace(/<[^>]+>/g, '');

const FONTES = `<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display&display=swap">`;

// "assets/..." visto de uma página que está em "en/" vira "../assets/..."
const prefixo = (t) => (t.lang === 'en' ? '../' : '');

function cabecaComum(t, titulo, descricao, urlPagina, alternativas) {
	return `<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>${esc(titulo)}</title>
	<meta name="description" content="${esc(descricao)}">
	<meta name="author" content="${esc(contato.nome)}">
	<meta name="theme-color" content="#c2306a">
	<link rel="canonical" href="${contato.site}${urlPagina}">
	${alternativas.map(([lang, url]) => `<link rel="alternate" hreflang="${lang}" href="${contato.site}${url}">`).join('\n\t')}
	<meta property="og:type" content="profile">
	<meta property="og:title" content="${esc(titulo)}">
	<meta property="og:description" content="${esc(descricao)}">
	<meta property="og:url" content="${contato.site}${urlPagina}">
	<meta property="og:image" content="${contato.foto}">
	<meta property="og:locale" content="${t.lang === 'en' ? 'en_US' : 'pt_BR'}">
	<meta name="twitter:card" content="summary">
	<link rel="icon" href="${prefixo(t)}assets/icone.svg" type="image/svg+xml">
	${FONTES}`;
}

function linkProjeto(t, l) {
	const mapa = { codigo: ['github', t.rotulos.codigo], online: ['externo', t.rotulos.online], jogar: ['play', t.rotulos.jogar], ler: ['documento', t.rotulos.ler] };
	const [ic, rotulo] = mapa[l.tipo];
	const principal = l.tipo !== 'codigo';
	return `<a class="botao ${principal ? 'botao--primario' : 'botao--contorno'} botao--pequeno" href="${l.url}" target="_blank" rel="noopener">${icone(ic)}${rotulo}</a>`;
}

function cartaoProjeto(t, p) {
	const selos = [
		p.destaque && `<span class="chip">${t.rotulos.destaque}</span>`,
		p.emAndamento && `<span class="chip chip--pessego">${t.rotulos.emAndamento}</span>`,
		p.grupo && `<span class="chip chip--lilas">${t.rotulos.grupo}</span>`,
	].filter(Boolean).join('');
	const corpo = `<div class="projeto-corpo">
						${selos ? `<div class="projeto-selos">${selos}</div>` : ''}
						<h3>${esc(p.titulo)}</h3>
						<dl class="campo"><dt>${t.rotulos.pergunta}</dt><dd class="pergunta">${esc(p.pergunta)}</dd></dl>
						<dl class="campo"><dt>${t.rotulos.fiz}</dt><dd>${esc(p.fiz)}</dd></dl>
						<dl class="campo"><dt>${t.rotulos.resultado}</dt><dd><ul class="resultados">${p.resultado.map((r) => `<li>${r}</li>`).join('')}</ul></dd></dl>
						<div class="stack">${p.stack.map((s) => `<span class="chip chip--neutro">${esc(s)}</span>`).join('')}</div>
						<div class="projeto-links">${p.links.map((l) => linkProjeto(t, l)).join('')}</div>
					</div>`;
	const imagem = p.imagem ? `<div class="projeto-imagem"><img src="${prefixo(t)}${p.imagem}" alt="${esc(p.imagemAlt)}" loading="lazy" width="1200" height="540"></div>` : '';
	return `<article class="cartao projeto${p.destaque ? ' projeto--destaque' : ''}" id="projeto-${p.id}">
					${corpo}
					${imagem}
				</article>`;
}

function paginaPortfolio(t) {
	const pre = prefixo(t);
	const destaques = t.projetos.filter((p) => p.destaque);
	const outros = t.projetos.filter((p) => !p.destaque);
	const whats = `${contato.whatsapp}?text=${encodeURIComponent(t.contatoSecao.mensagemWhats)}`;
	const urlPagina = t.lang === 'en' ? 'en/' : '';
	const pessoa = {
		'@context': 'https://schema.org', '@type': 'Person', name: contato.nome, url: contato.site + urlPagina, image: contato.foto,
		jobTitle: t.hero.cargo, email: `mailto:${contato.email}`, address: { '@type': 'PostalAddress', addressLocality: 'Suzano', addressRegion: 'SP', addressCountry: 'BR' },
		sameAs: [contato.linkedin, contato.github],
		knowsAbout: ['Python', 'SQL', 'Power BI', 'Data Analysis', 'Business Intelligence', 'pandas'],
	};

	return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
	${cabecaComum(t, t.meta.titulo, t.meta.descricao, urlPagina, [['pt-BR', ''], ['en', 'en/'], ['x-default', '']])}
	<link rel="stylesheet" href="${pre}assets/estilo.css">
	<script type="application/ld+json">${JSON.stringify(pessoa)}</script>
</head>
<body>
	<a class="pular" href="#conteudo">${t.lang === 'en' ? 'Skip to content' : 'Pular para o conteúdo'}</a>

	<header class="topo">
		<div class="container">
			<a class="marca" href="#inicio">Ieda <span>Oliveira</span></a>
			<button class="botao-menu" type="button" aria-expanded="false" aria-controls="menu">${icone('menu')}<span class="oculto">Menu</span></button>
			<nav class="menu" id="menu" aria-label="${t.lang === 'en' ? 'Main' : 'Principal'}">
				<ul>
					<li><a href="#sobre">${t.menu.sobre}</a></li>
					<li><a href="#projetos">${t.menu.projetos}</a></li>
					<li><a href="#habilidades">${t.menu.habilidades}</a></li>
					<li><a href="#trajetoria">${t.menu.trajetoria}</a></li>
					<li><a href="#contato">${t.menu.contato}</a></li>
				</ul>
				<a class="botao botao--contorno botao--pequeno idioma" href="${t.outro.site}" hreflang="${t.lang === 'en' ? 'pt-BR' : 'en'}">${icone('globo')}${t.outro.rotulo}</a>
			</nav>
		</div>
	</header>

	<main id="conteudo">
		<section class="hero" id="inicio">
			<div class="container">
				<div>
					<span class="status">${esc(t.hero.status)}</span>
					<h1>${esc(contato.nome)}</h1>
					<p class="cargo">${esc(t.hero.cargo)} <small>· ${esc(t.hero.subtitulo)}</small></p>
					<p class="texto">${esc(t.hero.texto)}</p>
					<div class="acoes">
						<a class="botao botao--primario" href="#projetos">${t.hero.projetos}</a>
						<a class="botao botao--contorno" href="${t.arquivo.curriculo.split('/').pop()}">${icone('documento')}${t.hero.curriculo}</a>
						<a class="botao botao--contorno" href="${t.outro.curriculo}" hreflang="${t.lang === 'en' ? 'pt-BR' : 'en'}">${icone('globo')}${t.hero.curriculoEn}</a>
					</div>
					<div class="redes">
						<a href="${contato.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icone('linkedin')}</a>
						<a href="${contato.github}" target="_blank" rel="noopener" aria-label="GitHub">${icone('github')}</a>
						<a href="mailto:${contato.email}" aria-label="E-mail">${icone('email')}</a>
						<a href="${whats}" target="_blank" rel="noopener" aria-label="WhatsApp">${icone('whatsapp')}</a>
					</div>
				</div>
				<div class="hero-foto">
					<img src="${contato.foto}" alt="${t.lang === 'en' ? 'Photo of Ieda Oliveira' : 'Foto de Ieda Oliveira'}" width="460" height="460">
				</div>
			</div>
		</section>

		<section class="secao secao--alt" id="sobre">
			<div class="container">
				<div class="secao-topo">
					<span class="sobretitulo">${t.menu.sobre}</span>
					<h2>${esc(t.diferenciais.titulo)}</h2>
				</div>
				<div class="grade-3">
					${t.diferenciais.itens.map((d) => `<div class="cartao diferencial">
						<div class="icone">${icone(d.icone)}</div>
						<h3>${esc(d.titulo)}</h3>
						<p>${esc(d.texto)}</p>
					</div>`).join('\n\t\t\t\t\t')}
				</div>
			</div>
		</section>

		<section class="secao" id="projetos">
			<div class="container">
				<div class="secao-topo">
					<span class="sobretitulo">${t.projetosTitulo}</span>
					<h2>${t.lang === 'en' ? 'From question to answer' : 'Da pergunta à resposta'}</h2>
					<p>${esc(t.projetosIntro)}</p>
				</div>
				<div class="projetos">
					${destaques.map((p) => cartaoProjeto(t, p)).join('\n\t\t\t\t\t')}
					<div class="projetos-menores">
						${outros.map((p) => cartaoProjeto(t, p)).join('\n\t\t\t\t\t\t')}
					</div>
				</div>
			</div>
		</section>

		<section class="secao secao--alt" id="habilidades">
			<div class="container">
				<div class="secao-topo">
					<span class="sobretitulo">${t.habilidades.titulo}</span>
					<h2>${esc(t.habilidades.usoTitulo)}</h2>
					<p>${esc(t.habilidades.intro)}</p>
				</div>
				<div class="grade-3">
					${t.habilidades.grupos.map((g) => `<div class="cartao habilidade">
						<h3>${esc(g.titulo)}</h3>
						<ul>${g.itens.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
					</div>`).join('\n\t\t\t\t\t')}
				</div>
				<div class="estudando">
					<strong>${esc(t.habilidades.estudoTitulo)}:</strong>
					${t.habilidades.estudo.map((e) => `<span class="chip chip--lilas">${esc(e)}</span>`).join(' ')}
				</div>
			</div>
		</section>

		<section class="secao" id="trajetoria">
			<div class="container">
				<div class="secao-topo">
					<span class="sobretitulo">${t.trajetoria.titulo}</span>
					<h2>${t.lang === 'en' ? 'From the sales floor to data' : 'Do balcão aos dados'}</h2>
					<p>${esc(t.trajetoria.intro)}</p>
				</div>
				<div class="trajetoria">
					<ol class="linha-tempo">
						${t.trajetoria.experiencias.map((x) => `<li>
							<h3>${esc(x.cargo)}</h3>
							<div class="meta"><strong>${esc(x.empresa)}</strong> · ${esc(x.local)} · ${esc(x.periodo)}</div>
							<ul>${x.itens.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
						</li>`).join('\n\t\t\t\t\t\t')}
					</ol>
					<div class="lado">
						<div class="cartao">
							<h3>${esc(t.trajetoria.formacaoTitulo)}</h3>
							<ul class="lista-simples">${t.trajetoria.formacao.map((f) => `<li><strong>${esc(f.curso)}</strong><span>${esc(f.instituicao)} · ${esc(f.periodo)}</span></li>`).join('')}</ul>
						</div>
						<div class="cartao">
							<h3>${esc(t.trajetoria.cursosTitulo)}</h3>
							<ul class="lista-simples">${t.trajetoria.cursos.map((c) => `<li><strong>${esc(c.nome)}</strong><span>${esc(c.origem)} · ${esc(c.ano)}</span></li>`).join('')}</ul>
						</div>
						<div class="cartao">
							<h3>${esc(t.trajetoria.idiomasTitulo)}</h3>
							<ul class="lista-simples">${t.trajetoria.idiomas.map((i) => `<li><span>${esc(i)}</span></li>`).join('')}</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="secao" id="contato">
			<div class="container">
				<div class="cartao contato">
					<h2>${esc(t.contatoSecao.titulo)}</h2>
					<p>${esc(t.contatoSecao.texto)}</p>
					<div class="acoes">
						<a class="botao botao--primario" href="mailto:${contato.email}">${icone('email')}${t.contatoSecao.email}</a>
						<a class="botao botao--contorno" href="${contato.linkedin}" target="_blank" rel="noopener">${icone('linkedin')}LinkedIn</a>
						<a class="botao botao--contorno" href="${whats}" target="_blank" rel="noopener">${icone('whatsapp')}${t.contatoSecao.whatsapp}</a>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer class="rodape">
		<div class="container">${esc(t.rodape)} · <a href="${contato.github}/portifolio" target="_blank" rel="noopener">GitHub</a></div>
	</footer>

	<script>
		// Menu do celular
		var botao = document.querySelector('.botao-menu');
		var menu = document.getElementById('menu');
		botao.addEventListener('click', function () {
			var aberto = menu.classList.toggle('aberto');
			botao.setAttribute('aria-expanded', aberto);
		});
		menu.addEventListener('click', function (e) {
			if (e.target.closest('a')) { menu.classList.remove('aberto'); botao.setAttribute('aria-expanded', 'false'); }
		});

		// Destaca no menu a seção que está na tela
		if ('IntersectionObserver' in window) {
			var links = document.querySelectorAll('.menu ul a');
			var observador = new IntersectionObserver(function (entradas) {
				entradas.forEach(function (e) {
					if (!e.isIntersecting) return;
					links.forEach(function (l) { l.setAttribute('aria-current', l.getAttribute('href') === '#' + e.target.id); });
				});
			}, { rootMargin: '-45% 0px -50% 0px' });
			document.querySelectorAll('main section[id]').forEach(function (s) { observador.observe(s); });
		}
	</script>
</body>
</html>
`;
}

function paginaCurriculo(t) {
	const c = t.curriculo;
	const pre = prefixo(t);
	const urlPagina = t.arquivo.curriculo;
	const siteSemProtocolo = (u) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
	return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
	${cabecaComum(t, c.titulo, t.meta.descricao, urlPagina, [['pt-BR', pt.arquivo.curriculo], ['en', en.arquivo.curriculo]])}
	<link rel="stylesheet" href="${pre}assets/curriculo.css">
</head>
<body>
	<div class="barra">
		<div class="barra-acoes">
			<a href="./">${t.lang === 'en' ? '← ' : '← '}${c.voltar}</a>
			<a class="principal" href="${pre}${t.arquivo.pdf}" download>${c.baixar}</a>
			<button type="button" onclick="window.print()">${c.imprimir}</button>
			<a href="${t.outro.curriculo}" hreflang="${t.lang === 'en' ? 'pt-BR' : 'en'}">${t.outro.rotulo}</a>
		</div>
		<p>${esc(c.dica)}</p>
	</div>

	<main class="folha cv">
		<header class="cv">
			<h1>${esc(contato.nome)}</h1>
			<p class="cargo">${esc(t.hero.cargo)}</p>
			<p class="contatos">
				<span>${esc(contato.cidade)}${t.lang === 'en' ? ', Brazil' : ''}</span>
				<span>${esc(t.lang === 'en' ? contato.telefoneIntl : contato.telefone)}</span>
				<span><a href="mailto:${contato.email}">${contato.email}</a></span>
				<span><a href="${contato.linkedin}">${siteSemProtocolo(contato.linkedin)}</a></span>
				<span><a href="${contato.github}">${siteSemProtocolo(contato.github)}</a></span>
				<span><a href="${contato.site}${t.lang === 'en' ? 'en/' : ''}">${t.lang === 'en' ? 'Portfolio' : 'Portfólio'}: ${siteSemProtocolo(contato.site)}</a></span>
			</p>
		</header>

		<h2>${esc(c.objetivoTitulo)}</h2>
		<p>${esc(c.objetivo)}</p>

		<h2>${esc(c.resumoTitulo)}</h2>
		<p>${esc(c.resumo)}</p>

		<h2>${esc(c.habilidadesTitulo)}</h2>
		<dl class="habilidades">
			${t.habilidades.grupos.map((g) => `<dt>${esc(g.titulo)}</dt><dd>${g.itens.map(esc).join(', ')}</dd>`).join('\n\t\t\t')}
			<dt>${esc(t.trajetoria.idiomasTitulo)}</dt><dd>${t.trajetoria.idiomas.map(esc).join(', ')}</dd>
		</dl>

		<h2>${esc(c.projetosTitulo)}</h2>
		${c.projetos.map((p) => `<div class="item">
			<div class="item-topo"><strong>${esc(p.titulo)}</strong></div>
			<div class="sub">${esc(p.stack)} · <a href="${p.url}">${siteSemProtocolo(p.url)}</a></div>
			<ul>${p.itens.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
		</div>`).join('\n\t\t')}

		<h2>${esc(c.experienciaTitulo)}</h2>
		${t.trajetoria.experiencias.map((x) => `<div class="item">
			<div class="item-topo"><strong>${esc(x.cargo)}</strong><span class="data">${esc(x.periodo)}</span></div>
			<div class="sub">${esc(x.empresa)} · ${esc(x.local)}</div>
			<ul>${x.itens.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
		</div>`).join('\n\t\t')}

		<h2>${esc(t.trajetoria.formacaoTitulo)}</h2>
		${t.trajetoria.formacao.map((f) => `<div class="item">
			<div class="item-topo"><strong>${esc(f.curso)}</strong><span class="data">${esc(f.periodo)}</span></div>
			<div class="sub">${esc(f.instituicao)}</div>
		</div>`).join('\n\t\t')}

		<h2>${esc(t.trajetoria.cursosTitulo)}</h2>
		<ul>
			${t.trajetoria.cursos.map((x) => `<li>${esc(x.nome)}. ${esc(x.origem)}, ${esc(x.ano)}.</li>`).join('\n\t\t\t')}
		</ul>
	</main>
</body>
</html>
`;
}

function escrever(rel, conteudo) {
	const destino = path.join(RAIZ, rel);
	fs.mkdirSync(path.dirname(destino), { recursive: true });
	fs.writeFileSync(destino, conteudo);
	console.log('gerado:', rel);
}

function navegador() {
	const opcoes = [
		'C:/Program Files/Google/Chrome/Application/chrome.exe',
		'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
		'/usr/bin/google-chrome', '/usr/bin/chromium', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	];
	return opcoes.find((o) => fs.existsSync(o));
}

function gerarPdf(t) {
	const exe = navegador();
	if (!exe) { console.log('Chrome/Edge não encontrado: PDFs não gerados.'); return; }
	const entrada = 'file:///' + path.join(RAIZ, t.arquivo.curriculo).replace(/\\/g, '/');
	const saida = path.join(RAIZ, t.arquivo.pdf);
	execFileSync(exe, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--run-all-compositor-stages-before-draw',
		'--virtual-time-budget=8000', `--print-to-pdf=${saida}`, entrada], { stdio: 'ignore' });
	console.log('gerado:', t.arquivo.pdf);
}

for (const t of [pt, en]) {
	escrever(t.arquivo.site, paginaPortfolio(t));
	escrever(t.arquivo.curriculo, paginaCurriculo(t));
}
if (process.argv.includes('--pdf')) [pt, en].forEach(gerarPdf);
