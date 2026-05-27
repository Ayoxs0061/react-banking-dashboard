import { useState } from "react";
import routes from "./components/routes";
import { UserContext } from "./components/user";
import { RouterProvider } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  const [menuBtn, setMenuBtn] = useState(false);

  return (
    <DataProvider>
      <UserContext.Provider value={{ menuBtn, setMenuBtn }}>
        <RouterProvider router={routes} />
      </UserContext.Provider>
    </DataProvider>
  );
}

export default App;
