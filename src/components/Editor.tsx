import { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import { useQueryParams } from "../hooks/useQueryParams";
import { useDispatch } from "react-redux";

import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
import "grapesjs/dist/grapes.min.js";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js";
import "grapesjs-lory-slider/dist/grapesjs-lory-slider.min.js";

const Editor = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [editor, setEditor] = useState<grapesjs.Editor | null>(null);

  const dispatch = useDispatch();
  const setHTML = (component: string | null, html: any) => {
    dispatch({
      type: "SET_HTML",
      payload: { component, html },
    });
  };

  const queryParams = useQueryParams();
  const pageToEdit = queryParams.get("page");

  useEffect(() => {
    const putEditorConfigInEditor = () => {
      const editor = grapesjs.init({
        container: "#gjs",
        plugins: ["grapesjs-lory-slider", "gjs-preset-webpage"],
        storageManager: {
          id: "gjp-",
          type: "local",
          autosave: true,
          autoload: true,
          stepsBeforeSave: 3,
          storeHtml: true,
          storeCss: true,
          storeComponents: true,
          storeStyle: true,
        },
        canvas: {
          styles: [
            "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
          ],
          scripts: ["https://cdn.tailwindcss.com"],
        },
      });
      const pn = editor.Panels;
      const com = editor.Commands;

      //@ts-ignore
      com.add("save", (editor) => {
        setHTML(pageToEdit, editor.getHtml());
      });
      pn.addButton("options", {
        id: "save",
        className: "fa fa-floppy-o",
        command: "save",
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
