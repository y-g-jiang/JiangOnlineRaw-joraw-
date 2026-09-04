export interface LibRawOptions {
  bright?: number;
  threshold?: number;
  autoBrightThr?: number;
  adjustMaximumThr?: number;
  expShift?: number;
  expPreser?: number;

  halfSize?: boolean;
  fourColorRgb?: boolean;
  highlight?: number;
  useAutoWb?: boolean;
  useCameraWb?: boolean;
  useCameraMatrix?: number;
  outputColor?: number;
  outputBps?: number;
  outputTiff?: boolean;
  outputFlags?: number;
  userFlip?: number;
  userQual?: number;
  userBlack?: number;
  userCblack?: [number, number, number, number];
  userSat?: number;
  medPasses?: number;
  noAutoBright?: boolean;
  useFujiRotate?: number;
  greenMatching?: boolean;
  dcbIterations?: number;
  dcbEnhanceFl?: boolean;
  fbddNoiserd?: number;
  expCorrec?: boolean;
  noAutoScale?: boolean;
  noInterpolation?: boolean;

  greybox?: [number, number, number, number] | null;
  cropbox?: [number, number, number, number] | null;
  aber?: [number, number, number] | null;
  gamm?: [number, number] | null;
  userMul?: [number, number, number, number] | null;

  outputProfile?: string | null;
  cameraProfile?: string | null;
  badPixels?: string | null;
  darkFrame?: string | null;
}
export interface Metadata {
  aperture: number;
  artist: string;
  camera_make: string;
  camera_model: string;
  desc: string;
  focal_len: number;
  height: number;
  iso_speed: number;
  left_margin: number;
  raw_height: number;
  raw_width: number;
  shot_order: number;
  shutter: number;
  thumb_format: string;
  thumb_height: number;
  thumb_width: number;
  timestamp: string | number | Date;
  top_margin: number;
  width: number;
}

export interface RawImageData {
  bits: number;
  colors: number;
  data: Uint8Array;
  dataSize: number;
  width: number;
  height: number;
}

declare class LibRaw {
  open(data: Uint8Array, options?: LibRawOptions): Promise<void>;
  metadata(fullOutput?: boolean): Promise<unknown>;
  imageData(): Promise<RawImageData>;
}
export default LibRaw;
