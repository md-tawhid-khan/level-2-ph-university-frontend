import MainLayout from "./components/layout/mainLayout"
import { ProtectedRoute } from "./components/layout/protectedRoute"




function App() {


  return (<>
  <div>
    <ProtectedRoute>
    <MainLayout/>
    </ProtectedRoute>
    </div>
    </>
  )
}

export default App
