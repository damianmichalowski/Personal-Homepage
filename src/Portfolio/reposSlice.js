import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reposList: null,
    reposFetchStatus: "initiated",
};

export const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        fetchRepos: (state) => {
            state.reposFetchStatus = "initiated";
        },
        fetchReposSuccess: (state, { payload }) => {
            state.reposList = payload.repos;
            state.reposFetchStatus = "completed";
        },
        fetchError: (state) => {
            state.reposFetchStatus = "error";
        },
    },
});

export const {
    fetchRepos,
    fetchReposSuccess,
    fetchError,
} = reposSlice.actions;

export const selectReposList = (state) => state.repos.reposList;

export const selectReposFetchStatus = (state) => state.repos.reposFetchStatus;

export default reposSlice.reducer;