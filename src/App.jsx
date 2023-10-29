import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import VideoList from "./components/VideoList/VideoList";
import Upload from "./pages/Upload/Upload";
axios.defaults.baseURL = "https://project-2-api.herokuapp.com/";
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get("/videos?api_key=470d576e-c1d5-4cbb-812a-64aec538f10a")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />

        {videos.length ? (
          <Routes>
            <Route
              path="/"
              element={<Content currentVideo={videos[0]} videos={videos} />}
            />
            <Route path="/videos/:id" element={<Content videos={videos} />} />
            <Route path="/upload-video" element={<Upload />} />
          </Routes>
        ) : (
          <div>Loading...</div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
