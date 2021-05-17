import { configureStore } from '@reduxjs/toolkit';
import logger from './middleware/logger'
import reducer from "./reducer";

export default function customConfigureStore() {
    return configureStore({
        reducer,
        middleware: [logger("console")]
    });
};