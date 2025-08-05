import type { ComponentProps } from '../types/component.ts';

export function getThemeClass(theme: ComponentProps['theme']) {
  return {
    background: [`v-theme-${theme}`],
  };
}
