import { createContext, Dispatch, FC, useState } from "react";

export type ThemeContextProps = {
  isDark: boolean;
  dispatch: Dispatch<boolean>;
};

export const ThemeContext = createContext<ThemeContextProps>({ isDark: false, dispatch: () => { } });

export const ThemeContextProvider: FC = ({
  children,
}) => {
  const [isDark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, dispatch: setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
