const validateArrayMinLength = (value: any[], minLength: number) => {
    return value.length >= minLength;
};

const validateNumberMinSize = (value: number, minSize: number) => {
    return value >= minSize;
};

export const minLengthArrayValidator = (minLength: number) => ({
    validator: (value: any[]) => validateArrayMinLength(value, minLength),
    message: props =>
        `${props.path} must have at least ${minLength} ${minLength === 1 ? 'element' : 'elements'}, got ${
            props.value.length
        }`,
});

export const minSizeNumberValidator = (minSize: number) => ({
    validator: (value: number) => validateNumberMinSize(value, minSize),
    message: props => `${props.path} must have be bigger than ${minSize}, got ${props.value}`,
});
