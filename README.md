# 사유의 항성도 · Knowledge Constellation Quartz Vault

이 저장소는 **Obsidian으로 로컬 관리할 수 있는 Markdown 볼트**이면서, 동시에 **Quartz 4로 GitHub Pages에 배포되는 디지털 가든**이다.  
목표는 다음 세 가지를 한 번에 만족하는 것이다.

1. **주제별 폴더 + 엔터티별 Markdown 파일**
2. **Obsidian식 위키링크, 백링크, 그래프 뷰**
3. **웹에서는 세련된 위키형 탐색 경험**

## 구조

```text
content/                  # Obsidian에서 그대로 여는 실제 지식 볼트
  00_메타/
  심리학/
  철학/
  경제학/
  AI/
  법행정/
  비트코인/
  종교/
  지정학/
  역사/
  물리학/
  뇌과학/
  SF/
  건강/
  정신/

quartz-overrides/         # Quartz 설정 오버라이드
scripts/                  # 로컬 부트스트랩 / 동기화 / 개발 서버 스크립트
.github/workflows/        # GitHub Pages 배포 워크플로
```

## 로컬에서 Obsidian으로 쓰기

- `content/` 폴더를 Obsidian vault로 열면 된다.
- 위키링크 문법(`[[심리학/칼 융]]`)을 그대로 사용한다.
- Quartz가 백링크와 그래프를 웹에서 생성한다.

## 로컬에서 웹으로 미리 보기

### 준비물
- Node.js 22+
- Git
- 인터넷 연결 1회 이상 필요  
  Quartz 엔진은 처음 실행 시 자동으로 `.quartz-engine/` 아래에 clone된다.

### 명령어

```bash
npm run dev
```

처음 실행 시에는 자동으로 다음이 수행된다.

1. Quartz v4 clone
2. Quartz 의존성 설치
3. 현재 `content/`와 `quartz-overrides/`를 Quartz 엔진으로 동기화
4. 로컬 미리 보기 서버 실행

정적 빌드만 원하면:

```bash
npm run build
```

## GitHub Pages 배포

이 저장소에는 `.github/workflows/deploy.yml` 이 포함되어 있다.  
`main` 브랜치에 push 하면 GitHub Actions가 Quartz를 clone해서 사이트를 빌드한 뒤 GitHub Pages에 배포한다.

### 설정 순서
1. GitHub 저장소에 이 폴더 전체를 push
2. 저장소의 **Settings → Pages**
3. **Source** 를 **GitHub Actions** 로 변경

### 배포 URL
- 유저/조직 페이지 저장소라면  
  `https://<owner>.github.io`
- 프로젝트 저장소라면  
  `https://<owner>.github.io/<repo>`

`baseUrl` 은 `GITHUB_REPOSITORY` 환경변수로 자동 추론된다.  
커스텀 도메인을 쓸 경우, 필요하면 workflow 또는 repository variable로 `QUARTZ_BASE_URL` 을 주면 된다.

## 디자인 조정 포인트

- 전체 설정: `quartz-overrides/quartz.config.ts`
- 레이아웃: `quartz-overrides/quartz.layout.ts`
- 스타일: `quartz-overrides/quartz/styles/custom.scss`

## 문서 작성 원칙

- 폴더 `index.md` 는 허브 문서다.
- 각 엔터티 문서는 **정의 → 문제의식 → 핵심 논지 → 연결성 → 연구 질문 → 대표 텍스트**의 흐름을 가진다.
- 최대한 **교차 링크**를 촘촘히 배치해서 Quartz Graph와 Obsidian Graph가 둘 다 살아나도록 구성했다.

## 추천 후속 작업

- 네가 실제로 더 읽는 책이나 논문을 각 문서의 `대표 텍스트와 후속 읽기` 아래에 누적
- 자주 떠오르는 연결 개념을 별도 노드로 분화  
  예: `의식`, `질서`, `시간`, `제국`, `돈과 신뢰`, `죽음의 해석학`
- 필요하면 `private/` 폴더를 만들어 비공개 초안을 넣고, Quartz의 `ignorePatterns` 또는 필터로 제어
