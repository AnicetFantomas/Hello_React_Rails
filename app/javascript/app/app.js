import React from "react"
import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import Message from '../feature/message/greeting';


class App () {
    return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Message />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
    )
}

export default App