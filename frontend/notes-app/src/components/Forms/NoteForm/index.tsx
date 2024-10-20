import {
  SubmitHandler,
  useForm,
  FormProvider,
  useFieldArray,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Input";
import { FaTrash, FaPlus } from "react-icons/fa6";
import Tag from "../../Tag";
import TextArea from "../../TextArea";
import { useState } from "react";

const NoteSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  tags: z.array(z.object({ value: z.string() })).optional(),
});

type NoteSchemaType = z.infer<typeof NoteSchema>;

const NoteForm = () => {
  const methods = useForm<NoteSchemaType>({
    resolver: zodResolver(NoteSchema),
  });

  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    if (tagInput.trim()) {
      append({ value: tagInput.trim() });
      setTagInput("");
    }
  };

  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  const onSubmit: SubmitHandler<NoteSchemaType> = (data) => {
    console.log("NoteForm data", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input fieldName="title" placeholder="Title" />
        <TextArea
          fieldName="content"
          placeholder="Write your note..."
          textAreaProps={{ rows: 10 }}
        />

        <div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              id="tags"
              placeholder="Add a tag"
              className="input-primary"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyPress}
            />
            <button
              type="button"
              className="btn-primary w-12 flex justify-center"
              onClick={addTag}
            >
              <FaPlus />
            </button>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center space-x-2">
                <Tag text={field.value} />
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() => remove(index)}
                />
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Save Note
        </button>
      </form>
    </FormProvider>
  );
};

export default NoteForm;
