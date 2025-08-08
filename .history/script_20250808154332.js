const ideias = {
  frontend: {
    junior: [
      "🖼️ Portfólio pessoal com HTML, CSS e JS puro",
      "📱 Landing page responsiva com animações CSS",
      "🎨 Clone da interface do Spotify com Flexbox/Grid",
      "🧩 Quiz interativo com JavaScript e feedback visual",
      "🌙 Tema claro/escuro com persistência via localStorage"
    ],
    pleno: [
      "📊 Dashboard com gráficos dinâmicos usando Chart.js",
      "🧠 Aplicativo com React e consumo de API pública",
      "🔍 Sistema de busca com filtros e paginação",
      "📦 Gerenciador de tarefas com drag-and-drop",
      "🧭 Navegação SPA com React Router e animações"
    ],
    senior: [
      "🔐 SPA com autenticação OAuth2 e gerenciamento de sessão",
      "🧬 Editor de código online com destaque de sintaxe",
      "📡 PWA com cache offline, notificações push e instalação",
      "🧠 Visualizador de dados em tempo real com WebSocket",
      "🧪 Testes automatizados com Cypress e integração contínua"
    ]
  },
  backend: {
    junior: [
      "🔧 API REST com Node.js e Express",
      "📁 CRUD simples com SQLite e validação básica",
      "🔐 Sistema de login com hash de senha (bcrypt)",
      "📦 Gerador de senhas seguras via terminal",
      "📊 API de clima que consome dados externos"
    ],
    pleno: [
      "🛡️ Autenticação com JWT e refresh token",
      "📚 Sistema de agendamento com PostgreSQL",
      "🧪 API com testes automatizados usando Jest",
      "📈 Monitoramento de logs com Winston e Morgan",
      "🧵 Upload de arquivos com validação e armazenamento local"
    ],
    senior: [
      "⚙️ Microserviços com Docker, Kafka e PostgreSQL",
      "📨 Sistema de filas com RabbitMQ e workers",
      "🧠 API GraphQL com resolvers complexos",
      "🔍 Search engine com ElasticSearch",
      "🧪 Testes de carga com Artillery e métricas com Prometheus"
    ]
  },
  fullstack: {
    junior: [
      "📝 To-do list com React no front e Express no back",
      "📖 Blog com painel admin básico e Markdown",
      "🔐 Sistema de login com validação e sessões",
      "📦 App de receitas com upload de imagens",
      "🧮 Calculadora financeira com histórico"
    ],
    pleno: [
      "🛒 E-commerce com carrinho, login e banco de dados",
      "🎓 Plataforma de cursos com upload de vídeos",
      "📬 Sistema de comentários com moderação",
      "📊 Painel administrativo com gráficos e filtros",
      "📡 Chat em tempo real com WebSocket"
    ],
    senior: [
      "🧠 Plataforma de ensino com pagamentos, vídeos e painel admin",
      "🧬 Sistema de autenticação com 2FA e recuperação de senha",
      "📦 App com CI/CD, testes automatizados e deploy em cloud",
      "🧭 CMS customizado com editor visual e controle de acesso",
      "🧪 Fullstack app com microserviços, cache, e escalabilidade horizontal"
    ]
  }
};

function gerarIdeia() {
  const area = document.getElementById("area").value;
  const nivel = document.getElementById("nivel").value;

  const lista = ideias[area][nivel];
  const ideia = lista[Math.floor(Math.random() * lista.length)];

  document.getElementById("ideia").textContent = `💡 Projeto (${nivel.toUpperCase()} - ${area.toUpperCase()}): ${ideia}`;
}