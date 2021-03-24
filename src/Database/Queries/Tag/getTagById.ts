import {ITag} from '../../../shared/models/interfaces/Tag/Tag';
import {Schema} from 'mongoose';
import {getTagDocumentById} from './getTagDocumentById';
import {getTagFromTagDocument} from '../../Helpers/Tag/getTagFromTagDocument';

export const getTagById = async (id: string | Schema.Types.ObjectId): Promise<ITag> => {
    try {
        const tag = await getTagDocumentById(id);

        return getTagFromTagDocument(tag);
    } catch (error) {
        throw error;
    }
};
