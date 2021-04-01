// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type CatDocument = Cat & Document;

// @Schema()
// export class Cat {
//   @Prop({ required: true })
//   name: string;

//   @Prop()
//   age: number;

//   @Prop()
//   breed: string;
// }

// export const CatSchema = SchemaFactory.createForClass(Cat);

import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
