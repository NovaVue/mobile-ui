import type { Font } from '../../types/shared.ts';

export interface TextProps extends Partial<Font> {
  /* 文本值，可以通过props和default slot传递 */
  value?: string | number;
}

export interface TextSlots {
  /*默认Slot*/
  default(): any;
  /*左侧Slot*/
  prefix(): any;
  /*右侧Slot*/
  suffix(): any;
}
