# Start Underground — Especificação Técnica

> **Versão:** 1.0  
> **Data:** 22/06/2026  
> **Responsável:** Ivan Martins  
> **Status:** Em desenvolvimento — copy e identidade visual pendentes de ajuste

---

## 1. Visão Geral

Landing page de evento de alto impacto, inspirada na linguagem visual do Nike After Dark Tour 2026. A página comunica **poder, urgência e escala global** por meio de tipografia display extrema, paleta monocromática com acento neon e uma esfera 3D animada via CSS puro.

### Objetivo imediato
Comunicar datas, locais e criar uma fila de interessados (CTA "NOTIFY ME") antes da abertura oficial de ingressos.

### Objetivo de expansão
Servir de base para um site completo de eventos underground com páginas individuais por cidade, line-up, galeria e área de membros.

---

## 2. Stack Tecnológica

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework | Next.js (App Router) | 16.2.9 |
| UI Library | React | 19.2.4 |
| Linguagem | TypeScript | ^5 |
| Estilo | Tailwind CSS v4 | ^4 |
| Fontes | next/font/google | — |
| Linting | ESLint + eslint-config-next | 16.2.9 |
| Runtime | Node.js | ≥ 20 |

### Decisões arquiteturais

- **App Router (RSC-first):** todos os componentes são Server Components por padrão. Apenas `countdown-timer.tsx` usa `"use client"` por necessidade de `setInterval`.
- **Tailwind v4 com `@theme`:** substitui `tailwind.config.js`. Tokens de cor, fonte e animação definidos em `globals.css`, consumidos como utilities (`text-brand`, `font-headline`, `animate-glow-pulse`).
- **`@property` CSS nativo:** permite animar variáveis CSS customizadas (`--globe-x`, `--globe-y`) para criar o efeito de rotação de luz na esfera — sem JavaScript, sem biblioteca de animação.
- **`next/font/google`:** carregamento otimizado com `display: swap` e injeção de variáveis CSS (`--font-bebas`, `--font-inter`) na tag `<html>`.

---

## 3. Design System

### 3.1 Paleta de Cores

| Token | Valor | Utility Tailwind | Uso |
|-------|-------|-----------------|-----|
| `--color-brand` | `#E8001C` | `text-brand`, `bg-brand`, `border-brand` | Cor primária — todo o texto principal e CTAs |
| `--color-neon` | `#7FFF00` | `text-neon`, `bg-neon` | Acento de urgência — countdown, "NEXT RACE" |
| `--color-bg` | `#000000` | `bg-bg` | Background absoluto |
| — | `#FFFFFF` | `text-white` | Labels nos pins do globo |
| — | `rgba(0,0,0,0.9)` | `bg-black/90` | Navbar semi-transparente |

**Lógica cromática:** máximo contraste em 3 camadas. Preto como base absoluta. Vermelho como linguagem da marca. Verde neon exclusivamente para elementos de urgência/tempo (countdown, próxima corrida). Branco apenas onde o fundo colorido (globo) impede legibilidade do vermelho.

### 3.2 Tipografia

| Token | Família | Variável CSS | Utility |
|-------|---------|-------------|---------|
| `--font-headline` | Bebas Neue (Google Fonts) | `--font-bebas` | `font-headline` |
| `--font-sans` | Inter (Google Fonts) | `--font-inter` | `font-sans` |

**Escala de tamanhos (via `clamp()` responsivo):**

| Elemento | `clamp()` | Mobile aprox. | Desktop aprox. |
|----------|-----------|--------------|---------------|
| Títulos principais (H1, H2) | `clamp(3rem, 13.5vw, 9.5rem)` | ~48px | ~152px |
| Nomes das cidades | `clamp(2.5rem, 11.5vw, 8rem)` | ~40px | ~128px |
| Label da barra inferior | `clamp(1.1rem, 3vw, 2.2rem)` | ~18px | ~35px |
| Countdown | `clamp(1.4rem, 3.8vw, 2.8rem)` | ~22px | ~45px |
| Labels dos pins | `clamp(8px, 1.1vw, 12px)` | ~8px | ~12px |
| Labels de distância (sup) | `clamp(0.5rem, 1.1vw, 0.8rem)` | ~8px | ~13px |
| Botões da navbar | `11px` fixo | 11px | 11px |

