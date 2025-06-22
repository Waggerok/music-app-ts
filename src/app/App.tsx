import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/app-router';
import { Footer, Navbar } from '@/widgets';

function App() {
  return (
	<>
		<BrowserRouter>
			<div className="flex items-center justify-center">
				<Navbar/>
			</div>
			<div className="p-4 pt-16">
				<AppRouter/>
			</div>			
			<Footer/>
		</BrowserRouter>	
	</>    
  )
}

export default App;
