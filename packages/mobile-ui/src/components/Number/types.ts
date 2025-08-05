import type { Font } from '../../types/shared.ts';

export type NumberProps = { value?: number | string; variant?: 'percent';
  /*variant为rf时默认为true，其他为空字符串 ''*/
  colourful?: string | boolean;
} & (
  | ValueProps
  | RiseFallProps
);

export interface ValueProps extends Partial<Font> {
  value: number | string;
  suffix?: string;
}

export interface RiseFallProps extends Partial<Font> {
  value?: number | string;
  variant?: 'rf';
  /*设置默认值，再value被判定为空时显示，默认值不会显示涨跌颜色*/
  defaultValue?: string;
  /*是否显示色彩，默认true*/
  colourful?: string | boolean;
  /*color属性 优先级会高于 upColor、downColo*/
  /*上涨色值，默认红色*/
  upColor?: string;
  /*下跌色值，默认绿色*/
  downColor?: string;
  /*是否显示涨跌符号*/
  sign?: boolean;
  suffix?: string;
}

export function isNumber(props: any): props is NumberProps {
  return !('variant' in props) || !props?.variant || props.variant === 'number';
}

export function isRiseFall(props: any): props is RiseFallProps {
  return props.variant === 'rf';
}
