import Flex from '@/components/Flex/Flex';
import NoticeCard from './NoticeCard';

const NOTICE_DATA = [
  {
    title: '지원 형식',
    items: [
      '파일 형식 : JPG, JPEG, PNG',
      '최대 크기 : 30MB',
      '권장 해상도 : 가로 1920px × 세로 1080px 이상',
    ],
    footer: '위 기준을 충족하지 않는 경우, 분석 정확도가 떨어질 수 있습니다.',
  },
  {
    title: '정확한 분석을 위한 안내',
    items: [
      '해상도가 높을수록 조작 여부를 더 정밀하게 분석할 수 있습니다.',
      '메신저 전송 등으로 여러 번 압축된 이미지보다는 촬영/저장된 원본 파일을 사용해 주세요.',
      '화면을 캡처한 이미지보다는 원본 이미지 파일을 업로드할 때 결과가 더 정확합니다.',
    ],
  },
  {
    title: '개인정보 및 보안 안내',
    items: [
      '업로드된 이미지는 분석 목적에 한해서만 일시적으로 사용되며, 그 외 용도로 저장/활용되지 않습니다.',
      '이미지는 일정 기간 보관 후 자동 삭제되며, 사용자 동의 없이 제3자에게 제공되지 않습니다.',
      '주민등록번호, 계좌번호, 건강정보 등 민감한 개인정보가 포함된 이미지는 업로드를 피해 주세요.',
    ],
  },
  {
    title: '분석이 어려운 이미지',
    items: [
      '매우 낮은 해상도이거나 지나치게 작은 이미지',
      '심하게 손상되었거나, 노이즈/흔들림이 과도하게 적용된 이미지',
      '배경이 복잡하거나 피사체가 분산된 이미지',
      '텍스트만 포함된 문서/스크린샷 등 순수 텍스트 위주의 이미지',
    ],
  },
];

export default function NoticeSection() {
  return (
    <Flex direction="column" gap="2.4rem">
      {NOTICE_DATA.map((d, i) => (
        <NoticeCard
          key={d.title}
          index={i + 1}
          title={d.title}
          items={d.items}
          footer={d.footer}
        />
      ))}
    </Flex>
  );
}
