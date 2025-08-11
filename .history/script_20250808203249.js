const ideias = {
  frontend: {
    junior: [
       "Página de perfil pessoal",
  "Portfólio pessoal com HTML, CSS e JS puro",
  "Página de receitas",
  "Blog estático",
  "Página de login (sem backend)",
  "Calculadora simples",
  "Relógio digital",
  "Conversor de temperatura",
  "Lista de tarefas (To-do list)",
  "Conversor de moedas (valores fixos)",
  "Clone da página inicial do Google",
  "Página com grid de cards responsivos",
  "Galeria de imagens com modal",
  "Página com animações CSS",
  "Landing page responsiva com animações CSS",
  "Página com dark mode toggle",
  "Página com layout mobile-first",
  "Página com formulário estilizado",
  "Página com barra de navegação fixa",
  "Página com efeito parallax",
  "Jogo da velha",
  "Jogo de memória",
  "Quiz interativo com JavaScript e feedback visual",
  "Simulador de dados de formulário",
  "Validação de formulário",
  "Contador regressivo",
  "Gerador de senhas",
  "Simulador de sorteio",
  "Página com tabs interativas",
  "Página com contador de cliques",
  "Página com Bootstrap",
  "Página com Tailwind CSS",
  "Página com jQuery",
  "Página com Font Awesome",
  "Página com animações GSAP",
  "Página com Chart.js",
  "Página com ícones SVG animados",
  "Página com scroll suave",
  "Página com tooltips",
  "Página com pop-ups",
  "Página com drag and drop",
  "Página com barra de progresso",
  "Página com notificações",
  "Página com tema dinâmico",
  "Tema claro/escuro com persistência via localStorage",
  "Página com menu hamburguer",
  "Página com loading spinner",
  "Página com cards flip",
  "Página com efeito hover",
  "Página com botão que muda cor",
  "Simulador de app de clima (dados fixos)",
  "Simulador de app de notas",
  "Simulador de app de pomodoro",
  "Simulador de app de lista de compras",
  "Simulador de app de hábitos",
  "Simulador de app de calendário",
  "Simulador de app de finanças pessoais",
  "Simulador de app de leitura",
  "Simulador de app de música (sem áudio)",
  "Simulador de app de mensagens (estático)",
  "Modal customizado",
  "Tooltip customizado",
  "Accordion",
  "Tabs",
  "Slider",
  "Dropdown",
  "Menu lateral",
  "Card interativo",
  "Botão animado",
  "Input com máscara",
  "App que mostra piadas (API de piadas)",
  "App que mostra frases motivacionais",
  "App que mostra imagens de gatos",
  "App que mostra dados de Pokémon",
  "App que mostra dados de filmes",
  "App que mostra dados de países",
  "App que mostra dados de usuários",
  "App que mostra dados de livros",
  "App que mostra dados de moedas",
  "App que mostra dados de clima (API aberta)",
  "Projeto com estrutura de pastas organizada",
  "Projeto com README explicativo",
  "Projeto com favicon e manifest",
  "Projeto com semântica HTML",
  "Projeto com acessibilidade básica",
  "Projeto com SEO básico",
  "Projeto com layout flexbox",
  "Projeto com layout grid",
  "Projeto com media queries",
  "Projeto com variáveis CSS",
  "Página com easter egg escondido",
  "Página com tema retrô",
  "Página com tema futurista",
  "Página com tema minimalista",
  "Página com tema cyberpunk",
  "Página com tema natureza",
  "Página com tema espacial",
  "Página com tema de games",
  "Página com tema de filmes",
  "Página com tema de anime"

    ],
    pleno: [
      "Dashboard com gráficos dinâmicos usando Chart.js",
      "Aplicativo com React e consumo de API pública",
      "Sistema de busca com filtros e paginação",
      "Gerenciador de tarefas com drag-and-drop",
      "Navegação SPA com React Router e animações"
    ],
    senior: [
      "SPA com autenticação OAuth2 e gerenciamento de sessão",
      "Editor de código online com destaque de sintaxe",
      "PWA com cache offline, notificações push e instalação",
      "Visualizador de dados em tempo real com WebSocket",
      "Testes automatizados com Cypress e integração contínua"
    ]
  },
  backend: {
    junior: [
      "API REST com Node.js e Express",
      "CRUD simples com SQLite e validação básica",
      "Sistema de login com hash de senha (bcrypt)",
      "Gerador de senhas seguras via terminal",
      "API de clima que consome dados externos"
    ],
    pleno: [
      "Autenticação com JWT e refresh token",
      "Sistema de agendamento com PostgreSQL",
      "API com testes automatizados usando Jest",
      "Monitoramento de logs com Winston e Morgan",
      "Upload de arquivos com validação e armazenamento local"
    ],
    senior: [
      "Microserviços com Docker, Kafka e PostgreSQL",
      "Sistema de filas com RabbitMQ e workers",
      "API GraphQL com resolvers complexos",
      "Search engine com ElasticSearch",
      "Testes de carga com Artillery e métricas com Prometheus"
    ]
  },
  fullstack: {
    junior: [
      "To-do list com React no front e Express no back",
      "Blog com painel admin básico e Markdown",
      "Sistema de login com validação e sessões",
      "App de receitas com upload de imagens",
      "Calculadora financeira com histórico"
    ],
    pleno: [
      "E-commerce com carrinho, login e banco de dados",
      "Plataforma de cursos com upload de vídeos",
      "Sistema de comentários com moderação",
      "Painel administrativo com gráficos e filtros",
      "Chat em tempo real com WebSocket"
    ],
    senior: [
      "Plataforma de ensino com pagamentos, vídeos e painel admin",
      "Sistema de autenticação com 2FA e recuperação de senha",
      "App com CI/CD, testes automatizados e deploy em cloud",
      "CMS customizado com editor visual e controle de acesso",
      "Fullstack app com microserviços, cache, e escalabilidade horizontal"
    ]
  }
};

// Mapeamento de ícones por área
const icones = {
  frontend: "fa-paint-brush",
  backend: "fa-server",
  fullstack: "fa-layer-group"
};

function gerarIdeia() {
  const area = document.getElementById("area").value;
  const nivel = document.getElementById("nivel").value;

  const lista = ideias[area][nivel];
  const ideiaTexto = lista[Math.floor(Math.random() * lista.length)];
  const icone = icones[area];

  const ideiaHTML = `
    <i class="fas ${icone}" style="color:#00bcd4; margin-right:8px;"></i>
    <strong>${nivel.toUpperCase()} - ${area.toUpperCase()}</strong>: ${ideiaTexto}
  `;

  document.getElementById("ideia").innerHTML = ideiaHTML;
}