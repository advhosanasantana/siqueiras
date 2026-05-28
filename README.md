# Siqueira Advocacia

Projeto Vite + Tailwind para GitHub Pages.

## Como usar

- `npm install`
- `npm run dev` — desenvolve localmente
- `npm run build` — gera `dist`
- `npm run preview` — pré-visualiza o build

## Deploy para GitHub Pages

Este projeto gera o site estático com `npm run build` e o workflow em `.github/workflows/pages.yml` publica a pasta `dist` para a branch `gh-pages`.

> O action faz build em `pull_request` e deploy apenas em `push` para `main`.
