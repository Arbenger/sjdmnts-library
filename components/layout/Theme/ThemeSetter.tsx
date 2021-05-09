import { FC, Fragment, ReactNode, useCallback, useEffect } from "react";
import { getStoredTheme } from "components/layout/Theme/functions";
import { useAppDispatch } from "redux/hooks";
import { changeTheme } from "redux/themeSlice";

interface Props {
  children: ReactNode;
}

const ThemeSetter: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const getStoredThemeCB = useCallback(getStoredTheme, []);

  useEffect(() => {
    const storedTheme = getStoredThemeCB();
    dispatch(changeTheme(storedTheme));
  }, [getStoredThemeCB]);

  return <Fragment>{children}</Fragment>;
};

export default ThemeSetter;
