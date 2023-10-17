import React from "react";
import style from "./SizeMesh.module.scss";
import { createPortal } from "react-dom";

const SizeMesh = ({ setSizeMesh, meshImg }) => {
  return createPortal(
    <>
      <div
        className={style.mesh_wrapper}
        onClick={() => setSizeMesh(false)}
      ></div>
      <img className={style.mesh_image} src={meshImg} alt='' />
    </>,
    document.body
  );
};

export default SizeMesh;
