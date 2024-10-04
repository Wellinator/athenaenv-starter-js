declare interface ISocketDomain {}
declare const AF_INET: ISocketDomain;

declare interface ISocketType {}
declare const SOCK_STREAM: ISocketType;
declare const SOCK_DGRAM: ISocketType;
declare const SOCK_RAW: ISocketType;

declare class Socket {
  constructor(domain: ISocketDomain, type: ISocketType);
  connect(host: string, port: number): void;
  bind(host: string, port: number): void;
  listen(): void;
  close(): void;

  /**
   * @description Send data with Buffer
   *  */
  send(data: string): void;

  /**
   * @description Receive data to a buffer
   *  */
  recv(size: number): void;
}
