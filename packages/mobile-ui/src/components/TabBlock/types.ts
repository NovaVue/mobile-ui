import type { Font, TargetBase } from '../../types/shared.ts';
import type { RiseFallProps } from '../Number/types.ts';
import type { NumberProps } from '../Number/types.ts';
import type { ComponentProps } from '../../types/component.ts';

export type TabBlockProps =
  | TabBlockNormalProps
  | TabBlockGroupProps
  | TabBlockSimpleProps;

export interface TabBlockEmits {
  (e: 'change', event: TabBlockNormalColumn): void;
}

interface BaseProps {
  active?: string | number;
  /*是否显示色彩，默认true*/
  colourful?: boolean;
  data: Record<string, string | number | undefined>;
}

/*Normal*/
export interface TabBlockNormalProps extends BaseProps, ComponentProps {
  variant: 'normal';
  columns: TabBlockNormalColumn[];
}

export interface TabBlockNormalColumn {
  key: number | string;
  main: Main;
  sub: Sub[] | SubObject;
  [key: string]: any;
}

export interface Main
  extends TargetBase,
    Pick<RiseFallProps, 'sign'>,
    Partial<Font> {
  variant?: 'number' | 'percent';
  number?: NumberProps & TargetBase;
}

export type Sub = (NumberProps & RiseFallProps) &
  TargetBase & {
    variant?: 'percent' | 'number';
  };
export interface SubObject extends Font {
  name: string;
  columns: Array<Sub>;
}
/*Group*/
export interface TabBlockGroupProps extends BaseProps {
  variant: 'group';
  key: string | number;
  columns: TabBlockGroupColumn[];
}

export interface TabBlockGroupColumn {
  main: Main[];
  sug: Sub[];
}

/*Simple*/
export interface TabBlockSimpleProps extends BaseProps {
  variant: 'simple';
}

/*props utils*/
export function isNormal(props: TabBlockProps): props is TabBlockNormalProps {
  return props.variant === 'normal';
}

export function isGroup(props: TabBlockProps): props is TabBlockGroupProps {
  return props.variant === 'group';
}

export function isSimple(props: TabBlockProps): props is TabBlockSimpleProps {
  return props.variant === 'simple';
}
