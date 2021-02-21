declare type Bridge = {
  /**
   * Get username and basic system info
   * @returns Info
   */
  getInfo: () => Info;
};

declare type Info = {
  userName: string;
  platform: string;
  arch: string;
  version: string;
};
