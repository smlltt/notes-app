import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Input from "../../Input";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

const SearchSchema = z.object({
  text: z.string().min(1),
});

type SearchSchemaType = z.infer<typeof SearchSchema>;

const SearchBarForm = () => {
  const methods = useForm<SearchSchemaType>({
    resolver: zodResolver(SearchSchema),
  });

  const [inputValue, setInputValue] = useState("");

  const onSubmit: SubmitHandler<SearchSchemaType> = (data) => {
    console.log("search data", data);
  };

  const handleClearInput = () => {
    setInputValue("");
    methods.setValue("text", "");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="relative">
        <Input
          hideError
          placeholder="Search..."
          fieldName="text"
          inputProps={{
            value: inputValue,
            onChange: (e) => {
              setInputValue(e.target.value);
              methods.setValue("text", e.target.value);
            },
            className: "input-secondary w-full md:w-[400px]",
          }}
        />
        {inputValue && (
          <FaX
            type="button"
            onClick={handleClearInput}
            className="absolute right-10 top-3 cursor-pointer text-slate-400 hover:text-black"
          />
        )}
        <button
          type="submit"
          className="absolute right-4 top-3 cursor-pointer text-slate-400 hover:text-black"
        >
          <FaMagnifyingGlass />
        </button>
      </form>
    </FormProvider>
  );
};

export default SearchBarForm;
