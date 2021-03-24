export const validateArrayMinLength = (array: any[], length: number) => array.length >= length;

export const validateUniqueLocale = (localizedFields: {[key: string]: any}[]) => {
    const localeList = localizedFields.map(entry => entry.locale);

    return new Set(localeList).size === localeList.length;
};
