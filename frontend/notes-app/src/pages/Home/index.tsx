import Navbar from "../../components/Navbar";
import NoteCard from "../../components/NoteCard";
import { FaPlus } from "react-icons/fa6";

const Home = () => {
  const notes = [
    {
      title: "Meeting Notes",
      date: "Oct 19, 2024",
      content: "Discuss project deadlines and milestones.",
      tags: ["meeting", "project", "deadlines"],
    },
    {
      title: "Meeting Notes",
      date: "Oct 19, 2024",
      content: "Discuss project deadlines and milestones.",
      tags: ["meeting", "project", "deadlines"],
    },
    {
      title: "Meeting Notes",
      date: "Oct 19, 2024",
      content: "Discuss project deadlines and milestones.",
      tags: ["meeting", "project", "deadlines"],
    },
    {
      title: "Meeting Notes",
      date: "Oct 19, 2024",
      content: "Discuss project deadlines and milestones.",
      tags: ["meeting", "project", "deadlines"],
    },
    {
      title: "Meeting Notes",
      date: "Oct 19, 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique auctor dapibus. Suspendisse potenti. Nunc vel tempor lacus. Vestibulum malesuada libero quis leo bibendum laoreet. Sed scelerisque eros a mi consequat, vitae imperdiet libero vestibulum. Nulla lacinia suscipit magna, eget pretium turpis fringilla eu. Praesent ornare lacus sed porta consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id egestas erat. Nunc orci erat, blandit non tempus rutrum, tristique at orci. Sed at felis hendrerit, luctus dolor ac, sagittis nulla. Maecenas blandit urna nec urna egestas, id efficitur metus venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sed arcu sit amet neque vulputate venenatis. Suspendisse ornare, ligula in imperdiet tempus, lectus dui sollicitudin dolor, eget blandit ligula elit id diam. Cras in consequat nibh, sed accumsan massa. Sed ante metus, molestie vestibulum mauris a, semper commodo mi. Mauris sit amet eros placerat, commodo magna ac, sodales nunc. Etiam at libero at dui sollicitudin porttitor. Curabitur id sapien magna. Vestibulum felis lectus, dapibus id sapien id, varius mattis enim. Aliquam congue laoreet arcu, sit amet pharetra magna mollis eget. Curabitur vulputate feugiat imperdiet. Pellentesque in mi at ex vestibulum luctus in non velit.",
      tags: ["meeting", "project", "deadlines"],
    },
  ];
  return (
    <div className="relative  min-h-screen">
      <Navbar inDashboard />
      <div className="flex gap-2 flex-wrap p-3 justify-center">
        {notes.map((note) => (
          <NoteCard {...note} key={note.content} />
        ))}
      </div>
      <div className="bg-primary hover:bg-blue-600 cursor-pointer w-16 h-16 rounded-lg flex justify-center items-center absolute right-2 bottom-2">
        <FaPlus className="text-white" size={22} />
      </div>
    </div>
  );
};

export default Home;
