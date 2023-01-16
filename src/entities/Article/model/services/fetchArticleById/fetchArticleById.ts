import { Action, createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { Article } from '../../types/Article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>('article/FetchArticleById', async (
    articleId,
    { rejectWithValue, extra },
) => {
    try {
        const response = await extra.api.get<Article>(`/articles/${articleId}`);
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (err) {
        return rejectWithValue('error');
    }
});
