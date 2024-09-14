import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './context/AuthProvider.context';
import AllRoutes from "./routes/AllRoutes.jsx";

import { ToastContainer } from "react-toastify";

const App = () => {

  return (
    <AuthContextProvider>
      <ToastContainer stacked closeOnClick/>
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </AuthContextProvider>
  )
}
export default App;