import { JetBrains_Mono as FontMono, Noto_Sans_SC as FontSans } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['CyrE'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['CyrE'],
  variable: '--font-mono',
});
