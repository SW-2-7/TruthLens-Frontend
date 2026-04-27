'use client';

import dynamic from 'next/dynamic';

const AnalysisContent = dynamic(
  () => import('../AnalysisContent/AnalysisContent'),
  {
    ssr: false,
    loading: () => <AnalysisSkeleton />,
  }
);

function SkeletonBox({ width, height, borderRadius = '20px' }: { width: string; height: string; borderRadius?: string }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: '#F0F0F5',
        flexShrink: 0,
      }}
    />
  );
}

function AnalysisSkeleton() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        alignItems: 'center',
        paddingTop: '10rem',
        paddingBottom: '12rem',
        paddingLeft: '8rem',
        paddingRight: '8rem',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', gap: '4.8rem', width: '100%' }}>
        <SkeletonBox width="100%" height="25.6rem" />
        <SkeletonBox width="100%" height="25.6rem" />
      </div>

      <SkeletonBox width="100%" height="60rem" />

      <SkeletonBox width="100%" height="9rem" />

      <div style={{ display: 'flex', gap: '2.7rem', justifyContent: 'center', width: '100%' }}>
        <SkeletonBox width="34.1rem" height="6rem" borderRadius="12px" />
        <SkeletonBox width="34.1rem" height="6rem" borderRadius="12px" />
      </div>
    </div>
  );
}

export default function AnalysisLoader() {
  return <AnalysisContent />;
}
