import { useChatContext } from 'context/ChatContext';
import Chat from '../Chat';
import ChatBotFab from 'components/UI/molecules/ChatBotFab';

function ChatAsistant() {
	const { isChatOpen, toggleChat } = useChatContext();

	return (
		<div>
			<Chat open={isChatOpen} />
			<ChatBotFab onClick={toggleChat} />
		</div>
	);
}

export default ChatAsistant;
