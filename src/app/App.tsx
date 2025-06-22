import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/app-router';
import { Navbar } from '@/widgets';

function App() {
  return (
	<>
		<BrowserRouter>		
			{/* {location.pathname !== 'auth' 
				?
				<div className="flex items-center justify-center">
					<Navbar/>
				</div>
				:
				null
			} */}

			<div className="flex items-center justify-center">
				<Navbar/>
			</div>
			

			<div className="p-4">
				<AppRouter/>
			</div>
		</BrowserRouter>	
	</>    
  )
}

export default App;
