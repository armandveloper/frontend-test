import Chat from '.';

export default {
	title: 'Templates/Chat',
	component: Chat,
};

const Template = (args) => <Chat {...args} />;

export const Open = Template.bind({});
Open.args = {
	open: true,
};

export const Close = Template.bind({});
