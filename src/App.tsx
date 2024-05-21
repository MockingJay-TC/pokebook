import { MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./component/Layout";
import { PokeContext, ThemeContext } from "./context/Context";
import Home from "./views/Home";
import List from "./views/List";
const App = () => {
  const [pokeSearch, setPokeSearch] = useState<string>("");
  const [pokeTheme, setPokeTheme] = useState<string>("");
  useEffect(() => {
    setPokeTheme(pokeTheme);
  }, [pokeTheme, setPokeTheme]);

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/listview",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "/listview",
          element: <List />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  const queryClient = new QueryClient();
  return (
    <div
      className={
        pokeTheme === "blue"
          ? `theme-blue`
          : pokeTheme === "yellow"
          ? " theme-yellow"
          : "theme"
      }
    >
      <ThemeContext.Provider value={{ pokeTheme, setPokeTheme }}>
        <MantineProvider>
          <QueryClientProvider client={queryClient}>
            <PokeContext.Provider value={{ pokeSearch, setPokeSearch }}>
              <RouterProvider router={router} />
            </PokeContext.Provider>
          </QueryClientProvider>
        </MantineProvider>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
