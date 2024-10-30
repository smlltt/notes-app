import Note from "../models/note.model";
import { AddNoteRequestBody, AuthenticatedRequest } from "../types";

export type TypedAddNoteRequest = AuthenticatedRequest & {
  body: AddNoteRequestBody;
};

export const addNote = async (
  req: TypedAddNoteRequest,
  res: any
): Promise<any> => {
  const { title, content, tags } = req.body;
  const { user } = req.user;
  if (!title) {
    return res.status(400).json({
      error: true,
      message: "Title required.",
    });
  }
  if (!content) {
    return res.status(400).json({
      error: true,
      message: "Content required.",
    });
  }
  try {
    const note = new Note({
      title,
      content,
      isPinned: false,
      tags: tags || [],
      userId: user._id,
    });
    await note.save();
    return res.json({
      error: false,
      note,
      message: "Note created successfully",
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "Internal server error." });
  }
};

type TypedEditNoteRequest = AuthenticatedRequest & {
  body: Partial<AddNoteRequestBody>;
  params: {
    noteId: string;
  };
};

export const editNote = async (
  req: TypedEditNoteRequest,
  res: any
): Promise<any> => {
  const { title, content, tags, isPinned } = req.body;
  const { user } = req.user;
  const { noteId } = req.params;

  if (!noteId) {
    return res.status(400).json({
      error: true,
      message: "Note ID is required.",
    });
  }

  if (!title && !content && !tags) {
    return res.status(400).json({
      error: true,
      message:
        "At least one field (title, content, tags) is required to update.",
    });
  }

  try {
    const note = await Note.findOne({ _id: noteId, userId: user._id });

    if (!note) {
      return res.status(404).json({
        error: true,
        message: "Note not found.",
      });
    }

    if (title) note.title = title;
    if (content) note.content = content;
    if (tags) note.tags = tags;
    note.isPinned = isPinned;
    await note.save();

    return res.json({
      error: false,
      note,
      message: "Note updated successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

type TypedDeleteNoteRequest = AuthenticatedRequest & {
  params: {
    noteId: string;
  };
};

export const deleteNote = async (
  req: TypedDeleteNoteRequest,
  res: any
): Promise<any> => {
  const { user } = req.user;
  const { noteId } = req.params;

  if (!noteId) {
    return res.status(400).json({
      error: true,
      message: "Note ID is required.",
    });
  }

  try {
    const note = await Note.findOneAndDelete({ _id: noteId, userId: user._id });

    if (!note) {
      return res.status(404).json({
        error: true,
        message: "Note not found.",
      });
    }

    return res.json({
      error: false,
      message: "Note deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const getNotes = async (
  req: AuthenticatedRequest,
  res: any
): Promise<any> => {
  const { user } = req.user;
  try {
    const notes = await Note.find({ userId: user._id }).sort({ isPinned: -1 });

    return res.json({
      error: false,
      notes: notes || [],
      message: "Note retrived successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
};
