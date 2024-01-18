import './App.css'
import {LoginPage} from "./Pages/LoginPage.tsx";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./Pages/HomePage.tsx";
import {LocalStorageProvider} from "./Context/LocalStorageContext.tsx";
import {PrivateRoute} from "./Components/PrivateRoute.tsx";

function App() {

  return (
      <LocalStorageProvider>

            <div>
                <Routes>
                    <Route path="/"
                      element={
                        <PrivateRoute>
                            <HomePage/>
                        </PrivateRoute>
                        }
                    ></Route>
                    <Route path="/login" element={<LoginPage/>}></Route>
                </Routes>
            </div>

      </LocalStorageProvider>
  )
}

export default App
