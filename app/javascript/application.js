// Entry point for the build script in your package.json
import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./app/app";

const root = createRoot(document.getElementById('root'));
root.render(<App />);
