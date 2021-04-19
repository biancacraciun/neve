import Repeater from '../../inc/customizer/controls/react/src/repeater/Repeater';
import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from '../components/decorators';

export default {
	title: 'Customizer/Controls/Repeater',
	component: Repeater,
	args: {
		label: 'sdg',
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const RepeaterStories = () => {
	return <Repeater />;
};

export const Template = (args) => <RepeaterStories {...args} />;
export const Default = Template.bind({});
