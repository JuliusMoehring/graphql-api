import {UserRoleEnum} from '../../../../shared/models/enums/UserRoleEnum';

export const getUserRolesSchemaDefinition = () => ({
    type: String,
    required: true,
    enum: Object.values(UserRoleEnum),
});
