import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const url = axios.create({
    baseURL:'http://localhost:3001',
    headers: {
        "Content-type": "application/json"
    }
});

export const getIssues  = createAsyncThunk(
    'issue/getIssues',
    async () => {
        return url.get('/issues/').then(res => res.data);
    }
);
export const getIssue  = async (id) =>{
    const response = await url.get(`/issues/${id}`,);
    return response.data;
};

export const addIssue  = createAsyncThunk(
    'issue/addIssue',
    async (issue) => {
        const response = await url.post(`/issues/`,issue);
        return response.data;
    }
);

export const updateIssue  = createAsyncThunk(
    'issue/updateIssue',
    async ({id,issue}) => {
        await url.patch(`/issues/${id}`,issue);
        return issue;
    }
);

export const deleteIssue  = createAsyncThunk(
    'issue/deleteIssue',
    async (id) => {
        await url.delete(`/issues/`+id.id);
        return id.id;
    }
);

export const updateViews  = createAsyncThunk(
    'issue/updateViews',
    async (id) => {
        const response = await url.get(`/issues/`);
        const issue = response.data.filter(doc=>doc._id === id)[0];
        issue.views+=1;
        await url.patch(`/issues/${id}`,issue);
        return issue;
    }
);

export const deleteMultipleIssues  = createAsyncThunk(
    'issue/deleteMultipleIssues',
    async ({multiDelId}) => {
        for(let el of multiDelId) {
            await url.delete(`/issues/${el}`);
        }
        return multiDelId;
    }
);