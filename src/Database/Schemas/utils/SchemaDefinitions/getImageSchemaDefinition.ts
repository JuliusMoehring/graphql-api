export const getImageSchemaDefinition = () => ({
    source: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: false,
    },
});
