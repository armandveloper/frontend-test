import PropTypes from 'prop-types';

import styles from './Textarea.module.css';

function Textarea({ hint, placeholder }) {
	return (
		<textarea
			className={styles.textarea}
			placeholder={placeholder}
			aria-label={hint || placeholder}
		/>
	);
}

Textarea.propTypes = {
	placeholder: PropTypes.string.isRequired,
	hint: PropTypes.string,
};

export default Textarea;
