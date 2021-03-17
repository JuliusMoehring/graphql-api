export const getUserAddressSchemaDefinition = () => ({
    company: {
        type: String,
        required: false,
    },
    street: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: true,
    },
});
