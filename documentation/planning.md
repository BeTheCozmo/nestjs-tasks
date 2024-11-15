# Termo de Abertura do Projeto

## Task Manager
API de Gerenciamento de Tarefas com NestJS

### Definir Objetivo do Projeto

**Objetivo Geral:**  
Desenvolver uma API RESTful para gerenciamento de tarefas, que permita o controle de atividades e o gerenciamento de status, com uma arquitetura escalável e seguindo boas práticas do NestJS, evidenciando habilidades com o framework e seus recursos principais.

#### Motivação
A API foi proposta como um projeto-desafio para avaliar habilidades técnicas com o framework NestJS, abrangendo a implementação de funcionalidades fundamentais e o uso de módulos avançados para criar um sistema robusto e funcional.

#### Justificativa
A criação de um sistema de tarefas oferece uma solução comum e prática para explorar e demonstrar diversos recursos do NestJS, como autenticação com JWT, modularidade, interceptores, guards, e integração com bancos de dados, todos relevantes para sistemas de backend em produção.

#### Situação Atual
No momento, não existe um sistema implementado, apenas a proposta de desenvolvimento e o termo de abertura do projeto. O desafio é concluir a API em uma semana, implementando tanto o básico quanto as funcionalidades opcionais e avançadas descritas para enriquecer o escopo do projeto.

---

## Escopo -> Situação Futura & Entregas

### Situação Futura
Ao final do projeto, espera-se ter uma API bem documentada e funcional, que ofereça funcionalidades de autenticação e gerenciamento de tarefas com recursos adicionais como filtros e notificação de status. O sistema estará dividido em módulos, utilizando boas práticas de estrutura de código e documentação.

### Entregas
1. **API RESTful** para Gerenciamento de Tarefas, com rotas para CRUD de tarefas e autenticação de usuários.
2. **Documentação Swagger** detalhando todos os endpoints da API.
3. **Testes unitários e e2e** para verificar a integridade do sistema e garantir a qualidade do código.
4. **Manual de Configuração** para que o projeto seja facilmente replicado em diferentes ambientes.

### Estrutura Analítica do Projeto (EAP)

1. **Iniciação**
   - Elaboração do termo de abertura do projeto
   - Definição dos objetivos, justificativas e motivação

2. **Planejamento**
   - Definição dos requisitos funcionais e não funcionais
   - Planejamento da estrutura da API e das funcionalidades principais
   - Configuração inicial do ambiente e das dependências do NestJS

3. **Desenvolvimento**
   - Criação dos módulos principais (UserModule, TaskModule)
   - Implementação do sistema de autenticação JWT
   - Implementação das rotas CRUD para tarefas
   - Configuração dos interceptors e guards para segurança e controle
   - Implementação de filtros e ordenação de tarefas

4. **Testes**
   - Desenvolvimento de testes unitários e e2e
   - Validação do funcionamento das rotas e da autenticação
   - Correções e melhorias baseadas nos resultados dos testes

5. **Documentação e Encerramento**
   - Configuração do Swagger para documentar os endpoints
   - Entrega final e apresentação dos resultados do projeto

---

### Requisitos (Necessidades Quantificadas)

**Necessidades:**
- Eu preciso de uma API que permita:
  - Autenticação de usuários com JWT
  - Gerenciamento de usuários e tarefas por usuários autenticados
  - Controle e atualização de status de cada tarefa
  - Filtros de tarefas por status, prioridade e data
  - Documentação detalhada dos endpoints para fácil uso