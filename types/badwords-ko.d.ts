declare module 'badwords-ko' {
export default class Filter {
  constructor();
  clean(text: string): string;
  isProfane(text: string): boolean;
  addWords(...words: string[]): void;
  removeWords(...words: string[]): void;
}
}
