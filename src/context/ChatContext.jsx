import * as React from 'react';
import PropTypes from 'prop-types';

const ChatContext = React.createContext({});

export const ChatProvider = ({ children }) => {
	const [messages, setMessages] = React.useState([]);

	const [isChatOpen, setChatOpen] = React.useState(false);

	const openChat = () => setChatOpen(true);

	const closeChat = () => setChatOpen(false);

	React.useEffect(() => {
		setMessages({
			from: 'bot',
			message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			timestamp: new Date(),
		});
	}, []);

	return (
		<ChatContext.Provider
			value={{
				isChatOpen,
				messages,
				closeChat,
				openChat,
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
