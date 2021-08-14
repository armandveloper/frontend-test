import * as React from 'react';
import PropTypes from 'prop-types';
import { botReplies } from 'data';
import notificationTone from 'assets/audio/notification.wav';

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

	const getRandomReply = () => {
		const index = window.Math.floor(
			window.Math.random() * (botReplies.length - 0) + 0
		);
		return botReplies[index];
	};

	const [messages, setMessages] = React.useState([]);

	const REPLY_TIMEOUT = 400;

	React.useEffect(() => {
		setMessages([
			{
				from: 'bot',
				message: getRandomReply(),
				seen: false,
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
						message: getRandomReply(),
						seen: isChatOpen, // Assumes that if the chat is open, the user has read the message.
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

	// Mark as seen the latest bot message if the customer has open the chat
	React.useEffect(() => {
		const lastMessage = messages[messages.length - 1];
		if (isChatOpen && lastMessage?.from === 'bot' && !lastMessage?.seen) {
			const updateMessages = (messages) => {
				return messages.map((message, i) =>
					i === messages.length - 1
						? { ...message, seen: true }
						: message
				);
			};
			setMessages(updateMessages);
		}
	}, [isChatOpen, messages]);

	const markAsSeenBotMessages = (messages) =>
		messages.map((message) =>
			message.from === 'bot' && !message.seen
				? { ...message, seen: true }
				: message
		);

	// Mark as seen the bot messages, when the customer open the chat
	React.useEffect(() => {
		if (isChatOpen) {
			setMessages(markAsSeenBotMessages);
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

	// Play notification tone
	const playNotificationTone = () => {
		const sound = new Audio(notificationTone);
		sound.play();
	};

	React.useEffect(() => {
		if (notificationCount > 0) {
			playNotificationTone();
		}
	}, [notificationCount]);

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
