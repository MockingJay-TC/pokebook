import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
      <Router>
        <ThemeContext.Provider value={{ pokeTheme, setPokeTheme }}>
          <QueryClientProvider client={queryClient}>
            <PokeContext.Provider value={{ pokeSearch, setPokeSearch }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/listview"
                  element={<Layout childComp={<List />} />}
                />
              </Routes>
            </PokeContext.Provider>
          </QueryClientProvider>
        </ThemeContext.Provider>
      </Router>
    </div>
  );
};

export default App;