**Line-height:** `leading-[0.88]` nos títulos para máxima compressão vertical (efeito brutalist).

### 3.3 Animações

| Token | Keyframe | Duração | Uso |
|-------|----------|---------|-----|
| `animate-glow-pulse` | `glow-pulse` | 4s ease-in-out infinite | Pulso do halo de luz da esfera |
| `animate-pin-beat` | `pin-beat` | 2.5s ease-in-out infinite | Respiração dos pins no globo |
| `animate-text-appear` | `text-appear` | 0.7s ease-out both | Entrada das cidades na hero (com stagger) |
| `.globe-sphere` (classe) | `globe-orbit` + `glow-pulse` | 12s + 4s | Movimento de luz na esfera + halo |

**`globe-orbit`** usa `@property` para animar `--globe-x` e `--globe-y` (posição do ponto focal do `radial-gradient`), simulando rotação da fonte de luz sobre a esfera sem Three.js ou WebGL.

---

## 4. Estrutura de Arquivos

```
start-underground/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tokens, @property, keyframes, .globe-sphere
│   │   ├── layout.tsx           # Fontes next/font, metadata, RootLayout
│   │   └── page.tsx             # Composição: Navbar + HeroSection + GlobeSection
│   └── components/
│       ├── navbar.tsx           # Navegação fixa — Server Component
│       ├── hero-section.tsx     # Seção hero tipográfica — Server Component
│       ├── globe-section.tsx    # Esfera + pins + barra inferior — Server Component
│       └── countdown-timer.tsx  # Timer ao vivo — Client Component ("use client")
├── public/                      # Assets estáticos
├── package.json
├── tsconfig.json
├── next.config.ts
└── SPEC.md                      # Este arquivo
```

---

## 5. Componentes

### 5.1 `Navbar`
**Tipo:** Server Component  
**Arquivo:** `src/components/navbar.tsx`

Layout fixo `z-50`, altura `56px`, fundo `bg-black/90 backdrop-blur-sm`.

| Elemento | Descrição |
|----------|-----------|
| `NikeRunLogo` | Badge 42×34px, `bg-brand`, SVG do swoosh + "RUN" |
| Botão MENU | Outline `border-brand`, hover inverte para `bg-brand text-black` |
| Botão NOTIFY ME | `bg-brand text-white`, hover `brightness-90` |

**Pendências:** implementar o drawer/overlay do menu e o formulário de captura de e-mail do "Notify Me".

---

### 5.2 `HeroSection`
**Tipo:** Server Component  
**Arquivo:** `src/components/hero-section.tsx`

Seção `min-h-screen` com scroll natural. Estrutura vertical:

```
[glow orb — absolute, right-[-15%], blur 55px, opacity 0.28]
  H1: AFTER DARK / TOUR ©2026
  UL: cidades (pl-[5vw]) com stagger de 60ms cada
  H2: RACE THE / NIGHT AWAY
```

**Array `CITIES`** (fonte de dados local, tipagem `City`):

```typescript
interface City {
  name:     string  // exibido como texto display
  distance: string  // exibido como superscript (10K, 21K, 13.1…)
  href:     string  // âncora para scroll ou rota futura
}
```

**Interações:** hover em cada cidade aplica `opacity-60` (transição 150ms). Foco visível (`focus-visible:opacity-60`) para acessibilidade.

---

### 5.3 `GlobeSection`
**Tipo:** Server Component  
**Arquivo:** `src/components/globe-section.tsx`

Seção `h-screen` (viewport exato). Esfera CSS centralizada + barra inferior absoluta.

