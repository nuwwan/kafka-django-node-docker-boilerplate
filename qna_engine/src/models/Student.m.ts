import { Schema, model } from "mongoose";

/**
 * @param firstName:string
 * @param lastName:string
 * @param age:age
 */
export type TStudent = {
  firstName: string;
  lastName: string;
  age: number;
};

const studentChema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    require: true,
  },
});

const Student = model<TStudent>("Student", studentChema);

export default Student;
