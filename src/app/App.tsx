import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/app-router';

function App() {

  return (
    <BrowserRouter>

      <div className="p-4">
        <AppRouter/>
      </div>

    </BrowserRouter>
  )
}

export default App;