**Esfera (`div.globe-sphere`):**
- `width/height: clamp(280px, 88vw, 700px)` — círculo responsivo
- Classe `.globe-sphere` no CSS global: `radial-gradient` animado via `--globe-x` / `--globe-y`
- `box-shadow` animado pelo `glow-pulse` (halo duplo externo + sombra interna para profundidade)
- Sem `overflow: hidden` no wrapper — pins extrapolam a esfera visualmente

**Array `CITY_PINS`** (tipagem `CityPin`):

```typescript
interface CityPin {
  name:      string          // label exibido
  x:         number          // posição horizontal (% do wrapper)
  y:         number          // posição vertical (% do wrapper)
  labelSide: "left" | "right" // lado do label em relação ao ícone
}
```

Posições atuais (coordenadas aproximadas sobre o globo):

| Cidade | x | y | Label |
|--------|---|---|-------|
| SHANGHAI | 68 | 20 | left |
| MUMBAI | 80 | 17 | left |
| MANILA | 12 | 33 | right |
| LOS ANGELES | 36 | 28 | right |
| MEXICO CITY | 44 | 41 | right |
| LONDON | 62 | 13 | left |
| SYDNEY | 30 | 74 | right |

**Barra inferior:**
- `absolute bottom-0`, `flex justify-between`, `pb-6 md:pb-10`
- Esquerda: label "AFTER DARK / TOUR ©2026" (`font-headline text-brand`)
- Direita: "NEXT RACE" (neon) + cidade (brand) + `<CountdownTimer />`

**`NEXT_RACE_TIMESTAMP`:** constante definida no topo do arquivo, atualizar a cada nova corrida:
```typescript
const NEXT_RACE_TIMESTAMP = new Date("2026-06-29T23:59:59Z").getTime()
```

---

### 5.4 `CountdownTimer`
**Tipo:** Client Component (`"use client"`)  
**Arquivo:** `src/components/countdown-timer.tsx`

**Props:**
```typescript
interface CountdownTimerProps {
  targetTimestamp: number  // Unix ms (Date.getTime())
}
```

**Estratégia anti-hydration-mismatch:**
- Estado inicial `null` — SSR renderiza `"00:00:00:00"`
- `useEffect` inicializa o valor real e inicia `setInterval(fn, 10)`
- Evita divergência entre servidor (tempo de build) e cliente (tempo do browser)

**Formato exibido:** `HH:MM:SS:CS` (horas:minutos:segundos:centissegundos)  
**Acessibilidade:** `aria-live="polite"` + `aria-label` descritivo em português

---

## 6. CSS Architecture

### Camadas (ordem de aplicação)

```
globals.css
├── @import "tailwindcss"           ← base, components, utilities do Tailwind v4
├── @property (--globe-x, --globe-y) ← habilita animação de custom properties
├── @theme { ... }                   ← tokens: cores, fontes, animações
├── @keyframes (4 definições)        ← glow-pulse, pin-beat, text-appear, globe-orbit
├── .globe-sphere { ... }            ← classe de esfera (não Tailwind, CSS puro)
└── base styles                      ← body, html, scrollbar
```

### Por que `.globe-sphere` é CSS puro e não Tailwind?

A classe usa `background: radial-gradient(circle at var(--globe-x) ...)` onde `--globe-x` é uma `@property` animada. Tailwind não gera utilities para gradientes com variáveis CSS animadas — é necessário CSS nativo para este efeito.

---

## 7. Responsividade

| Breakpoint | Tailwind prefix | Largura |
|-----------|----------------|---------|
| Mobile (base) | — | < 768px |
| Tablet | `md:` | ≥ 768px |
| Desktop | `lg:` | ≥ 1024px |

**Estratégia principal:** `clamp()` para fontes, `vw`-based sizing para esfera e indentação. Evita media queries excessivas para propriedades tipográficas — tudo escala fluidamente.

