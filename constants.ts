
import { Member, Proposal, VotesState, Team } from './types';

export const CORE_TEAM_IDS = ['edivaldo', 'cynthia', 'naiara', 'emanuel', 'fabiano', 'gabriel'];

export const MEMBERS: Member[] = [
  { 
    id: 'edivaldo', 
    name: 'Edivaldo Junior', 
    role: 'Tech Lead & Fullstack', 
    photoUrl: 'https://github.com/edivaldojuniordev.png',
    linkedin: 'https://linkedin.com/in/edivaldojuniordev',
    github: 'https://github.com/edivaldojuniordev',
    bio: 'Desenvolvedor focado em arquitetura de software e soluções em nuvem. Lidera a implementação técnica do Portfólio CloudDev.'
  },
  { 
    id: 'cynthia', 
    name: 'Cynthia Borelli', 
    role: 'Product Owner & UX',
    photoUrl: 'https://ui-avatars.com/api/?name=Cynthia+Borelli&background=F97316&color=fff',
    linkedin: '#',
    bio: 'Especialista em visão de produto e experiência do usuário. Garante que as entregas gerem valor real para o cliente.'
  },
  { 
    id: 'naiara', 
    name: 'Naiara Oliveira', 
    role: 'Scrum Master',
    photoUrl: 'https://ui-avatars.com/api/?name=Naiara+Oliveira&background=8B5CF6&color=fff',
    linkedin: '#',
    bio: 'Facilitadora ágil, remove impedimentos e garante que o time siga as cerimônias e boas práticas do Scrum.'
  },
  { 
    id: 'emanuel', 
    name: 'Emanuel Heráclio', 
    role: 'Cloud Architect',
    photoUrl: 'https://ui-avatars.com/api/?name=Emanuel+Heraclio&background=10B981&color=fff',
    linkedin: '#',
    bio: 'Focado em infraestrutura e serviços AWS. Desenha a arquitetura escalável para suportar as aplicações.'
  },
  { 
    id: 'fabiano', 
    name: 'Fabiano Santana', 
    role: 'Backend Developer',
    photoUrl: 'https://ui-avatars.com/api/?name=Fabiano+Santana&background=3B82F6&color=fff',
    linkedin: '#',
    bio: 'Especialista em APIs e banco de dados. Garante a integridade e segurança dos dados no Supabase.'
  },
  { 
    id: 'gabriel', 
    name: 'Gabriel Araujo', 
    role: 'Frontend Developer',
    photoUrl: 'https://ui-avatars.com/api/?name=Gabriel+Araujo&background=EC4899&color=fff',
    linkedin: '#',
    bio: 'Desenvolvedor de interfaces, focado em criar experiências responsivas e animações fluidas.'
  },
  {
    id: 'lucas',
    name: 'Lucas (Visitante)',
    role: 'Stakeholder',
    photoUrl: 'https://ui-avatars.com/api/?name=Lucas+Visitante&background=334155&color=fff',
    bio: 'Avaliador convidado.'
  }
];

export const PROPOSALS: Proposal[] = [
  {
    id: 'ewaste',
    name: 'Proposta 1: E-Waste Tracker',
    link: '',
    descriptions: [
      "Análise: Problema socialmente relevante, mas os stakeholders (pontos de coleta) estão fora do nosso alcance direto.",
      "Análise: O MVP (mapa com pontos de coleta) depende da obtenção de dados externos que talvez não existam. Risco de viabilidade.",
      "Análise: É \"fatiável\", mas as dependências externas podem complicar os Sprints.",
      "Análise: Apresentação boa, com potencial para mapas e gráficos."
    ]
  },
  {
    id: 'profilink',
    name: 'Proposta 2: Profi Link',
    link: '',
    descriptions: [
      "Análise: Problema real, mas de altíssima complexidade (marketplace). A justificativa para um MVP de curso é mais fraca.",
      "Análise: O MVP é muito difícil de definir. Um catálogo sem profissionais ou sem usuários não tem valor. O risco de execução é altíssimo.",
      "Análise: Dificilmente \"fatiável\" de uma forma que entregue valor a cada Sprint.",
      "Análise: A apresentação pode ser confusa se o MVP não for bem-sucedido."
    ]
  },
  {
    id: 'portfolio_aws',
    name: 'Proposta 3: Portfólio na Nuvem (AWS)',
    link: '',
    descriptions: [
      "Problema: Devs iniciantes criam códigos de alto valor, mas têm 'projetos de gaveta' por barreiras de hospedagem. Isso gera portfólios invisíveis para recrutadores.",
      "MVP Claro: Upload de .zip -> Lambda orquestra deploy -> S3 Website Público. O usuário recebe o link em < 1 min.",
      "Planejamento Ágil: Sprint 1 (Infra S3/Lambda), Sprint 2 (Frontend/API Gateway), Sprint 3 (Cognito/Polimento).",
      "Apresentação: Demonstração técnica robusta de AWS (S3, Lambda, DynamoDB) resolvendo uma dor real de empregabilidade."
    ]
  },
  {
    id: 'motos_legacy',
    name: 'Proposta 4: Gestão de Motos (Estudo)',
    link: '',
    descriptions: [
      "Análise: Problema operacional válido, mas o foco é CRUD simples, com menor complexidade de Cloud Architecture.",
      "Análise: MVP viável (aluguel/devolução), mas menos inovador para um portfólio de Engenharia de Nuvem.",
      "Análise: Sprints bem definidas, mas o desafio técnico é menor comparado à orquestração serverless.",
      "Análise: Apresentação funcional, mas com menor 'fator uau' para demonstrar domínio de AWS."
    ]
  }
];

export const TEAMS: Team[] = [
  {
    id: 'team_1',
    teamNumber: 1,
    name: 'Equipe Cloud 1',
    members: [],
    project: { name: 'Aguardando Definição', description: 'Nenhum projeto registrado.', link: '' }
  },
  {
    id: 'team_2',
    teamNumber: 2,
    name: 'Equipe Cloud 2',
    members: [],
    project: { name: 'Aguardando Definição', description: 'Nenhum projeto registrado.', link: '' }
  },
  {
    id: 'team_3',
    teamNumber: 3,
    name: 'Equipe Cloud 3',
    members: ['Edivaldo Junior', 'Cynthia Borelli', 'Naiara Oliveira', 'Emanuel Heráclio', 'Fabiano Santana', 'Gabriel Araujo'],
    project: {
      name: 'Portfólio na Nuvem',
      description: 'Plataforma de publicação automatizada de sites estáticos utilizando arquitetura Serverless na AWS (S3, Lambda, API Gateway).',
      link: ''
    }
  },
  {
    id: 'team_4',
    teamNumber: 4,
    name: 'Equipe Cloud 4',
    members: [],
    project: { name: 'Aguardando Definição', description: 'Nenhum projeto registrado.', link: '' }
  },
  {
    id: 'team_5',
    teamNumber: 5,
    name: 'Equipe Cloud 5',
    members: [],
    project: { name: 'Aguardando Definição', description: 'Nenhum projeto registrado.', link: '' }
  },
  {
    id: 'team_6',
    teamNumber: 6,
    name: 'Equipe Cloud 6',
    members: [],
    project: { name: 'Aguardando Definição', description: 'Nenhum projeto registrado.', link: '' }
  }
];

export const INITIAL_VOTES: VotesState = {};
