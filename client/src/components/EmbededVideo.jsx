import React from "react";

export default function EmbededVideo({ videoID }) {
  return (
    <div>
      <iframe
        width={640}
        height={360}
        title="Youtube video player"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${videoID}`}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
