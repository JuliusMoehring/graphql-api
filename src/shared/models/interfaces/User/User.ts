import {UserRoleEnum} from '../../enums/UserRoleEnum';
import {IUserAddress} from './UserAddress';
import {ICourse} from '../Course/Course';
import {Creatable, Identifiable, Updatable} from '../ExtendableInterfaces';

export interface IUser extends Identifiable, Creatable, Updatable {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: IUserAddress;
    roles: UserRoleEnum[];
    courseFavorites: ICourse[];
}
