# Knowledge Expansion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 기존 지식 볼트를 출처 기반의 연구형 네트워크로 확장하고, 브리지 문서와 인접 분야 허브를 추가해 예상 밖 연결점을 많이 드러낸다.

**Architecture:** 기존 폴더 구조는 유지한다. 대신 메타 문서와 허브 문서에서 새 탐색 경로를 노출하고, 개별 문서는 실제 출처와 브리지 링크를 보강한다. 신규 허브는 별도 폴더로 추가하되 기존 문서를 끌어당기는 포털 역할에 집중한다.

**Tech Stack:** Markdown, Quartz 4, Obsidian wikilinks, Node.js build scripts

---

### Task 1: Record the approved expansion strategy

**Files:**
- Create: `docs/plans/2026-04-07-knowledge-expansion-design.md`
- Create: `docs/plans/2026-04-07-knowledge-expansion.md`

**Step 1: Write the design summary**

브리지 중심 확장, 인접 분야 추가, 출처 전략을 문서화한다.

**Step 2: Save the execution plan**

메타 문서, 기존 문서, 신규 문서, 검증 절차를 작업 단위로 남긴다.

### Task 2: Expand the map layer first

**Files:**
- Modify: `content/index.md`
- Modify: `content/00_메타/노드 인벤토리.md`
- Modify: `content/00_메타/핵심 연결축.md`
- Modify: `content/00_메타/연구 질문.md`
- Modify: `content/00_메타/사용자 연구 프로파일.md`

**Step 1: Rewrite the top-level map**

홈 문서와 메타 문서에서 새 허브와 새 브리지 문서를 전면에 배치한다.

**Step 2: Add explicit expansion paths**

기존 축에서 어디로 번져 나갈 수 있는지 단계형 경로를 적는다.

### Task 3: Add bridge notes

**Files:**
- Create: `content/브리지/의식.md`
- Create: `content/브리지/돈과 신뢰.md`
- Create: `content/브리지/죽음의 해석학.md`
- Create: `content/브리지/상징과 제도.md`
- Create: `content/브리지/에이전트와 규율.md`
- Create: `content/브리지/제국의 물류.md`
- Create: `content/브리지/예측과 통치.md`
- Create: `content/브리지/측정과 실재.md`
- Create: `content/브리지/의례와 합의.md`
- Create: `content/브리지/인지적 비용.md`

**Step 1: Create the bridge hub**

브리지 폴더와 허브 문서를 만들고, 연결 논리와 탐색 순서를 설명한다.

**Step 2: Write bridge notes around questions**

개별 주제 요약보다 여러 기존 문서를 묶는 상위 질문을 중심으로 쓴다.

**Step 3: Embed source-backed reading paths**

각 브리지 문서에 원전, 해설, 후속 분야로 가는 링크를 넣는다.

### Task 4: Add adjacent-field hubs and starter notes

**Files:**
- Create: `content/복잡계/index.md`
- Create: `content/사이버네틱스/index.md`
- Create: `content/과학철학/index.md`
- Create: `content/인류학/index.md`
- Create: `content/언어학/index.md`
- Create: `content/정치신학/index.md`
- Create: representative starter notes under each folder

**Step 1: Open six adjacent fields**

각 폴더는 현재 볼트와 접속하는 관문 역할을 한다.

**Step 2: Seed each field with at least one strong entry point**

예: `복잡계/창발`, `사이버네틱스/피드백`, `과학철학/패러다임`, `인류학/의례`, `언어학/은유`, `정치신학/예외상태`

### Task 5: Upgrade existing topic notes

**Files:**
- Modify: existing topic note files across `content/`

**Step 1: Replace placeholder reading lists**

`대표 텍스트와 후속 읽기`를 실제 출처 링크가 있는 섹션으로 바꾼다.

**Step 2: Strengthen conceptual links**

새 브리지 문서와 새 허브로 이어지는 연결을 문서 안에 넣는다.

**Step 3: Keep tone consistent**

기존 문체를 유지하되 더 구체적이고 덜 피상적으로 만든다.

### Task 6: Update hub documents

**Files:**
- Modify: `content/*/index.md`

**Step 1: Add bridge references**

각 허브에서 관련 브리지 문서를 직접 호출한다.

**Step 2: Add adjacent-field exits**

현재 분야에서 어느 인접 분야로 이동할지 경로를 명시한다.

### Task 7: Verify the vault

**Files:**
- Modify: created and updated Markdown files

**Step 1: Run the production build**

Run: `npm run build`
Expected: Quartz build succeeds

**Step 2: Review the diff footprint**

Run: `git diff --stat`
Expected: content and docs/plans changes dominate, no unintended engine edits

**Step 3: Spot-check the new graph logic**

Run: `rg -n "\\[\\[" content`
Expected: newly added bridge and adjacent-field links are present across the vault
