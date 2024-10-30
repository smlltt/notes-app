import mongoose, { Document, Schema } from "mongoose";

export interface NoteDocument extends Document {
  title: string;
  content: string;
  tags: Array<string>;
  isPinned: boolean;
  userId: string;
  createdAt: Date;
}

const NoteSchema = new Schema<NoteDocument>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], required: false },
  isPinned: { type: Boolean, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Note = mongoose.model<NoteDocument>("Note", NoteSchema);
export default Note;
