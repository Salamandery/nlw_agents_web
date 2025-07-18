# NLW Agents

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react"/>
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript"/>
  <img src="https://img.shields.io/badge/TailwindCSS-4.1.11-06B6D4?style=for-the-badge&logo=tailwindcss"/>
  <img src="https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite"/>
  <img src="https://img.shields.io/badge/TanStack%20Query-5.83.0-FF4154?style=for-the-badge&logo=react-query"/>
  <img src="https://img.shields.io/badge/React%20Router-7.6.3-CA4245?style=for-the-badge&logo=react-router"/>
  <img src="https://img.shields.io/badge/Zod-4.0.5-3E54A3?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Biome-2.0.6-3B82F6?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Radix%20UI-2.1.7-8B5CF6?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Lucide%20React-0.525.0-00B2FF?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/shadcn/ui-lightgrey?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Class%20Variance%20Authority-0.7.1-8B5CF6?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/React%20Hook%20Form-7.60.0-EC5990?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/@hookform/resolvers-5.1.1-EC5990?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Axios-lightgrey?style=for-the-badge&logo=axios"/>
</p>

<div align="center">
  <b>🇧🇷 Português | <a href="#english-version">🇺🇸 English below</a></b>
</div>

---

## 📑 Sumário | 📑 Table of Contents

- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [📖 About the Project](#-about-the-project)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🚀 Technologies Used](#-technologies-used)
- [🎯 Funcionalidades](#-funcionalidades)
- [🎯 Main Features](#-main-features)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [📁 Project Structure](#-project-structure)
- [🛠️ Setup e Configuração](#️-setup-e-configuração)
- [🛠️ Setup & Configuration](#️-setup--configuration)
- [🎨 Padrões de Projeto](#-padrões-de-projeto)
- [🎨 Project Patterns](#-project-patterns)
- [📝 Licença](#-licença)
- [📝 License](#-license)
- [👨‍💻 Autor](#-autor)
- [👨‍💻 Author](#-author)

---

## 📖 Sobre o Projeto
Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplicação web moderna para criação de salas de perguntas e respostas com IA.

## 📖 About the Project
Project developed during **NLW (Next Level Week)** by Rocketseat, focused on building a modern web app for creating Q&A rooms with AI.

---

## 🚀 Tecnologias Utilizadas | Technologies Used

| **PT-BR** | **EN** |
|-----------|--------|
| **Core** | **Core** |
| React 19 — Biblioteca para construção de interfaces | React 19 — Library for building interfaces |
| TypeScript 5 — Tipagem estática para JavaScript | TypeScript 5 — Static typing for JavaScript |
| Vite 7 — Build tool e dev server | Vite 7 — Build tool and dev server |
| **UI/UX** | **UI/UX** |
| Tailwind CSS 4 — Framework CSS utilitário | Tailwind CSS 4 — Utility-first CSS framework |
| Radix UI — Componentes acessíveis | Radix UI — Accessible components |
| Lucide React — Ícones | Lucide React — Icons |
| Class Variance Authority — Gerenciamento de variantes de componentes | Class Variance Authority — Component variant management |
| shadcn/ui — Biblioteca de componentes | shadcn/ui — Component library |
| **Estado e Roteamento** | **State and Routing** |
| TanStack Query — Gerenciamento de estado e cache | TanStack Query — State and cache management |
| React Router DOM — Roteamento da aplicação | React Router DOM — Application routing |
| **Formulários e Validação** | **Forms and Validation** |
| React Hook Form — Gerenciamento de formulários | React Hook Form — Form management |
| Zod — Validação de schemas | Zod — Schema validation |
| @hookform/resolvers — Integração entre React Hook Form e Zod | @hookform/resolvers — Integration between React Hook Form and Zod |
| **Ferramentas de Desenvolvimento** | **Development Tools** |
| Biome — Linter e formatter | Biome — Linter and formatter |
| Ultracite — Configuração de linting otimizada | Ultracite — Optimized linting configuration |

---

## 🎯 Funcionalidades
- Criação e listagem de salas
- Sistema de perguntas e respostas com IA
- Listagem dinâmica de perguntas
- Gravação e envio de áudio
- Navegação entre salas
- Integração com backend REST
- Validação de formulários
- Interface responsiva

## 🎯 Main Features
- Create and list rooms
- Q&A system with AI
- Dynamic question listing
- Audio recording and upload
- Room navigation
- REST backend integration
- Form validation
- Responsive interface

---

## 📁 Estrutura do Projeto
```
src/
├── components/          # Reusable components
│   ├── ui/             # Base components (shadcn/ui)
│   ├── create-room-form.tsx
│   ├── room-list.tsx
│   ├── question-form.tsx
│   ├── question-item.tsx
│   └── question-list.tsx
├── pages/              # Application pages
│   ├── create-rooms.tsx
│   ├── room.tsx
│   └── record-room-audio.tsx
├── http/               # API communication layer
│   ├── types/          # TypeScript types for API
│   ├── use-create-room.ts
│   ├── use-rooms.ts
│   ├── use-create-question.ts
│   └── use-room-questions.ts
├── lib/                # Utilities and configs
└── main.tsx           # Entry point
```

## 📁 Project Structure
```
src/
├── components/          # Reusable components
│   ├── ui/             # Base components (shadcn/ui)
│   ├── create-room-form.tsx
│   ├── room-list.tsx
│   ├── question-form.tsx
│   ├── question-item.tsx
│   └── question-list.tsx
├── pages/              # Application pages
│   ├── create-rooms.tsx
│   ├── room.tsx
│   └── record-room-audio.tsx
├── http/               # API communication layer
│   ├── types/          # TypeScript types for API
│   ├── use-create-room.ts
│   ├── use-rooms.ts
│   ├── use-create-question.ts
│   └── use-room-questions.ts
├── lib/                # Utilities and configs
└── main.tsx           # Entry point
```

---

## 🛠️ Setup e Configuração
### Pré-requisitos
- Node.js (18+)
- npm ou yarn
- Backend rodando em `http://localhost:3333`

### Instalação
1. Clone o repositório
2. Instale as dependências (`npm install`)
3. Execute o servidor de desenvolvimento (`npm run dev`)
4. Acesse em `http://localhost:5173`

### Scripts Disponíveis
- `npm run dev` - Desenvolvimento
- `npm run build` - Build produção
- `npm run preview` - Preview build

### API Backend
- Base: `http://localhost:3333`
- Endpoints:
  - `GET /rooms` - Listar salas
  - `POST /rooms` - Criar sala
  - `GET /rooms/:roomId/questions` - Listar perguntas da sala
  - `POST /rooms/:roomId/questions` - Criar pergunta na sala
  - `POST /rooms/:roomId/audio` - Enviar áudio para a sala

### Variáveis de Ambiente
- Ajuste URLs nos arquivos de `src/http/` se necessário.

## 🛠️ Setup & Configuration
### Requirements
- Node.js (18+)
- npm or yarn
- Backend running at `http://localhost:3333`

### Installation
1. Clone the repository
2. Install dependencies (`npm install`)
3. Start dev server (`npm run dev`)
4. Access at `http://localhost:5173`

### Available Scripts
- `npm run dev` - Development
- `npm run build` - Production build
- `npm run preview` - Preview build

### Backend API
- Base: `http://localhost:3333`
- Endpoints:
  - `GET /rooms` - List rooms
  - `POST /rooms` - Create room
  - `GET /rooms/:roomId/questions` - List questions in room
  - `POST /rooms/:roomId/questions` - Create question in room
  - `POST /rooms/:roomId/audio` - Send audio to room

### Environment variables
- Adjust URLs in `src/http/` files if needed.

---

## 🎨 Padrões de Projeto
- **Componentes**: Utiliza shadcn/ui para componentes base
- **Arquitetura**: Separação clara entre componentes, páginas e lógica de negócio
- **Formulários**: React Hook Form + Zod para validação robusta
- **Estado**: TanStack Query para cache e sincronização
- **Roteamento**: React Router com parâmetros dinâmicos
- **Estilização**: Tailwind CSS com componentes shadcn/ui
- **Linting**: Biome para formatação e linting de código
- **Tipagem**: TypeScript rigoroso com tipos para API

## 🎨 Project Patterns
- **Components**: Uses shadcn/ui for base components
- **Architecture**: Clear separation between components, pages, and business logic
- **Forms**: React Hook Form + Zod for robust validation
- **State**: TanStack Query for cache and synchronization
- **Routing**: React Router with dynamic parameters
- **Styling**: Tailwind CSS with shadcn/ui components
- **Linting**: Biome for code formatting and linting
- **Typing**: Strict TypeScript with API types

---

## 📝 Licença
Projeto desenvolvido durante o evento NLW da Rocketseat.

## 📝 License
Project developed during Rocketseat's NLW event.

---

## 👨‍💻 Autor | Author

**PT-BR:**

<div align="center">

**Rodolfo M. F. Abreu**  
Desenvolvedor de software apaixonado por tecnologia, aprendizado contínuo e boas práticas de programação. Sempre em busca de novos desafios e oportunidades para colaborar em projetos inovadores.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Sinta-se à vontade para entrar em contato para dúvidas, sugestões ou colaborações!

</div>

**EN:**

<div align="center">

**Rodolfo M. F. Abreu**  
Software developer passionate about technology, continuous learning, and best programming practices. Always looking for new challenges and opportunities to collaborate on innovative projects.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Feel free to get in touch for questions, suggestions, or collaborations!

</div>

---

<div align="center">
  <b>Feito com 💙 para estudos de Electron, Node.js e aplicações desktop multiplataforma.<br/>
  Made with 💙 for Electron, Node.js and cross-platform desktop application studies.</b>
</div>

---

<div align="center" id="english-version">
  <b>🇺🇸 English version above | <a href="#top">🇧🇷 Versão em português acima</a></b>
</div>
