{
  //원하는 것을 뺄수 있다. 빼고 싶은 것만 명시 할 수 있다. 지정하지 않은 것도 가능하다
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  type VideoMetaData = Omit<Video, "url" | "data" | "number">;
  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "byte-data...",
    };
  }
  function getVideoMetaData(id: string): VideoMetaData {
    return {
      id: id,
      title: "title",
    };
  }
}
