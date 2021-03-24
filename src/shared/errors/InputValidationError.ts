import {ErrorCodeEnum} from '../models/enums/ErrorCodeEnum';

export class InputValidationError extends Error {
    code: ErrorCodeEnum;

    constructor(message: string) {
        super(`Input data is invalid: ${message}`);

        this.name = 'InputValidationError';
        this.code = ErrorCodeEnum.INPUT_NOT_VALID;
    }
}
