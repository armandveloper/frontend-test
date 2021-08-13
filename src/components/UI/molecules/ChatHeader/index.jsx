import { MdClose } from 'react-icons/md';
import styles from './ChatHeader.module.css';
import BotAvatar from 'components/UI/atoms/BotAvatar';
import ChatTitle from 'components/UI/atoms/ChatTitle';

function ChatHeader() {
	return (
		<header className={styles.header}>
			<BotAvatar size="sm" />
			<ChatTitle />
			<MdClose
				className={styles.close}
				size="24"
				color="currentColor"
				title="CLose Chat"
				aria-label="Close Chat"
			/>
		</header>
	);
}

export default ChatHeader;
