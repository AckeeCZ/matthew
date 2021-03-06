import { FocusEvent } from 'react';
import Switch from 'antd/es/switch';
import { customMap, createComponent } from 'redux-form-antd';
import { WrappedFieldProps } from 'redux-form';

const switchMap = customMap((mapProps: object, { input: { onChange, onBlur, onFocus, value } }: WrappedFieldProps) => ({
    ...mapProps,
    onChange,
    onFocus: (e: FocusEvent) => {
        onFocus(e);
    },
    onBlur: () => {
        onBlur(undefined);
    },
    checked: Boolean(value),
}));

const SwitchField = createComponent(Switch, switchMap);

export default SwitchField;
