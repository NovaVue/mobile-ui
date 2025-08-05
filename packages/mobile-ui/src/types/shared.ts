export interface Font {
  /*字号*/
  size:
    | 'mini'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | 'mini1.1'
    | 'sm1.1'
    | 'base1.1'
    | 'lg1.1'
    | 'xl1.1'
    | '2xl1.1'
    | '3xl1.1'
    | '4xl1.1'
    | string
    | number;

  /*字体粗细*/
  weight:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | string
    | number;

  /*颜色*/
  color:
    | 'dark-6'
    | 'dark-5'
    | 'dark-4'
    | 'dark-3'
    | 'dark-2'
    | 'dark-1'
    | 'normal'
    | 'medium'
    | 'light-1'
    | 'light-2'
    | 'light-3'
    | 'light-4'
    | 'light-5'
    | 'light-6'
    | string;
}

export interface TargetBase {
  name: string;
  key: string;
  suffix?: string;
}