# Playwright_Parodify

# 🎵 Parodify - Testes Automatizados com Playwright 🎭

## 📌 Sobre o Projeto
O **Parodify** é um projeto de automação de testes para um player de música online, inspirado no Spotify. Utilizando **Playwright** com **TypeScript**, garantimos a validação das principais funcionalidades da aplicação web.

## 🚀 Tecnologias Utilizadas
- [Playwright](https://playwright.dev/) 🎭
- TypeScript ⌨️
- Node.js 🟢
- GitHub Actions (para CI/CD) 🔄

## 🎯 Objetivo do Projeto
O objetivo principal deste projeto é criar um **framework de testes automatizados** para garantir que o player de música do **Parodify** funcione corretamente, validando desde o acesso ao site até a execução das músicas.

## 📚 O que será testado?
### ✅ **Testes Implementados**

1️⃣ **Validar acesso ao portal**
   - Verifica se a URL principal do projeto carrega corretamente.

2️⃣ **Validar identificação do usuário logado**
   - Confirma se o nome do usuário logado é exibido corretamente.

3️⃣ **Validar apresentação da playlist**
   - Verifica se ao menos uma música é carregada na interface.

4️⃣ **Validar tocar música selecionada**
   - Simula o clique no botão de reprodução e verifica se a música começa a tocar.

5️⃣ **Validar busca por música** _(Em desenvolvimento)_
   - Testará se a funcionalidade de busca retorna resultados esperados.

6️⃣ **Validar bloqueio de áudio** _(Em desenvolvimento)_
   - Testará se a aplicação bloqueia corretamente a reprodução de áudio quando necessário.


### ▶️ **Executando os Testes**
Para rodar todos os testes automatizados:
```sh
npx playwright test
```

## 🧑‍💻 Autor do Projeto
**Fernando Papito** - Head de QA, especialista em automação de testes e DevOps.

---