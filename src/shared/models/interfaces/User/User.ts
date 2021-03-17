import {Creatable} from '../ExtendableInterfaces/Createable';
import {Updatable} from '../ExtendableInterfaces/Updatable';
import {UserRoleEnum} from '../../enums/UserRoleEnum';
import {IUserAddress} from './UserAddress';
import {ICourse} from '../Course/Course';

export interface IUser extends Creatable, Updatable {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: IUserAddress;
    roles: UserRoleEnum[];
    courseFavorites: ICourse[];
}
