declare class ImageList {
  /**
   * @description Creates a new thread and a queue to load images in background, avoid building multiple ImageList objects.
   */
  constructor();

  /**
   * @description This method starts the thread and loads added images on the queue.
   */
  process: () => void;
}
