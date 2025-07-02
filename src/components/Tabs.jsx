import CardItem from "./CardItem"; // Import the subcomponent

const Tabs = () => {
  const projects = [
    {
      title: "Project A",
      description: "Some text",
      src: "/your-image-a.jpg",
      url: "https://example.com/a",
      color: "#fef08a"
    },
    {
      title: "Project B",
      description: "Some more text",
      src: "/your-image-b.jpg",
      url: "https://example.com/b",
      color: "#bfdbfe"
    },
    // Add more projects as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((proj, index) => (
        <CardItem key={index} {...proj} />
      ))}
    </div>
  );
};

export default Tabs;
