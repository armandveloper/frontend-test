import * as React from 'react';
import PropTypes from 'prop-types';

const ChatContext = React.createContext({});

export const ChatProvider = ({ children }) => {
	const [messages, setMessages] = React.useState([]);

	React.useEffect(() => {
		setMessages({
			from: 'bot',
			message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			timestamp: new Date(),
		});
	}, []);

	const [isChatOpen, setChatOpen] = React.useState(false);

	const openChat = () => setChatOpen(true);

	const closeChat = () => setChatOpen(false);

	const toggleChat = () => setChatOpen(!isChatOpen);

	return (
		<ChatContext.Provider
			value={{
				isChatOpen,
				messages,
				closeChat,
				openChat,
				toggleChat,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

ChatContext.propTypes = {
	children: PropTypes.node,
};

export const useChatContext = () => React.useContext(ChatContext);
