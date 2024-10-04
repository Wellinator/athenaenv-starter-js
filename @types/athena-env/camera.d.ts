type CameraType = number;

declare const Camera: {
  position: (x: number, y: number, z: number) => void;
  rotation: (x: number, y: number, z: number) => void;
  target: (x: number, y: number, z: number) => void;
  orbit: (yaw: number, pitch: number) => void;
  turn: (yaw: number, pitch: number) => void;
  dolly: (dist: number) => void;
  zoom: (dist: number) => void;
  pan: (x: number, y: number) => void;
  type: (type: CameraType) => void;
  update: () => void;

  DEFAULT: CameraType;
  LOOKAT: CameraType;
};
