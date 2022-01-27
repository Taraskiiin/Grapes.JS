import React, { useEffect } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import 'grapesjs/dist/grapes.min.js';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js';

const Editor = () => {
useEffect(() => {
    grapesjs.init({
      container: "#gjs",
      plugins: ["gjs-preset-webpage", "gjs-blocks-basic" ],
      pluginsOpts: {
        "gjs-blocks-basic": true,
      },
    });
  },[]);

  return (
    <>
     <div id="gjs"></div>
    </>
  );
}

export default Editor;