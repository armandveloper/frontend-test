import BotAvatar from '.';

export default {
	title: 'Atoms/BotAvatar',
	component: BotAvatar,
};

const Template = (args) => <BotAvatar {...args} />;

export const Small = Template.bind({});

Small.args = {
	size: 'sm',
};

export const Medium = Template.bind({});
