import "./App.css";
import Catalogue from "./components/pages/catalogue/Catalogue";
import { defaultTheme } from "./themes/defaultTheme";
import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle></GlobalStyle>
        <Catalogue></Catalogue>
      </ThemeProvider>
    </>
  );
}

export default App;
