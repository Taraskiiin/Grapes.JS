import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
//@ts-ignore
import thePlugin from  "grapesjs-plugin-call-save";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
import "grapesjs/dist/grapes.min.js";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js";
import "grapesjs-blocks-bootstrap4";
import 'grapesjs-rally-widgets';
import "grapesjs-rally-widgets/dist/grapesjs-rally-widgets.min.css";

const Editor = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [editor, setEditor] = useState<grapesjs.Editor | null>(null);

  useEffect(() => {
    const putEditorConfigInEditor = () => {
      const editor = grapesjs.init({
        container: "#gjs",
        plugins: [
          "grapesjs-blocks-bootstrap4",
          "grapesjs-rally-widgets",
        ],
        canvas: {
          styles: [
            "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css",
            "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
            "https://unpkg.com/grapesjs-rally-widgets/dist/grapesjs-rally-widgets.min.css"
          ],
          scripts: [
            "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
            "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
            "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js",
            "https://cdn.tailwindcss.com",
            "https://unpkg.com/grapesjs-rally-widgets@1.0.4/dist/grapesjs-rally-widgets.min.js",
            "https://unpkg.com/grapesjs-plugin-call-save@0.0.3/dist/grapesjs-plugin-call-save.min.js",
          ],
        },
      });

      return editor;
    };
    setEditor(() => putEditorConfigInEditor());
  }, []);
  return (
    <>
      <div id='gjs'></div>
    </>
  );
};

export default Editor;
