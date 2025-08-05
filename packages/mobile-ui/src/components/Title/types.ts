import type { TextProps } from '../Text/types.ts';
type Text = Partial<Pick<TextProps, 'size' | 'weight' | 'color'>>;
export interface TitleProps extends Text {
  title: string;
  suffix?: string;
}
