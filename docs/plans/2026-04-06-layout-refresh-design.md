# Knowledge Constellation Layout Refresh Design

**Date:** 2026-04-06

## Goal

Quartz 기본 3단 위키 배치를 읽기 중심 레이아웃으로 재구성한다. 좌측 탐색은 얇게 유지하고, 본문은 넓히며, 우측 그래프는 실제로 지식 지도처럼 보일 정도로 넓게 키운다.

## Problem

현재 레이아웃은 Quartz 기본 구성에 가깝다.

- 좌측 탐색, 우측 그래프/TOC/백링크가 모두 강하게 노출된다.
- 본문보다 보조 패널이 먼저 보이기 쉬워 읽기 경험이 약하다.
- 그래프는 배치상 존재는 하지만 크기가 작아 시각적 보조 이상으로 쓰기 어렵다.

## Chosen Direction

승인된 방향은 다음과 같다.

- 좌측은 얇게
- 본문은 넓게
- 우측 그래프는 넓게

구체 배치는 데스크톱 기준 다음을 목표로 한다.

- 좌측 컬럼: 약 220px
- 본문 컬럼: 유동 폭, 읽기 폭 최대 820px 내외
- 우측 컬럼: 약 380px ~ 420px

## Layout Strategy

레이아웃 구조 자체는 Quartz의 `left`, `center`, `right` 3영역을 유지한다. 대신 커스텀 CSS에서 실제 컬럼 폭과 내부 카드의 시각적 계층을 다시 정의한다.

### Left Sidebar

- `PageTitle`, `Search`, `Explorer`만 유지한다.
- 패딩과 카드 밀도를 줄여 보조 네비게이션처럼 보이게 한다.
- 스크롤이 길어져도 본문보다 먼저 시선을 잡아먹지 않도록 대비를 낮춘다.

### Center Content

- 본문 카드는 현 디자인 언어를 유지하되 더 넓은 읽기 폭을 확보한다.
- `ArticleTitle`, `ContentMeta`, `TagList`는 유지한다.
- 본문 내부 여백은 유지하되 전체 콘텐츠 컬럼이 답답하지 않게 조정한다.

### Right Sidebar

- `Graph`를 최상단에 두고 가장 큰 카드로 만든다.
- `TableOfContents`, `Backlinks`는 그래프 아래 보조 정보로 배치한다.
- 그래프 박스 높이를 늘려 실제 탐색 패널처럼 보이게 만든다.

## Responsive Behavior

### Desktop

- 3열 유지
- 좌측은 고정 폭
- 우측은 넓은 고정 폭
- 본문은 나머지 폭을 사용

### Tablet

- 2열 또는 본문 우선 단일 흐름으로 전환
- 우측 패널은 본문 아래로 내린다
- 그래프는 가로 폭을 유지하되 카드 높이만 약간 줄인다

### Mobile

- 본문 우선 단일 흐름
- 좌측 탐색은 Quartz 기본 모바일 탐색 흐름을 유지
- 우측 패널은 본문 하단 블록으로 노출

## Implementation Scope

- `quartz-overrides/quartz.layout.ts`
- `quartz-overrides/quartz/styles/custom.scss`

필요 시 Quartz 기본 CSS 클래스 구조를 전제로 한 오버라이드만 추가한다. 엔진 내부 파일은 수정하지 않는다.

## Validation

- `npm run build`
- 배포 후 GitHub Pages UI 확인

