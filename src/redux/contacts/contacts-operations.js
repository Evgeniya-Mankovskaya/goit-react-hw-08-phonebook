import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const { data } = await axios.get("/contacts");
    return data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }) => {
    const contact = { name, number };
    const { data } = await axios.post("/contacts", contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contactId) => {
    const {
      data: { id },
    } = await axios.delete(`contacts/${contactId}`);
    return id;
  }
);
