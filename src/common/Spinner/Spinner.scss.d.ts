declare namespace SpinnerScssNamespace {
  export interface ISpinnerScss {
    backdrop: string;
    background: string;
    load6: string;
    loader: string;
    round: string;
  }
}

declare const SpinnerScssModule: SpinnerScssNamespace.ISpinnerScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SpinnerScssNamespace.ISpinnerScss;
};

export = SpinnerScssModule;
