import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import { Home } from "./routes/Home";
import NotFound from "./routes/NotFound";
import { listComics } from "./api";
import Comic from "./routes/Comic";
import ComicCharacters from "./routes/ComicCharacters";
import Characters from "./routes/Characters";
import Character from "./routes/Character";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
        // 여기만 loader를 써보겠습니다. 나머지는 useQuery로 처리
        loader: async () => {
          return listComics();
        },
      },
      { path: "comics/:comicId", element: <Comic /> },
      { path: "comics/:comicId/characters", element: <ComicCharacters /> },
      { path: "characters", element: <Characters /> },
      { path: "characters/:characterId", element: <Character /> },
    ],
  },
]);

export default router;
