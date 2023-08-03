import React from 'react';
import dynamic from 'next/dynamic';

export interface ScoreProps {
  embedParams: {
    width?: number;
    height?: number;
    scoreId: string;
  };
}

const DynamicScoreClient = dynamic<ScoreProps['embedParams']>(
  () => import('./ScoreClient'),
  { ssr: false }
);

export const Score: React.FC<ScoreProps> = ({ embedParams }) => {
  return <DynamicScoreClient {...embedParams} />;
};