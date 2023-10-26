import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/Store/appStore";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";
import YoutubeChannel from "./components/YoutubeChannel";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search_query",
        element: <SearchPage />,
      },
      {
        path: "/channel",
        element: <YoutubeChannel />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={appStore}>
      <div className="h-full overflow-hidden flex flex-col">
        <RouterProvider router={appRouter}></RouterProvider>
        {/* <Body></Body> */}
      </div>
    </Provider>
  );
}

export default App;
