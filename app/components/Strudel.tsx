import React from 'react';
import dynamic from 'next/dynamic';

const DynamicStrudelClient = dynamic<{ code: string }>(
  () => import('./StrudelClient'),
  { ssr: false }
);

export const Strudel: React.FC<{ code: string }> = ( { code } ) => {
  return <DynamicStrudelClient code={code} />;
};