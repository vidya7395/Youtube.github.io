import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/Store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="h-full">
        <Head></Head>
        <Body></Body>
      </div>
    </Provider>
  );
}

export default App;
