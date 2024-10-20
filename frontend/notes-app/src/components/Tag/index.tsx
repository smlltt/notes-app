import { FC } from "react";

interface TagProps {
  text: string;
}

const Tag: FC<TagProps> = ({ text }) => {
  return (
    <div className="bg-yellow-300 text-black text-sm font-bold px-3 py-1 rounded-lg border-black border-2">
      {`# ${text}`}
    </div>
  );
};

export default Tag;
