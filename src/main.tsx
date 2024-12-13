import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import { CommonAntdTheme } from "./styles/common.antd.theme";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={CommonAntdTheme}>
    <App />
  </ConfigProvider>
);
