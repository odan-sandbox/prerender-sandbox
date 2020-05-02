declare module "prerender" {
  interface Server {
    start: () => void;
  }
  interface PrerenderOptions {
    port?: number | string;
  }
  function prerender(options?: PrerenderOptions): Server;
  export = prerender;
}
