import IconField from './IconField.js';
import { maybeParseJson } from '../common/common';

const IconFieldComponent = ({ control }) => {
	const [value, setValue] = useState(maybeParseJson(control.setting.get()));
	const { components, label } = control.params;

	return <IconField />;
};

export default IconFieldComponent;
