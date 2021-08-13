import TextareaComponent from '.';

export default {
	title: 'Atoms/Textarea',
	component: TextareaComponent,
	args: {
		placeholder: 'Reply to Chatty Assistant',
	},
};

export const Textarea = (args) => <TextareaComponent {...args} />;
