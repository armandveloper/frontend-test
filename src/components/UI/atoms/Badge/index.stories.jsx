import BadgeComponent from '.';

export default {
	title: 'Atoms/Badge',
	component: BadgeComponent,
	args: {
		badgeContent: 10,
	},
};

export const Badge = (args) => <BadgeComponent {...args} />;
