# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplicação web moderna para criação de salas de perguntas e respostas com IA.

## 🚀 Tecnologias Utilizadas

### Core

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server

### UI/UX

- **Tailwind CSS 4** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **Class Variance Authority** - Gerenciamento de variantes de componentes
- **shadcn/ui** - Biblioteca de componentes

### Estado e Roteamento

- **TanStack Query** - Gerenciamento de estado e cache
- **React Router DOM** - Roteamento da aplicação

### Formulários e Validação

- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **@hookform/resolvers** - Integração entre React Hook Form e Zod

### Ferramentas de Desenvolvimento

- **Biome** - Linter e formatter
- **Ultracite** - Configuração de linting otimizada

## 🎯 Funcionalidades

### ✨ Features Principais

- **Criação de Salas** - Interface para criar salas de perguntas
- **Listagem de Salas** - Visualização de todas as salas criadas
- **Sistema de Perguntas** - Formulário para enviar perguntas e receber respostas automáticas da IA
- **Listagem dinâmica de perguntas** - Perguntas e respostas exibidas em tempo real por sala
- **Gravação e envio de áudio** - Grave e envie áudios para a sala, integrando com o backend
- **Navegação entre Salas** - Roteamento dinâmico por ID da sala
- **Integração com Backend** - API REST para persistência de dados
- **Validação de Formulários** - Validação client-side com Zod
- **Interface Responsiva** - Design adaptável para diferentes dispositivos

### 🔄 Estados da Aplicação

- **Gerenciamento de Estado** - TanStack Query para cache e sincronização
- **Mutações Otimistas** - Atualização imediata da UI ao criar perguntas
- **Invalidação de Cache** - Sincronização automática após operações

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── create-room-form.tsx
│   ├── room-list.tsx
│   ├── question-form.tsx
│   ├── question-item.tsx
│   └── question-list.tsx
├── pages/              # Páginas da aplicação
│   ├── create-rooms.tsx
│   ├── room.tsx
│   └── record-room-audio.tsx
├── http/               # Camada de comunicação com API
│   ├── types/          # Tipos TypeScript para API
│   ├── use-create-room.ts
│   ├── use-rooms.ts
│   ├── use-create-question.ts
│   └── use-room-questions.ts
├── lib/                # Utilitários e configurações
└── main.tsx           # Ponto de entrada
```

## 🛠️ Setup e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Backend API rodando em `http://localhost:3333`

### Instalação

1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd nlw-agents
```

2. Instale as dependências

```bash
npm install
```

3. Execute o servidor de desenvolvimento

```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção

## 🔧 Configurações Importantes

### API Backend

- **URL Base**: `http://localhost:3333`
- **Endpoints**:
  - `GET /rooms` - Listar salas
  - `POST /rooms` - Criar sala
  - `GET /rooms/:roomId/questions` - Listar perguntas da sala
  - `POST /rooms/:roomId/questions` - Criar pergunta na sala
  - `POST /rooms/:roomId/audio` - Enviar áudio para a sala

### Variáveis de Ambiente

Certifique-se de que o backend esteja rodando na porta 3333 ou ajuste as URLs nos arquivos:

- `src/http/use-rooms.ts`
- `src/http/use-create-room.ts`
- `src/http/use-room-questions.ts`
- `src/http/use-create-question.ts`

## 🎨 Padrões de Projeto

- **Componentes**: Utiliza shadcn/ui para componentes base
- **Arquitetura**: Separação clara entre componentes, páginas e lógica de negócio
- **Formulários**: React Hook Form + Zod para validação robusta
- **Estado**: TanStack Query para cache e sincronização
- **Roteamento**: React Router com parâmetros dinâmicos
- **Estilização**: Tailwind CSS com componentes shadcn/ui
- **Linting**: Biome para formatação e linting de código
- **Tipagem**: TypeScript rigoroso com tipos para API

## 📝 Licença

Este projeto foi desenvolvido durante o evento NLW da Rocketseat.
**Desenvolvido por:** Rodolfo M. F. Abreu
