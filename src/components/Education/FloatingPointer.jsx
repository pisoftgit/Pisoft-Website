import { FollowerPointerCard } from "../../components/FloatingPointer";

export function FollowingPointerDemo() {
    return (
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogContents.map((content, index) => (
                <FollowerPointerCard
                    key={index}
                    title={
                        <TitleComponent
                            title={content.author}
                            avatar={content.authorAvatar}
                        />
                    }
                >
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
                        <a
                            href="https://veberp.com/esme.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100 block"
                        >
                            <img
                                src={content.image}
                                alt="thumbnail"
                                className="h-full w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                            />
                        </a>
                        <div className="p-4">
                            <h2 className="font-jr my-4 text-lg font-bold text-zinc-950">
                                {content.title}
                            </h2>
                            <h2 className="font-jr my-4 text-sm font-normal text-zinc-700">
                                {content.description}
                            </h2>
                            <div className="mt-10 flex flex-row items-center justify-between">
                                <span className="text-sm text-gray-500">{content.date}</span>
                                <a
                                    href="https://veberp.com/esme.php"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </FollowerPointerCard>
            ))}
        </div>
    );
}


const blogContents = [
    {
        slug: "Stocks-and-Inventory-Management",
        title: "Stocks and Inventory Management",
        description:
            "This system enables efficient stock and inventory management for both internal use and sales within an organization. It offers a smooth search functionality based on product and batch details, and supports management across multiple warehouses and stores for better organization. Additionally, it facilitates vendor and supplier coordination for handling indents, purchases, and dispatches effectively.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "News and Notification",
        description:
            "This module streamlines notice board management by allowing users to select a notification category and view updates whenever information is modified. It also supports auto-generated notices and real-time notifications to inform users about relevant changes and events within their selected categories.Administrators can efficiently broadcast important announcements across the system with minimal effort.",
        image: "https://images.unsplash.com/photo-1740645580369-248b8df63def?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        slug: "Transport-Management",
        title: "Transport Management",
        description:
            "A comprehensive system for managing work processes through a structured task assignment mechanism and milestone tracking. It allows teams to assign tasks, set deadlines, and monitor progress toward defined goals. Real-time updates and performance metrics help ensure accountability and timely completion, while milestone achievements provide clear indicators of project success.",
        image: "https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VHJhbnNwb3J0YXRpb258ZW58MHx8MHx8fDA%3D"
    },
];



const TitleComponent = ({
    title,
    avatar
}) => (
    <div className="flex items-center space-x-2">
        <p>Know More</p>
    </div>
);
