import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
import "grapesjs/dist/grapes.min.js";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js";
import "grapesjs-blocks-bootstrap4";

const Editor = () => {
  useEffect(() => {
    grapesjs.init({
      container: "#gjs",
      plugins: ["gjs-preset-webpage", "grapesjs-blocks-bootstrap4"],
      canvas: {
        styles: [
          "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css",
        ],
        scripts: [
          "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
          "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js",
        ],
      },
    });
  }, []);

  return (
    <>
      <div id='gjs'></div>
    </>
  );
};

export default Editor;
