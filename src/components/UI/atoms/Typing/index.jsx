import styles from './Typing.module.css';

function Typing() {
	return (
		<div
			className={styles.loader}
			role="status"
			aria-label="Bot is typing"
		/>
	);
}

export default Typing;
