# Layout Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Quartz 기반 사이트를 좌측 얇은 탐색, 넓은 본문, 넓은 우측 그래프 배치로 재구성한다.

**Architecture:** 엔진 코드는 건드리지 않고 `quartz-overrides`에서 레이아웃 배치와 스타일만 재정의한다. 데스크톱은 3열을 유지하고, 태블릿과 모바일은 본문 우선 흐름으로 축약한다.

**Tech Stack:** Quartz 4, TypeScript layout overrides, SCSS, GitHub Pages

---

### Task 1: Document the approved layout direction

**Files:**
- Create: `docs/plans/2026-04-06-layout-refresh-design.md`
- Create: `docs/plans/2026-04-06-layout-refresh.md`

**Step 1: Write the approved design summary**

승인된 방향과 목표 폭을 문서에 기록한다.

**Step 2: Save the implementation plan**

구현 대상 파일과 검증 명령을 문서화한다.

**Step 3: Commit**

Run: `git add docs/plans && git commit -m "docs: add layout refresh design and plan"`

### Task 2: Rebalance the layout component structure

**Files:**
- Modify: `quartz-overrides/quartz.layout.ts`

**Step 1: Keep the left sidebar minimal**

좌측은 `PageTitle`, `Search`, `Explorer` 위주로 유지하고 불필요한 장식을 넣지 않는다.

**Step 2: Keep the right sidebar graph-first**

우측은 `Graph`, `TableOfContents`, `Backlinks` 순서를 유지해 그래프가 항상 최상단에 오게 한다.

**Step 3: Verify the layout file builds**

Run: `npm run build`
Expected: build succeeds without TypeScript/layout import errors

### Task 3: Override the desktop and responsive grid

**Files:**
- Modify: `quartz-overrides/quartz/styles/custom.scss`

**Step 1: Override the page grid**

데스크톱에서 `220px minmax(0, 1fr) 400px` 수준의 컬럼 폭을 만든다.

**Step 2: Expand the center reading column**

본문 컬럼 최대 폭과 article 폭, 카드 여백을 조정한다.

**Step 3: Enlarge the graph card**

우측 그래프 카드의 높이와 내부 박스 높이를 늘린다.

**Step 4: Tune sidebar density**

좌측 탐색과 우측 보조 카드의 패딩, 간격, sticky 동작을 다시 맞춘다.

**Step 5: Add tablet/mobile fallbacks**

태블릿과 모바일에서 본문 우선 흐름으로 전환되게 한다.

### Task 4: Validate and deploy

**Files:**
- Modify: `quartz-overrides/quartz.layout.ts`
- Modify: `quartz-overrides/quartz/styles/custom.scss`

**Step 1: Run the production build**

Run: `npm run build`
Expected: Quartz build completes successfully

**Step 2: Review git diff**

Run: `git diff -- quartz-overrides/quartz.layout.ts quartz-overrides/quartz/styles/custom.scss docs/plans`
Expected: only the intended layout refresh changes appear

**Step 3: Commit and push**

Run: `git add docs/plans quartz-overrides/quartz.layout.ts quartz-overrides/quartz/styles/custom.scss && git commit -m "feat: refresh quartz layout" && git push`

