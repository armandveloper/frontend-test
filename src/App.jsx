import { ChatProvider } from 'context/ChatContext';
import Home from 'components/pages/Home';

function App() {
	return (
		<ChatProvider>
			<Home />
		</ChatProvider>
	);
}

export default App;
