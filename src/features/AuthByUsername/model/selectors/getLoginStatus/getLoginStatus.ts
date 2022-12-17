import { StateSchema } from 'app/providers/StoreProvider';
// ts-ignore
export const getLoginStatus = (state:StateSchema) => state?.loginForm?.isLoading || false;
