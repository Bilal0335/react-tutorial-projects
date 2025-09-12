import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };
  // actual change in theme
  useEffect(() => {
    const html = document.querySelector("html");

    // Purane theme classes hatao
    html.classList.remove("light", "dark");

    // Naya theme add karo
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* ThemeBtn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
