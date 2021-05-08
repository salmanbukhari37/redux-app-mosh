import { configureStore } from '@reduxjs/toolkit';

import reducer from "./bug";

export default function customConfigureStore() {
    return configureStore({ reducer });
};