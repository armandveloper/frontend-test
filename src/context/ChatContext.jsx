import * as React from 'react';
import PropTypes from 'prop-types';

const ChatContext = React.createContext({});

export const ChatProvider = ({ children }) => {
	const [notificationCount, setNotificationCount] = React.useState(0);

	const [isChatOpen, setChatOpen] = React.useState(false);

	const openChat = () => setChatOpen(true);

	const closeChat = () => setChatOpen(false);

	const toggleChat = () => setChatOpen(!isChatOpen);

	// Clear notifications when close caht

	React.useEffect(() => {
		if (!isChatOpen) setNotificationCount(0);
	}, [isChatOpen]);

	const [messages, setMessages] = React.useState([]);

	React.useEffect(() => {
		setMessages([
			{
				from: 'bot',
				message:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				timestamp: new Date(),
			},
		]);
		setNotificationCount(1);
	}, []);

	return (
		<ChatContext.Provider
			value={{
				isChatOpen,
				messages,
				notifications: notificationCount,
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
