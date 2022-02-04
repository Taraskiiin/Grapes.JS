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
  const setEdit = (component: string | null, html: any, css: any, js: any) => {
    dispatch({
      type: "SET_EDIT",
      payload: { component, html, css, js },
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
      com.add("save", async(editor) => {
        await setEdit(pageToEdit, editor.getHtml(), editor.getCss(), editor.getJs());
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
