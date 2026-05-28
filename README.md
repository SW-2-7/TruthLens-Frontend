# TruthLens

> AI 기반 이미지 진위 분석 서비스

딥페이크와 이미지 조작이 일상화된 시대, 이미지를 업로드하면 AI가 조작 여부를 분석하고 히트맵과 함께 결과를 시각화해드립니다.

## 서비스 소개

| 단계 | 설명 |
| --- | --- |
| 1. 이미지 업로드 | JPG, PNG 등 이미지 파일을 드래그 앤 드롭 또는 클릭으로 업로드 |
| 2. AI 분석 | 서버에서 딥러닝 모델이 이미지 조작 여부를 분석 |
| 3. 결과 확인 | 조작 가능성 점수, 히트맵 시각화, 진위 판별 결과 제공 |
| 4. 리포트 저장 | 분석 결과를 PDF 파일로 다운로드 |

분석 결과는 점수에 따라 3단계로 분류됩니다.

- **조작 의심** (70점 이상) — 조작 가능성이 높음
- **주의 필요** (40~69점) — 조작 가능성이 있어 주의 필요
- **조작 가능성 낮음** (40점 미만) — 원본일 가능성이 높음

## 기술 스택

| 분류 | 기술 |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Vanilla Extract CSS |
| PDF | jsPDF (Dynamic Import) |
| 배포 | Vercel |

## 프로젝트 구조

```text
src/
├── app/
│   └── (main)/
│       ├── home/          # 랜딩 페이지
│       ├── upload/        # 이미지 업로드
│       └── analysis/      # 분석 결과
├── components/            # 공통 컴포넌트
│   ├── Button, Flex, Text, Modal ...
│   └── icons/
├── hooks/                 # useModal 등 커스텀 훅
├── utils/                 # riskUtils (점수 → 판별 레벨 변환)
└── styles/
```

## 시작하기

```bash
# 패키지 설치
npm install

# 환경변수 설정
cp .env.example .env
# NEXT_PUBLIC_API_URL=http://your-api-server

# 개발 서버 실행
npm run dev
```

## 환경변수

| 변수 | 설명 |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | 이미지 분석 API 서버 주소 |

## 성능 최적화

| 항목 | 개선 내용 |
| --- | --- |
| LCP (홈) | 17.8s → 0.7s (▼96%) — `use client` 제거 및 Server Component 전환 |
| 초기 번들 | ~764KB → ~440KB (▼42%) — jsPDF · FaqAccordion Dynamic Import 적용 |
