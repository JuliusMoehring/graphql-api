import {Schema} from 'mongoose';
import {ErrorCodeEnum} from '../models/enums/ErrorCodeEnum';
import {DocumentTypeEnum} from '../models/enums/DocumentTypeEnum';

export class DocumentNotFoundError extends Error {
    code: ErrorCodeEnum;

    constructor(documentType: DocumentTypeEnum, documentId: string | Schema.Types.ObjectId) {
        super(`Could not find ${documentType} with _id=${documentId} in database`);

        this.name = 'DocumentNotFoundError';
        this.code = ErrorCodeEnum.DOCUMENT_NOT_FOUND;
    }
}
