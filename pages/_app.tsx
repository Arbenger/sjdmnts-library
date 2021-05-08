import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "redux/store";
import Theme from "components/layout/Theme";
import "styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Theme>
        <CssBaseline />
        <Component {...pageProps} />
      </Theme>
    </Provider>
  );
}

export default MyApp;
