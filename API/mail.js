import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./API";

export const fetchUserZam = createAsyncThunk("order/fetchUserZam", async (templateParams) => {
        const { data } = await instance.post(`/save-client-from-consultation`, templateParams);
        return data;
    }
);

export const fetchOrder = createAsyncThunk("order/fetchOrder", async (id) => {
    const { data } = await instance.get(`/order/fetchOrder/${id}`);
    return data;
});