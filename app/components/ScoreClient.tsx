"use client"
import React, { useEffect } from 'react';
import type { ScoreProps } from './Score';

const ScoreClient: React.FC<ScoreProps['embedParams']> = ({
  scoreId,
  width = 800,
  height = 450,
}) => {
  const containerId = `flat-score-${scoreId}`;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://prod.flat-cdn.com/embed-js/v1.5.0/embed.min.js';
    script.onload = () => {
      new (window as any).Flat.Embed(containerId, {
        score: scoreId,
        width: width,
        height: height
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [containerId, height, scoreId, width]);

  return <div id={containerId} className="my-4" />;
};

export default ScoreClient;