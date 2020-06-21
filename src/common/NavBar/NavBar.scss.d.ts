declare namespace NavBarScssNamespace {
  export interface INavBarScss {
    btn: string;
    nav: string;
  }
}

declare const NavBarScssModule: NavBarScssNamespace.INavBarScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavBarScssNamespace.INavBarScss;
};

export = NavBarScssModule;
