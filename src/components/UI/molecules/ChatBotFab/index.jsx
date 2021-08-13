import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { MdChatBubble } from 'react-icons/md';
import { useChatContext } from 'context/ChatContext';
import styles from './ChatBotFab.module.css';
import Badge from '../../atoms/Badge';

function ChatBotFab({
	hint = 'Click to open chat with Chatty Assistant',
	onClick,
}) {
	const { isChatOpen, notifications } = useChatContext();

	return ReactDOM.createPortal(
		<button
			aria-label={hint}
			className={styles.chatbotFab}
			type="button"
			onClick={onClick}
		>
			<MdChatBubble size="28" color="currentColor" />
			{!isChatOpen && notifications > 0 && (
				<Badge badgeContent={notifications} />
			)}
		</button>,
		window.document.getElementById('chatbot-fab-root')
	);
}

ChatBotFab.propTypes = {
	hint: PropTypes.string,
	onClick: PropTypes.func,
};

export default ChatBotFab;
