declare class Request {
  keepalive: boolean;

  useragent: string;

  userpwd: string;

  headers: Array<string>;

  get(url: string): void;

  head(url: string): void;

  post(url: string, data: any): void;

  download(url: string, fname: string): void;

  asyncGet(url: string): void;

  asyncDownload(url: string, fname: string): void;

  ready(timeout?: number, conn_timeout?: number): boolean;

  getAsyncData(): any;

  getAsyncSize(): number;
}
