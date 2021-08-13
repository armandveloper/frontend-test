import { MdClose } from 'react-icons/md';
import { useChatContext } from 'context/ChatContext';
import styles from './ChatHeader.module.css';
import BotAvatar from 'components/UI/atoms/BotAvatar';
import ChatTitle from 'components/UI/atoms/ChatTitle';

function ChatHeader() {
	const { closeChat } = useChatContext();

	return (
		<header className={styles.header}>
			<BotAvatar size="sm" />
			<ChatTitle />
			<MdClose
				className={styles.close}
				size="24"
				color="currentColor"
				onClick={closeChat}
				title="CLose Chat"
				aria-label="Close Chat"
			/>
		</header>
	);
}

export default ChatHeader;
