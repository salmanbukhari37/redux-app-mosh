import { configureStore } from '@reduxjs/toolkit';

import reducer from "./reducer";

export default function customConfigureStore() {
    return configureStore({ reducer });
};