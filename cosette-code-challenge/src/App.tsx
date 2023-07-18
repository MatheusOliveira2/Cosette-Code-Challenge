import "./App.css";
import Catalogue from "./components/pages/catalogue/Catalogue";
import { defaultTheme } from "./themes/defaultTheme";
import { mockItems } from "./components/pages/catalogue/mock";
import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle></GlobalStyle>
        <Catalogue items={mockItems}></Catalogue>
      </ThemeProvider>
    </>
  );
}

export default App;
