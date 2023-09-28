import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PostsProvider, UserProvider } from "./context/UseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </UserProvider>
  </React.StrictMode>
);