**Breakpoints explícitos usados:**
- Padding horizontal: `px-3 md:px-6 lg:px-10`
- Indentação da lista de cidades: `pl-[5vw] md:pl-[7vw]`
- Barra inferior: `pb-6 md:pb-10` e `px-4 md:px-8`
- Gaps dos botões: `gap-2 md:gap-3`

---

## 8. Acessibilidade

| Requisito | Implementação |
|-----------|--------------|
| Landmarks semânticos | `<nav>`, `<section aria-label="...">`, `<h1>`, `<h2>` |
| Links/botões com label | `aria-label` em todos os elementos interativos |
| Listas semânticas | `<ul aria-label="Cidades da corrida">` + `<li>` |
| Live region | `aria-live="polite"` no countdown |
| Elementos decorativos | `aria-hidden="true"` no glow orb, esfera, ícones |
| Foco visível | `focus-visible:opacity-60` nas cidades |
| Pins acessíveis | `role="button" tabIndex={0}` em `CityPinMarker` |

---

## 9. Performance

| Técnica | Detalhe |
|---------|---------|
| Zero JS para animações visuais | Globe orbit, glow-pulse e pin-beat são 100% CSS |
| Fonts com `display: swap` | Evita FOIT; texto aparece imediatamente com fallback |
| `next/font` autopreload | Next.js injeta `<link rel="preload">` automaticamente |
| SSR máximo | Apenas 1 Client Component em toda a página |
| `overflow-x: hidden` no body | Evita scroll horizontal acidental |
| `will-change` implícito | CSS engine otimiza `transform` e `opacity` automaticamente |

**Animações usam apenas `transform`, `opacity` e `box-shadow`** — sem reflow de layout (exceção: `box-shadow` pode causar repaint, aceitável dado o impacto visual).

---

## 10. Roadmap de Expansão

### Fase 2 — Funcionalidades core
- [ ] Drawer de menu com lista de corridas e links
- [ ] Formulário de captura de e-mail no "Notify Me" (integração com Mailchimp / ConvertKit)
- [ ] Rota dinâmica `/[city]` para página individual de cada corrida
- [ ] Scroll snap entre seções Hero e Globe

### Fase 3 — Conteúdo
- [ ] Seção de line-up / artistas (para eventos de música)
- [ ] Galeria de edições anteriores
- [ ] Seção de FAQ / como funciona
- [ ] Seção de parceiros e patrocinadores

### Fase 4 — Plataforma
- [ ] Integração com sistema de ingressos (Sympla, Eventbrite ou próprio)
- [ ] Área de membros / early access
- [ ] Internacionalização (i18n) por cidade
- [ ] Analytics com Vercel Analytics ou Plausible

### Adaptação de identidade visual (Start Underground)
Quando a identidade for definida, substituir:

| De (Nike clone) | Para (Start Underground) |
|----------------|-------------------------|
| `--color-brand: #E8001C` | Cor primária da marca |
| `--color-neon: #7FFF00` | Cor de urgência/acento |
| Bebas Neue | Fonte display da marca |
| "AFTER DARK TOUR ©2026" | Nome do evento |
| Lista de cidades | Venues / datas do lineup |
| "RACE THE NIGHT AWAY" | Tagline do evento |
| "NOTIFY ME" | CTA principal |
| Logo Nike Run | Logo do evento |

---

## 11. Como Rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento (localhost:3000)
npm run dev

# Build de produção
npm run build

# Servir build
npm start

# Lint
npm run lint
```

---

## 12. Variáveis de Ambiente

Nenhuma variável de ambiente está em uso no momento.

Para a Fase 2 (formulário de e-mail), será necessário adicionar:

```env
# .env.local
MAILCHIMP_API_KEY=
MAILCHIMP_LIST_ID=
MAILCHIMP_SERVER_PREFIX=
```

> **Regra:** nunca sobrescrever `.env` sem confirmação explícita do responsável técnico.
