"use client"
import * as React from 'react';
import '@strudel.cycles/react/dist/style.css';
import { MiniRepl } from '@strudel.cycles/react';
import { evalScope, controls } from '@strudel.cycles/core';
import { samples, initAudioOnFirstClick } from '@strudel.cycles/webaudio';

const StrudelClient: React.FC<{ code: string }> = ({ code }) => {

async function prebake() {
  await samples(
    'https://strudel.tidalcycles.org/tidal-drum-machines.json',
    'github:ritchse/tidal-drum-machines/main/machines/'
  );
  await samples(
    'https://strudel.tidalcycles.org/EmuSP12.json',
    'https://strudel.tidalcycles.org/EmuSP12/'
  );
}

async function init() {
  await evalScope(
    controls,
    import('@strudel.cycles/core'),
    import('@strudel.cycles/mini'),
    import('@strudel.cycles/webaudio'),
    import('@strudel.cycles/tonal')
  );
  await prebake();
  initAudioOnFirstClick();
}


  if (typeof window !== 'undefined') {
    init();
  }
  return <MiniRepl tune={`s("bd sd,hh*4")`} />;
}

export default StrudelClient;
