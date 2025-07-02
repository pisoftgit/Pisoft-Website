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
                        <div className="p-4 flex flex-col justify-center items-center">
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
        slug: "Gifts-and-Incentive-Management",
        title: "Gifts and Incentive Management",
        description:
            "Can be used to manage and track various vouchers and gift coupons having unique code for giving discounts or free services / products to customers for maintaining loyalty or promotions.",
        image: "https://img.freepik.com/free-photo/finance-money-debt-credit-balance-concept_53876-127372.jpg?semt=ais_hybrid&w=740",
    },
    {
        slug:"Billing-and-Collections-Management",
        title: "Billing and Collections Management",
        description:
            "For any business made easy the bill generation and its management, receipts of collections and invoicing. Can also be used to track auto service bill generation and pendency.",
        image: "https://img.freepik.com/free-photo/finance-business-accounting-analysis-management-concept_53876-15817.jpg"
    },
    {
        slug: "Reports",
        title: "Reports",
        description:
            "A comprehensive reporting system for different modules to extract information as per required format and MIS coordination.",
        image: "https://img.freepik.com/free-photo/handshake-close-up-executives_1098-1384.jpg?semt=ais_hybrid&w=740"
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
