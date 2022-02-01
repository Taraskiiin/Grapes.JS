import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import { useQueryParams } from "../hooks/useQueryParams";

import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
import "grapesjs/dist/grapes.min.js";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js";
import "grapesjs-lory-slider/dist/grapesjs-lory-slider.min.js";

const Editor = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [editor, setEditor] = useState<grapesjs.Editor | null>(null);
  const [HTMLfromEditor, setHTMLfromEditor] = useState<string>("");
  const [closeEditor, setCloseEditor] = useState<boolean>(false);
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
            "https://unpkg.com/grapesjs-rally-widgets/dist/grapesjs-rally-widgets.min.css",
          ],
          scripts: ["https://cdn.tailwindcss.com"],
        },
      });
      const pn = editor.Panels;
      const com = editor.Commands;

      //@ts-ignore
      com.add("save", (editor) => {
        const saveAndExit = async() => {
          await setHTMLfromEditor(editor.getHtml());
          setCloseEditor(!closeEditor)
        }
       // eslint-disable-next-line no-restricted-globals
       const res = confirm("A you confirm to save and exit?");
         res ? 
          saveAndExit()
          : setCloseEditor(closeEditor);
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
  console.log(HTMLfromEditor);
  console.log(closeEditor);
  return (
    <>
      <div id='gjs'></div>
    </>
  );
};

export default Editor;
