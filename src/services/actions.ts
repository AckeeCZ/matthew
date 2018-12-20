import { Action as ReduxAction } from 'redux';
import { Action } from '../types';
import actionTypes from './actionTypes';

const submitForm = <FormValues = object>(form: string, submitActionCreator: ReduxAction) => {
    return (data: FormValues): Action => ({
        type: actionTypes.FORM_SUBMIT,
        data,
        form,
        submitActionCreator,
    });
};

export default submitForm;
