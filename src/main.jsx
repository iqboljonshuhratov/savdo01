import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import "swiper/css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./config/mui-theme.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
