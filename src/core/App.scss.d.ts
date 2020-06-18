declare namespace AppScssNamespace {
  export interface IAppScss {
    app: string;
    myImg: string;
  }
}

declare const AppScssModule: AppScssNamespace.IAppScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppScssNamespace.IAppScss;
};

export = AppScssModule;
