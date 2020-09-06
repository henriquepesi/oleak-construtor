import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  // border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  height: "auto",
  maxWidth: "100%",
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  maxWidth: "auto",
  height: 150,
};

export default function DragDrop({ message, width, height }) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {!thumbs.length ? (
          <div
            style={{
              // background: "#f2f4f6",
              background: "#e4e4e4",
              width: width,
              height: height,
              cursor: "grab",
              borderRadius: 5,
              marginRight: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            {message}
          </div>
        ) : (
          <div style={thumbsContainer}>{thumbs}</div>
        )}
      </div>
      <aside style={thumbsContainer}></aside>
    </section>
  );
}
