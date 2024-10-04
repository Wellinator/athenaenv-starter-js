declare interface NetworkConfig {
  ip: string;
  netmask: string;
  gateway: string;
  dns: string;
}

declare const Network: {
  /**
   * @description Initialize network routines in dynamic mode (DHCP).
   */
  init(): void;

  /**
   * @description Initialize network routines in static mode.
   * @example Network.init("192.168.0.10", "255.255.255.0", "192.168.0.1", "192.168.0.1");
   */
  init(ip: string, netmask: string, gateway: string, dns: string): void;

  /**
   * @description Returns the network configuration.
   */
  getConfig: () => NetworkConfig;

  getHostbyName: (host: string) => string;

  /**
   * @description Shutdown network module.
   */
  deinit: () => void;
};
