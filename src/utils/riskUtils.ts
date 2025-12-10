export type RiskLevel = 'high' | 'medium' | 'low';

export interface RiskMeta {
  level: RiskLevel;
  label: string;       // 조작 의심 / 주의 필요 / 조작 가능성 낮음
  summaryTitle: string; // 카드 상단 작은 타이틀
  description: string; // 큰 카드 본문
  color: string;       // 메인 색상(hex)
  bg: string;          // 카드 배경
  border: string;      // 카드 보더
}

export function getRiskMeta(score: number): RiskMeta {
  if (score >= 70) {
    return {
      level: 'high',
      label: '조작 의심',
      summaryTitle: '조작 가능성',
      description:
        '조작 가능성이 높습니다.',
      color: '#C0261C',
      bg: '#FEF3F2',
      border: '#FACDC9',
    };
  }
  if (score >= 40) {
    return {
      level: 'medium',
      label: '주의 필요',
      summaryTitle: '조작 가능성',
      description: '이 이미지는 조작 가능성이 있어 주의가 필요합니다.',
      color: '#A66908',
      bg: '#FEFBEA',
      border: '#F6E58C',
    };
  }
  return {
    level: 'low',
    label: '조작 가능성 낮음',
    summaryTitle: '조작 가능성',
    description:
      '이 이미지는 조작 가능성이 낮습니다.',
    color: '#2E7D32',
    bg: '#F1FAF3',
    border: '#BFECCB',
  };
}
