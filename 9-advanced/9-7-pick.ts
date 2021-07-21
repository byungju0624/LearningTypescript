{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "byte-data...",
    };
  }
  function getVideoMetaData(id: string) {
    return {
      id: id,
      title: "title",
    };
  }
}
