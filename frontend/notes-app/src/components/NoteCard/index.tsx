import { FaThumbtack, FaPen, FaTrash } from "react-icons/fa6";
import Tag from "../Tag";

interface NoteCardProps {
  title: string;
  date: string;
  content: string;
  tags: string[];
}

const NoteCard: React.FC<NoteCardProps> = ({ title, date, content, tags }) => {
  return (
    <div className="relative bg-white border-black border-4 p-4 mt-3 w-[400px]">
      <div className="absolute top-2 right-2 text-black hover:text-white hover:bg-black p-1 cursor-pointer">
        <FaThumbtack />
      </div>

      <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>

      <p className="text-xs text-black font-semibold mb-4">{date}</p>

      <p className="text-black mb-6  truncate">{content}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Tag text={tag} key={index} />
        ))}
      </div>

      <div className="absolute bottom-2 right-2 flex space-x-3">
        <FaPen
          size={20}
          className="text-black hover:text-white hover:bg-black p-1 cursor-pointer"
        />
        <FaTrash
          size={20}
          className="text-black hover:text-white hover:bg-black p-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NoteCard;
