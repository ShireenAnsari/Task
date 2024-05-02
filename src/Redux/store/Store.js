import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "../Reducers/StudentReducer";
import ClassReducer from "../Reducers/ClassReducer";
import SectionReducer from "../Reducers/SectionReducer";


export const store=configureStore({
    reducer:{
     students: StudentReducer,
     class:ClassReducer,
     section:SectionReducer
    }
  })