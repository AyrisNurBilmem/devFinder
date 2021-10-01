import './App.css';
import Main from './components/Main';
import styled,{ThemeProvider} from "styled-components";
import {Themes} from "./components/styles/Themes"
import { GlobalStyles, lightTheme, darkTheme } from './components/styles/GlobalStyles';
import Toggle from './components/Toggle';


function App() {

  const [theme, toggleTheme] = Themes();
  const themeMode = theme === "dark" ? darkTheme : lightTheme

  return (
    <ThemeProvider theme ={themeMode}>
    <div className="App">
      <GlobalStyles />
      <Toggle theme = {theme} toggleTheme = {toggleTheme}/>
      <Main theme ={theme}/>
    </div>
    </ThemeProvider>
   
  );
}

export default App;
