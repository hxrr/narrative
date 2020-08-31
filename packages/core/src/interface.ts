export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export type Props = Record<string, any>;

export type Children = any[];

export type H<HResult = any> = (type: any, props: Props, ...children: Children) => HResult;

export interface Fragment {}

export interface HOption {
  Fragment?: Fragment;
  vue2?: boolean;
}

export interface DelegateWithArgs {
  delegate: ElementDelegate | AttributeDelegate;
  args?: any[];
}

export interface DelegateOption<HResult = any, HFragment = Fragment> {
  h?: H<HResult>;
  hOption?: HOption;
  type?: any;
  args?: any;
  prevDelegates?: (DelegateWithArgs | H)[];
}

export interface ElementDelegate<HResult = any, HFragment = Fragment> {
  (props: Props, children: Children, option: DelegateOption<HResult, HFragment>): any;
}

export interface AttributeDelegate<HResult = any, HFragment = Fragment> {
  (props: Props, children: Children, option: DelegateOption<HResult, HFragment>): any;
}

export interface ElementOption {
  alias?: string[];
  [key: string]: any;
}

export interface AttributeOption {
  [key: string]: any;
}

export type JSXNode = JSX.Element | string | number | boolean | null | undefined | Record<any, any>;

export type JSXChild = JSXNode | Array<JSXNode>;

export interface Childrenable {
  children?: JSXChild;
}
