import { FollowerPointerCard } from "../FloatingPointer";

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
        title: "Stocks and Inventory Management",
        description:
            "Here stock and inventory can be maintained of an organisation of internal usage or sales. Smoother system to search stocks by product and batch information. Has an ability to manage different warehouse and stores for easy management. Can be used to manage vendors and suppliers for indent and dispatches.  ",
        image: "https://www.skunexus.com/hs-fs/hubfs/Best%20Online%20Stock%20Management%20System.webp?width=1187&name=Best%20Online%20Stock%20Management%20System.webp",
    },
    {
        title: "Lead Management",
        description:
            "Complete solution to where you can capture details of new business lead and system will automatically generates some unique details e.g. lead no. to communicate with the system in future. You maintain follow-ups of leads along with detailed remarks. You can search and update the records of leads by large... ",
        image: "https://img.freepik.com/free-vector/generating-new-leads-concept-illustration_114360-7654.jpg?semt=ais_hybrid&w=740"
    },
    {
        title: "Human Resource Management",
        description:
            "You can maintain employee's records as per the organization requirement. It includes Personal information, goal sheets, appraisals, etc. for the employees with a rich set of tools empower the employee. This system can be allotted the same recruitment and appraisal structure.  ",
        image: "https://png.pngtree.com/thumb_back/fh260/background/20240416/pngtree-human-resource-management-hrm-a-magnifying-glass-to-focus-image_15716069.jpg"
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
