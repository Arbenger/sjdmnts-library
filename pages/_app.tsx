import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "redux/store";
import Theme from "components/layout/Theme";
import ThemeSetter from "components/layout/Theme/ThemeSetter";
import "styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Theme>
        <ThemeSetter>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeSetter>
      </Theme>
    </Provider>
  );
}

export default MyApp;
