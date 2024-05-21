import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./component/Layout";
import List from "./views/List";
import { useEffect, useState } from "react";
import { PokeContext, ThemeContext } from "./context/Context";
const App = () => {
  const [pokeSearch, setPokeSearch] = useState<string>("");
  const [pokeTheme, setPokeTheme] = useState<string>("");
  useEffect(() => {
    setPokeTheme(pokeTheme);
  }, [pokeTheme, setPokeTheme]);
  return (
    <div className={pokeTheme ? "theme-" + pokeTheme : "theme"}>
      {/* // <div className={`theme-${pokeTheme}`}> */}
      <Router>
        <PokeContext.Provider value={{ pokeSearch, setPokeSearch }}>
          <ThemeContext.Provider value={{ pokeTheme, setPokeTheme }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/listview"
                element={<Layout childComp={<List />} />}
              />
            </Routes>
          </ThemeContext.Provider>
        </PokeContext.Provider>
      </Router>
    </div>
  );
};

export default App;
