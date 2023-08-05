type Meta = {
    id: string,
    title: string,
    date: string,
    tags: string[],
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>
}

declare module 'flat-embed';
declare module '@strudel.cycles/react';
declare module '@strudel.cycles/core';
declare module '@strudel.cycles/webaudio';
declare module '@strudel.cycles/mini';
declare module '@strudel.cycles/tonal';