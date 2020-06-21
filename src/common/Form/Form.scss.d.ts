declare namespace FormScssNamespace {
  export interface IFormScss {
    form: string;
    submitBtn: string;
  }
}

declare const FormScssModule: FormScssNamespace.IFormScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FormScssNamespace.IFormScss;
};

export = FormScssModule;
