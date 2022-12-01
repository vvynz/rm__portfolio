import React from "react";

export default function EmbededVideo({videoID}) {
  return(
    <div>
      <iframe
      width={853}
      height={480}
      title="Youtube video player"
      frameBorder="0"
      src={`https://www.youtube.com/embed/${videoID}`}
      allowFullScreen
      />
    </div>
  );
}
