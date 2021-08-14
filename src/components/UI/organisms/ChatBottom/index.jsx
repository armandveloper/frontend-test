import * as React from 'react';
import { MdFace, MdSend } from 'react-icons/md';
import Picker from 'emoji-picker-react';
import styles from './ChatBottom.module.css';
import Textarea from 'components/UI/atoms/Textarea';
import { useChatContext } from 'context/ChatContext';

function ChatBottom() {
	const [message, setMessage] = React.useState('');

	const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);

	const toggleEmojiPicker = () => setShowEmojiPicker(!showEmojiPicker);

	const handleEmojiClick = (_, emojiObject) => {
		setMessage((message) => `${message}${emojiObject.emoji}`);
		setShowEmojiPicker(false);
	};

	const { sendMessage } = useChatContext();

	const handleSendMessage = () => {
		if (message.length < 6) return;
		sendMessage({
			from: 'customer',
			message,
			seen: false,
			timestamp: new Date(),
		});
		// Clear the textarea
		setMessage('');
	};

	return (
		<div className={styles.wrapper}>
			<div>
				<Textarea
					onChange={({ target }) => setMessage(target.value)}
					value={message}
					placeholder="Reply to Chatty Assistant"
				/>
			</div>

			{showEmojiPicker && (
				<Picker
					onEmojiClick={handleEmojiClick}
					pickerStyle={{
						position: 'absolute',
						bottom: 60,
						right: 0,
					}}
				/>
			)}

			<button
				aria-label="Click to open emoji picker"
				className={styles.btn}
				title="Click to open emoji picker"
				type="button"
				onClick={toggleEmojiPicker}
			>
				<MdFace color="gray" size="24" />
			</button>
			<button
				disabled={message.length < 6}
				aria-label="Send message"
				className={styles.btn}
				tite="Send message"
				type="submit"
				onClick={handleSendMessage}
			>
				<MdSend color="var(--primary-hover-color)" size="24" />
			</button>
		</div>
	);
}

export default ChatBottom;
