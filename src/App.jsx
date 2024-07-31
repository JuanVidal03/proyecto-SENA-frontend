import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './context/AuthProvider.context';
import AllRoutes from "./routes/AllRoutes.jsx";

const App = () => {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </AuthContextProvider>
  )
}
export default App;