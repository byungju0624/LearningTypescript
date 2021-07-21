//재사용성이 좋다.

type Video = {
  title: string;
  author: string;
};

type Optional<T> = {
  [P in keyof T]?: T[P]; // for...in을 쓰는것과 같다
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
type videoOptional = Optional<Video>;
const video: videoOptional = {};
const video: ReadOnly<Video> = {
  title: "hello",
  author: "hi",
};
// type VideoOptional = {
//     title?: string,
//     author?: string;
// }
