export const getReleasableSchemaDefinition = () => ({
    released: {
        type: Boolean,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: false,
    },
});
