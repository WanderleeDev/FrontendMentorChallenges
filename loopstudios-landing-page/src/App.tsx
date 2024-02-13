//	Layout
import { BaseLayout } from './layout/BaseLayout';
//	Components
import { Banner } from './components/Banner';
import { Presentation } from './components/Presentation';
import { Gallery } from './components/Gallery';

function App() {
	return (
		<>
			<Banner />
			<BaseLayout>
				<Presentation />
				<Gallery />
			</BaseLayout>
		</>
	);
}

export default App;
