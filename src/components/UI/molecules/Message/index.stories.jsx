import Message from '.';

export default {
	title: 'Molecules/Message',
	component: Message,
};

const Template = (args) => <Message {...args} />;

export const Bot = Template.bind({});

Bot.args = {
	from: 'bot',
	message: 'Hello, how can i help you?',
	timestamp: new Date(),
};

export const Customer = Template.bind({});

Customer.args = {
	from: 'customer',
	message: 'Hi, I want to...',
	timestamp: new Date(),
};
