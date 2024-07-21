import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../apis/axios";
import { message } from "antd";

export const createOrder = createAsyncThunk("create/order", async (data) => {
  try {
    const response = await BaseUrl.post(`order/create`, data);
    return response;
  } catch (error) {
    message.error("Lỗi server");
  }
});

export const getOneOrder = createAsyncThunk("getOne/order", async (id) => {
  try {
    console.log(id);
    const response = await BaseUrl.get(`order/${id}`);
    return response.data;
  } catch (error) {
    message.error("Lỗi server");
  }
});

export const getAllOrder = createAsyncThunk("getAll/order", async () => {
  try {
    const response = await BaseUrl.get(`order`);
    return response.data;
  } catch (error) {
    message.error("Lỗi server");
  }
});

export const updateStatus = createAsyncThunk(
  "update/order",
  async ({ id, data }) => {
    try {
      const response = await BaseUrl.put(`order/${id}`, data);
      return response;
    } catch (error) {
      message.error("Lỗi server");
    }
  }
);
