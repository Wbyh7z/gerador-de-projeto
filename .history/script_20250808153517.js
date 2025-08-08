const ideias = {
  frontend: {
    junior: [
      "Página de portfólio com HTML/CSS/JS",
      "Landing page responsiva com animações",
      "Clone de uma página famosa (Netflix, Spotify)"
    ],
    pleno: [
      "Dashboard com gráficos usando Chart.js",
      "App com React e consumo de API pública",
      "Sistema de temas claro/escuro com localStorage"
    ],
    senior: [
      "SPA com React + Redux + autenticação OAuth",
      "Editor de texto online com funcionalidades avançadas",
      "Aplicativo PWA com cache offline e notificações push"
    ]
  },
  backend: {
    junior: [
      "API REST simples com Node.js e Express",
      "Sistema de cadastro com SQLite",
      "Gerador de senhas seguras via terminal"
    ],
    pleno: [
      "Autenticação com JWT e MongoDB",
      "Sistema de agendamento com Express e PostgreSQL",
      "API com testes automatizados usando Jest"
    ],
    senior: [
      "Microserviços com Docker, Kafka e PostgreSQL",
      "Sistema de filas com RabbitMQ",
      "Serviço de envio de e-mails com logs e monitoramento"
    ]
  },
  fullstack: {
    junior: [
      "To-do list com React no front e Express no back",
      "Blog com painel admin simples",
      "Sistema de login com validação básica"
    ],
    pleno: [
      "E-commerce com carrinho, login e banco de dados",
      "Plataforma de receitas com upload de imagens",
      "Sistema de comentários com moderação"
    ],
    senior: [
      "Plataforma de cursos com vídeos, pagamentos e painel admin",
      "Sistema de chat em tempo real com WebSocket",
      "Aplicativo completo com CI/CD e testes automatizados"
    ]
  }
};

function gerarIdeia() {
  const area = document.getElementById("area").value;
  const nivel = document.getElementById("nivel").value;

  const lista = ideias[area][nivel];
  const ideia = lista[Math.floor(Math.random() * lista.length)];

  document.getElementById("ideia").textContent = `💡 ${ideia}`;
}