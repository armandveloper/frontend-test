import PropTypes from 'prop-types';

import styles from './Textarea.module.css';

function Textarea({ hint, onChange, placeholder, value }) {
	return (
		<textarea
			aria-label={hint || placeholder}
			className={styles.textarea}
			onChange={onChange}
			placeholder={placeholder}
			value={value}
		/>
	);
}

Textarea.propTypes = {
	hint: PropTypes.string,
	onchange: PropTypes.func,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
};

export default Textarea;
