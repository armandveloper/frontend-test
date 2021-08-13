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

	const REPLY_TIMEOUT = 3000;

	React.useEffect(() => {
		setMessages([
			{
				from: 'bot',
				message:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
				timestamp: new Date(),
			},
		]);
	}, []);

	const replyMessage = () => {
		window.setTimeout(() => {
			setMessages((messages) => {
				// Mark as seen the last customer message
				const updatedMessages = messages.map((message, i) =>
					i === messages.length - 1
						? { ...message, seen: true }
						: message
				);
				return [
					...updatedMessages,
					{
						from: 'bot',
						message:
							'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
						timestamp: new Date(),
					},
				];
			});
		}, REPLY_TIMEOUT);
	};

	const sendMessage = (message) => {
		setMessages((messages) => [...messages, { ...message }]);
		replyMessage();
	};

	// Mark as seen the bot messages, when the customer open the chat
	React.useEffect(() => {
		const updateMessages = (messages) =>
			messages.map((message) =>
				message.from === 'bot' && !message.seen
					? { ...message, seen: true }
					: message
			);
		if (isChatOpen) {
			setMessages(updateMessages);
		}
	}, [isChatOpen]);

	// Notify new messages
	React.useEffect(() => {
		if (!isChatOpen) {
			setNotificationCount(
				messages.reduce(
					(acc, current) =>
						current.from === 'bot' && !current.seen
							? acc + 1
							: acc + 0,
					0
				)
			);
		}
	}, [messages, isChatOpen]);

	const [isBotWriting, setBotWriting] = React.useState(true);

	// Update the isBotWriting state
	React.useEffect(() => {
		// Bot will reply, then isBotWriting update to true
		if (messages[messages.length - 1]?.from === 'customer') {
			setBotWriting(true);
		} else {
			// Bot finished its reply, then isBotWriting update to false
			setBotWriting(false);
		}
	}, [messages]);

	return (
		<ChatContext.Provider
			value={{
				isBotWriting,
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
