# Upload Widget Web

Widget de upload de arquivos moderno e animado, construído com React. Suporta drag-and-drop, compressão de imagens para WebP, acompanhamento de progresso e UI colapsável/minimizada.

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4)

## Features

- **Drag & Drop** — Arraste arquivos diretamente para o widget ou clique para abrir o seletor
- **Compressão de Imagens** — Compressão automática para WebP (dimensões máximas e qualidade configuráveis)
- **Progresso de Upload** — Barra de progresso circular por arquivo e indicador de progresso global
- **Cancelar & Retry** — Cancele uploads em andamento ou tente novamente os que falharam
- **Download de Imagem Comprimida** — Baixe a versão comprimida das imagens enviadas
- **Widget Colapsável** — Animação suave de abrir/fechar com botão minimizado mostrando progresso global
- **Borda Animada** — Animação de gradiente cônico na borda durante uploads em andamento

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — Build tool e dev server
- **Tailwind CSS** — Estilização utility-first
- **Zustand** + **Immer** — Gerenciamento de estado
- **Motion (Framer Motion)** — Animações e transições
- **Radix UI** — Primitivos Collapsible, Progress e Scroll Area
- **Axios** — Cliente HTTP com suporte a progresso de upload
- **react-dropzone** — Input de arquivos com drag-and-drop
- **tailwind-variants** — Variantes de componentes

## Estrutura do Projeto

```
src/
├── app.tsx                          # Componente raiz
├── main.tsx                         # Entry point
├── components/
│   ├── ui/
│   │   ├── button.tsx               # Componente de botão reutilizável
│   │   └── circular-progress-bar.tsx # Indicador de progresso circular SVG
│   ├── upload-widget.tsx            # Widget principal (container colapsável)
│   ├── upload-widget-dropzone.tsx   # Zona de drag & drop
│   ├── upload-widget-header.tsx     # Header do widget
│   ├── upload-widget-minimized-button.tsx # Botão no estado minimizado
│   ├── upload-widget-title.tsx      # Componente de título
│   ├── upload-widget-upload-item.tsx # Item individual de upload
│   └── upload-widget-upload-list.tsx # Lista de uploads com scroll
├── http/
│   └── upload-file-to-storage.ts    # Chamada de API para upload
├── store/
│   └── uploads.ts                   # Store Zustand (estado e ações de uploads)
└── utils/
    ├── compress-image.ts            # Compressão client-side para WebP
    ├── download-url.ts              # Utilitário para disparar downloads
    └── format-bytes.ts              # Helper de formatação de bytes
```

## Getting Started

### Pré-requisitos

- **Node.js** >= 18
- **pnpm**
- Um servidor backend com endpoint `POST /upload` que aceite `multipart/form-data` e retorne `{ url: string }`

### Instalação

```bash
pnpm install
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_BACKEND_URL=http://localhost:3333
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## Tipos de Arquivo Suportados

- JPEG / JPG
- PNG

As imagens são automaticamente comprimidas e convertidas para **WebP** antes do upload.
