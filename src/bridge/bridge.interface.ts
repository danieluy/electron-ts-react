export interface IBridge {
  /**
   * Sample function
   */
  getInfo: () => ({
    userName: string,
    platform: string,
    arch: string,
    version: string,
  });
};
