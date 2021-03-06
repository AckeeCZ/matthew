import { SwitchProps } from 'antd/es/switch';
import SwitchInput from '../Inputs/SwitchInput';
import wrapWithField from '../../HOC/wrapWithField';

const SwitchField = wrapWithField<SwitchProps>(SwitchInput);

export default SwitchField;
