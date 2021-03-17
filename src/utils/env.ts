const trueAsString = (value: string) => value === 'true';

export const enableGraphiQL = (): boolean => trueAsString(process.env.ENABLE_GRAPHIQL!);
export const getPort = (): number => Number(process.env.PORT) || 8000;
export const getDatabaseUri = (): string => process.env.DATABASE_URI!;
