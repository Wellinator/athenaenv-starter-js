interface _Vector3 {
  x: number;
  y: number;
  z: number;
  norm: (x: number, y: number, z: number) => number;
  dot: (x: number, y: number, z: number) => number;
  dist: (x: number, y: number, z: number) => number;
  distsqr: (x: number, y: number, z: number) => number;
  toString: () => string;
}

declare const Vector3: {
  new: (x: number, y: number, z: number) => _Vector3;
  add: (v1: _Vector3, v2: _Vector3) => _Vector3;
  sub: (v1: _Vector3, v2: _Vector3) => _Vector3;
  mul: (v1: _Vector3, v2: _Vector3) => _Vector3;
  div: (v1: _Vector3, v2: _Vector3) => _Vector3;
  cross: (v1: _Vector3, v2: _Vector3) => _Vector3;
};
