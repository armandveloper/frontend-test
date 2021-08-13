import * as React from 'react';
import PropTypes from 'prop-types';
import { messages } from 'data';
import styles from './Chat.module.css';
import ChatHeader from 'components/UI/molecules/ChatHeader';
import MessageList from 'components/UI/organisms/MessageList';
import ChatBottom from 'components/UI/organisms/ChatBottom';

function Chat({ open = false }) {
	// State for handle in / out animations
	const [shouldRender, setRender] = React.useState(open);

	React.useEffect(() => {
		if (open) setRender(true);
	}, [open]);

	const handleAnimationEnd = () => {
		if (!open) setRender(false);
	};

	if (!shouldRender) return null;

	return (
		<div
			className={`${styles.wrapper} ${open ? styles.open : styles.close}`}
			onAnimationEnd={handleAnimationEnd}
		>
			<ChatHeader />
			<MessageList messages={messages} />
			<ChatBottom />
		</div>
	);
}

Chat.propTypes = {
	open: PropTypes.bool,
};

export default Chat;
