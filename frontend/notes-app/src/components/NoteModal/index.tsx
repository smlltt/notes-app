import * as Dialog from "@radix-ui/react-dialog";
import { FaPlus } from "react-icons/fa";
import NoteForm from "../Forms/NoteForm";

const NoteModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="bg-yellow-300 border-black border-4 hover:bg-black cursor-pointer w-16 h-16 flex justify-center items-center absolute right-2 bottom-2 group">
          <FaPlus className="text-black group-hover:text-white" size={22} />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-500/80" />

        <Dialog.Content className="fixed bg-white text-black border-black border-4 p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-brutalist w-[90%] sm:w-96">
          <Dialog.Title className="hidden">Edit profile</Dialog.Title>
          <Dialog.Description className="hidden">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <NoteForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NoteModal;
