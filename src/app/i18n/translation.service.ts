import { Injectable, signal } from '@angular/core';
import en from './en.json';
import de from './de.json';

export type Lang = 'en' | 'de';

const dictionaries: Record<Lang, Record<string, string>> = { en, de };

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly lang = signal<Lang>('en');

  setLang(lang: Lang) {
    this.lang.set(lang);
  }

  /** Translates the given English source text into the current language. */
  translate(text: string): string {
    return dictionaries[this.lang()][text] ?? text;
  }
}
