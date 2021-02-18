import { Switch } from "@material-ui/core";
import React, { FC, useContext } from "react";
import { ThemeContext } from "./theme-provider";


export const ToggleTheme: FC = () => {

  const { isDark, dispatch } = useContext(ThemeContext);
  return (
    <div>
      테마 변경
      <Switch checked={isDark} onChange={() => dispatch(!isDark)} />
    </div>
  );
};
