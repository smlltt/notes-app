import { FaThumbtack, FaPen, FaTrash } from "react-icons/fa6";

interface NoteCardProps {
  title: string;
  date: string;
  content: string;
  tags: string[];
}

const NoteCard: React.FC<NoteCardProps> = ({ title, date, content, tags }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg p-4 mt-3 w-[400px]">
      <div className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer">
        <FaThumbtack />
      </div>

      <h2 className="text-xl font-semibold mb-1">{title}</h2>

      <p className="text-sm text-gray-500 mb-2">{date}</p>

      <p className="text-gray-700 mb-4 truncate">{content}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-primary text-sm font-medium px-2 py-1 rounded-full"
          >
            {`# ${tag}`}
          </span>
        ))}
      </div>

      <div className="absolute bottom-2 right-2 flex space-x-3 ">
        <FaPen className="text-gray-400 hover:text-gray-600 cursor-pointer" />
        <FaTrash className="text-gray-400 hover:text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default NoteCard;
