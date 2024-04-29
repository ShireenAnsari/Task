import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./StudentReducer";

export const store=configureStore({
    reducer:{
     students: StudentReducer
    }
  })