import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastProvide  } from "./contexts/ToastContext";
import TodosProvider from "./contexts/todosContext";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },

  palette: {
    primary: {
      main: "#dd2c00",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
     <TodosProvider>
          <ToastProvide>
            <div className="App" style={{display: "flex" , justifyContent: "center" , alignItems: "center" , background: "#191b1f" , height: "100vh" , direction: "rtl"}}>
                  <TodoList />
            </div>
          </ToastProvide>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
