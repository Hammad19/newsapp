import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";

function App() {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const pagesize = 8;
  return (
    <>
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <Navbar></Navbar>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              key="business"
              category="business"
              apiKey={apikey}
              country="us"
              pagesize={pagesize}
            />
          }
        ></Route>
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              key="business"
              category="business"
              apiKey={apikey}
              country="us"
              pagesize={pagesize}
            />
          }
        ></Route>

        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              category="entertainment"
              apiKey={apikey}
              country="us"
              pagesize={pagesize}
            />
          }
        ></Route>
        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={setProgress}
              key="general"
              category="general"
              apiKey={apikey}
              country="us"
              pagesize={pagesize}
            />
          }
        ></Route>
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              key="health"
              category="health"
              apiKey={apikey}
              country="us"
              pagesize={pagesize}
            />
          }
        ></Route>
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              key="science"
              category="science"
              apiKey={apikey}
              country="us"
              pagesize={pagesize}
            />
          }
        ></Route>
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              key="sports"
              category="sports"
              apiKey={apikey}
              country="us"
              pagesize={29}
            />
          }
        ></Route>
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              key="technology"
              category="technology"
              apiKey={apikey}
              country="us"
              pagesize={pagesize}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
