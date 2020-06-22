declare namespace OverviewScssNamespace {
  export interface IOverviewScss {
    block: string;
    li: string;
    main: string;
    wrapper: string;
  }
}

declare const OverviewScssModule: OverviewScssNamespace.IOverviewScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: OverviewScssNamespace.IOverviewScss;
};

export = OverviewScssModule;
