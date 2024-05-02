import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "../Slices/StudentSlice";
import ClassReducer from "../Slices/ClassSlice";
import SectionReducer from "../Slices/SectionSlice";


export const store=configureStore({
    reducer:{
     students: StudentReducer,
     class:ClassReducer,
     section:SectionReducer
    }
  })