import Navbar from "../../components/Navbar";
import NoteCard from "../../components/NoteCard";
import NoteModal from "../../components/NoteModal";

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
      tags: [
        "meeting",
        "project",
        "deadlines",
        "meeting",
        "project",
        "deadlines",
        "deadlines",
      ],
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
    <div className="relative min-h-screen">
      <Navbar inDashboard />
      <div className=" max-w-7xl mx-auto">
        <div className="flex gap-2 flex-wrap justify-center xl:justify-start">
          {notes.map((note, index) => (
            <NoteCard {...note} key={`${note.content}${index}`} />
          ))}
        </div>
      </div>
      <NoteModal />
    </div>
  );
};

export default Home;
