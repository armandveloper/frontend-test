import { MdFace, MdSend } from 'react-icons/md';
import styles from './ChatBottom.module.css';
import Textarea from 'components/UI/atoms/Textarea';

function ChatBottom() {
	return (
		<div className={styles.wrapper}>
			<div>
				<Textarea placeholder="Reply to Chatty Assistant" />
			</div>
			<button
				aria-label="Click to open emoji picker"
				className={styles.btn}
				title="Click to open emoji picker"
				type="button"
			>
				<MdFace color="gray" size="24" />
			</button>
			<button
				aria-label="Send message"
				className={styles.btn}
				tite="Send message"
				type="submit"
			>
				<MdSend color="var(--primary-hover-color)" size="24" />
			</button>
		</div>
	);
}

export default ChatBottom;
