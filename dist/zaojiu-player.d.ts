import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

interface BigPlayBtnControl {
  el: HTMLElement;
  render(): void;
  destroy(): void;
}
interface ErrorControl {
  el: HTMLElement;
  render(): void;
  destroy(): void;
}
interface LoadingControl {
  el: HTMLElement;
  render(): void;
  destroy(): void;
}
interface PlayPauseBtnControl {
  el: HTMLElement;
  toggle(): void;
  render(): void;
  destroy(): void;
}
interface ProgressBarControl {
  el: HTMLElement;
  render(): void;
  destroy(): void;
}
interface CurrentTimeControl {
  el: HTMLElement;
  render(): void;
  destroy(): void;
}
interface DurationControl {
  el: HTMLElement;
  render(): void;
  destroy(): void;
}
interface VolumeControl {
  el: HTMLElement;
  render(): void;
  destroy(): void;
}
interface QualityControl {
  el: HTMLElement;
  render(): void;
  destroy(): void;
}
interface FullScreenControl {
  el: HTMLElement;
  fullScreenApi: FullScreenApi;
  toggle(): void;
  render(): void;
  destroy(): void;
}
interface ToolBarControl {
  el: HTMLElement;
  playPauseBtn: PlayPauseBtnControl;
  progressBar: ProgressBarControl;
  volume: VolumeControl;
  quality: QualityControl;
  duration: DurationControl;
  currentTime: CurrentTimeControl;
  fullScreen: FullScreenControl;
  slideUp(): void;
  slideDown(): void;
  render(): void;
  destroy(): void;
}
interface Controls {
  el: HTMLElement;
  bigPlayBtn: BigPlayBtnControl;
  loading: LoadingControl;
  error: ErrorControl;
  toolBar: ToolBarControl;
  render(): void;
  destroy(): void;
}
interface BaseElement {
  el: HTMLElement;
  render(): void;
  destroy(): void;
}
interface VideoElement {
  readonly networkState: NetworkState;
  readonly readyState: ReadyState;
  readonly paused: boolean;
  readonly ended: boolean;
  readonly error: PlayerError;
  readonly duration: number;
  readonly buffered: TimeRanges;
  autoplay: boolean;
  preload: string;
  loop: boolean;
  src: string | MediaSource | SourceOption;
  volume: number;
  currentTime: number;
  seeking: boolean;
  play(): void;
  pause(): void;
  remove(): void;
  canPlayType(minetype: string): string;
  addEventListener(type: string, listener?: any, useCapture?: boolean): void;
  removeEventListener(type: string, listener?: any, useCapture?: boolean): void;
}

interface VideoPlayer {
  el: VideoElement;
  containerEl: HTMLElement;
  currentIndex: number;
  srcArray: (SourceOption | MediaSource)[];
  setSrc(playList: (SourceOption | MediaSource)[][]): void;
  getSrc(): (SourceOption | MediaSource)[];
  switchSrc(index: number): void;
  render(): void;
  destroy(): void;
}

interface Language {
  dict: {
    [key: string]: string;
  };
  use(
    lang: string,
    dict?: {
      [key: string]: string;
    }
  ): void;
  translate(string: string): string;
}
declare enum ReadyState {
  HAVE_NOTHING = 0,
  HAVE_METADATA = 1,
  HAVE_CURRENT_DATA = 2,
  HAVE_FUTURE_DATA = 3,
  HAVE_ENOUGH_DATA = 4,
}
export declare enum NetworkState {
  NETWORK_EMPTY = 0,
  NETWORK_IDLE = 1,
  NETWORK_LOADING = 2,
  NETWORK_NO_SOURCE = 3,
}
declare enum MediaErrorCode {
  MEDIA_ERR_ABORTED = 1,
  MEDIA_ERR_NETWORK = 2,
  MEDIA_ERR_DECODE = 3,
  MEDIA_ERR_SRC_NOT_SUPPORTED = 4,
}
declare enum VideoErrorType {
  EnvError = 1,
  VideoSourceError = 2,
  NetworkError = 3,
  VideoDecodeError = 4,
  LiveFinish = 5,
  CrossDomainError = 6,
  Others = 7,
}

interface FullScreenApi {
  requestFullscreen: () => void;
  exitFullscreen: () => void;
  fullscreenElement: HTMLElement;
  fullscreenEnabled: boolean;
}
export declare enum PlayerEventType {
  SourceChange = "sourcechange",
  RetryPlay = "retryplay",
}
export interface PlayerError {
  code: MediaErrorCode;
}
export interface VideoSourceChangeEventDetail {
  srcArray: (SourceOption | MediaSource)[];
  currentIndex: number;
}
export interface ControlsOption {
  showBigPlay: boolean;
  showPlayPause: boolean;
  showProgressBar: boolean;
  showVolume: boolean;
  showDuration: boolean;
  showFullScreen: boolean;
  showQuality: boolean;
  readonly hasControls: boolean;
  readonly hasToolBarControls: boolean;
}
export interface SourceOption {
  src: string;
  quality: string;
  minetype: string;
}
export interface PlayerEvent {
  type: PlayerEventType | string;
  detail: any;
}
export interface Option {
  element: string | HTMLElement;
  playList: (SourceOption | MediaSource)[][];
  autoplay: boolean;
  preload: string;
  loop: boolean;
  controls: boolean | ControlsOption;
  swf: string;
}

export declare class ZaojiuPlayer {
  constructor(option: Option | any);

  static use(plugin: any): void;

  el: HTMLElement;
  video: VideoPlayer;
  controls: Controls;
  eventSource: Subject<PlayerEvent>;
  event$: Observable<PlayerEvent>;
  option: Option;
  language: Language;
  FlashVideo?: any;
  use(plugin: any): void;
  render(): void;
  destroy(): void;
}

export as namespace ZaojiuPlayer;

export default ZaojiuPlayer;
