declare class WebSocket {
  constructor(url: string);

  /**
   * @description Send data with Buffer
   *  */
  send(data: string): void;

  /**
   * @description Receive data to a buffer
   *  */
  recv(size: number): any;
}
