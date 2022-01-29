import React from "react";
import { Hearts } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./Loader.module.css";

function Loader() {
  return (
    <Hearts className={s.loader} color="747cac" height={100} width={100} />
  );
}

export default Loader;
