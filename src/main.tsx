/* eslint-disable react-refresh/only-export-components */
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Loader from "@/assets/loader.gif";

const App = lazy(() => import("./App.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="w-full h-screen flex justify-center items-center">
          <img src={Loader} alt="loader gif" width={40} height={40} />
        </div>
      }
    >
      <App />
    </Suspense>
  </StrictMode>
);
