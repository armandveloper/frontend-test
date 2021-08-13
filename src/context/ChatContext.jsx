import * as React from 'react';
import PropTypes from 'prop-types';

const ChatContext = React.createContext({});

export const ChatProvider = ({ children }) => {
	const [notificationCount, setNotificationCount] = React.useState(0);

	const [isChatOpen, setChatOpen] = React.useState(false);

	const openChat = () => setChatOpen(true);

	const closeChat = () => setChatOpen(false);

	const toggleChat = () => setChatOpen(!isChatOpen);

	// Clear notifications after chat is open

	React.useEffect(() => {
		if (isChatOpen) setNotificationCount(0);
	}, [isChatOpen]);

	const [messages, setMessages] = React.useState([]);

	const REPLY_TIMEOUT = 400;

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

	const sendMessage = (message) => {
		console.log(message);
		setMessages([...messages, { ...message }]);
	};

	// After customer send a message the bot replies
	React.useEffect(() => {
		if (messages[messages.length - 1]?.from === 'customer') {
			console.log('en effetc');
			const timeout = window.setTimeout(() => {
				// Mark as seen the last customer message
				const updatedMessages = messages.map((message, i) =>
					i === messages.length - 1
						? { ...message, seen: true }
						: message
				);
				setMessages([
					...updatedMessages,
					{
						from: 'bot',
						message:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
						timestamp: new Date(),
					},
				]);
			}, REPLY_TIMEOUT);
			return () => window.clearTimeout(timeout);
		}
	}, [messages]);

	return (
		<ChatContext.Provider
			value={{
				isChatOpen,
				messages,
				notifications: notificationCount,
				closeChat,
				openChat,
				sendMessage,
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
