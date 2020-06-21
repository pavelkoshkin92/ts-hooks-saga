declare namespace InputScssNamespace {
  export interface IInputScss {
    error: string;
    input: string;
    inputField: string;
    label: string;
  }
}

declare const InputScssModule: InputScssNamespace.IInputScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InputScssNamespace.IInputScss;
};

export = InputScssModule;
