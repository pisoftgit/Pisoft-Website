import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import 'swiper/css';
import 'swiper/css/navigation';

import { FollowerPointerCard } from "../../components/FloatingPointer";

const blogContents = [
    {
        slug: "student-management",
        title: "Student Management",
        description:
            "You can maintain student records as per the institution requirement. It includes personal information, address details, courses/classes for the students. Student management reduces overheads and improves communication between management, parents, students, teachers, and staff. Admissions can easily enroll candidates, attach necessary documents, and grant portal access to students/parents. They can monitor homework, timetables, fees, and communicate with teachers.",
        image: "https://img.freepik.com/free-vector/isometric-online-education-round-concept-with-devices-online-training-graduation-cap-students-books-magnifier-alarm-clock-backpack-certificate-pencil-illustration_1284-51233.jpg"
    },
    {
        slug: "student-fee-management",
        title: "Student Fee Management",
        description:
            "Digitally manage thousands of financial transactions. Configure fees by quota, and generate receipts automatically. Supports monthly, quarterly, or annual fee patterns. Enables easy scholarship tracking, legal reporting, cheque management, and fund maintenance. Centralized system ensures every financial activity is controlled from one place.",
        image: "https://img.freepik.com/free-photo/putting-money-coins-saving-glass-bottle-concept-investment-mutual-fund-finance-business-placed-textbook-content-money-saving-education_1150-45710.jpg"
    },
    {
        slug: "student-score-evaluation",
        title: "Student Score & Evaluation",
        description:
            "Manage class subjects, grades, credits, marks, faculty mapping, exam schedules, and attendance. Admins or teachers can configure exams and grading schemes, publish schedules, and generate report cards. Helps track academic progress throughout the year for students, parents, and faculty.",
        image: "https://img.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-122820.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        slug: "transport-management",
        title: "Transport Management",
        description:
            "Manage vehicle records, routes, assignments, and transport fee collection. Easily configure and track route plans and related charges.",
        image: "https://img.freepik.com/free-photo/man-giving-taxi-services-through-app_23-2149149655.jpg?semt=ais_hybrid&w=740"
    },
    {
        slug: "hostel-management",
        title: "Hostel Management",
        description:
            "Manage room allocations, occupancy tracking, billing, and hostel accounts. Automates allotments and tracks resources efficiently.",
        image: "https://img.freepik.com/free-photo/young-friends-hostel_52683-121727.jpg?semt=ais_hybrid&w=740"
    },
    {
        slug: "inventory-management",
        title: "Stocks & Inventory Management",
        description:
            "Maintain internal or sales stock by product and batch. Manage warehouses, stores, vendors, indents, and dispatches. Easy inventory lookup and centralized control.",
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1un6n2t3qDgOFvH9xibK1f/0981ca88e6c56c756b3da76e852bd872/GettyImages-1367106352__1_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
    },
    {
        slug: "lead-management",
        title: "Lead Management",
        description:
            "Capture and manage new business leads. Auto-generates lead numbers, supports follow-ups, detailed notes, filtering, and team assignments. Perfect for CRM-style lead tracking.",
        image: "https://img.freepik.com/premium-photo/businessman-shows-his-hands-hologram-human-resources-blurred-background_1035553-203.jpg"
    },
    {
        slug: "hr-management",
        title: "Human Resource Management",
        description:
            "Maintain employee records including personal info, goals, and appraisals. Supports structured recruitment and HR workflows to empower staff.",
        image: "https://img.freepik.com/free-photo/human-resource-hiring-recruiter-select-career-concept_53876-21141.jpg?semt=ais_hybrid&w=740"
    },
    {
        slug: "task-management",
        title: "Task Management",
        description:
            "Manage internal work using structured task assignment and milestone tracking. Helps teams track progress and meet objectives effectively.",
        image: "https://img.freepik.com/premium-photo/project-management-team-coordinating-update-project-planned-schedule-computer-using-gantt-chart-software-office-business-people-planning-time-deadline-company-task-trailblazing_31965-255122.jpg"
    },
    {
        slug: "reporting",
        title: "Reports",
        description:
            "Comprehensive reporting across all modules. Extract data in required formats for MIS and operational review.",
        image: "https://img.freepik.com/free-photo/close-up-businessman-with-digital-tablet_1098-549.jpg?semt=ais_hybrid&w=740"
    },
    {
        slug: "news-notification",
        title: "News & Notification",
        description:
            "Publish news, notifications, and events. Supports auto-generated alerts for changes, updates, and real-time communication across user categories.",
        image: "https://img.freepik.com/premium-vector/news-update_1200-438.jpg"
    },
    {
        slug: "finance-accounting-management",
        title: "Finance and Accounting Management",
        description:
            "An accounting package to manage daily finances and complex tasks like profit/loss, ledger, and account head tracking. Customized for ease of use, reporting, and maintaining institutional financial health.",
        image: "https://img.freepik.com/free-photo/finance-business-accounting-analysis-management-concept_53876-15817.jpg"
    },
];

const TitleComponent = ({ title }) => (
    <div className="flex items-center space-x-2">
        <p>{title}</p>
    </div>
);

export function FollowingPointerDemo() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const swiperRef = useRef(null);
    const maxLength = 140;

    const handlePrev = () => swiperRef.current?.slidePrev();
    const handleNext = () => swiperRef.current?.slideNext();

    const toggleReadMore = (index) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="relative w-full px-4">
            {/* Swiper */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1.2}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="pb-12"
            >
                {blogContents.map((content, index) => {
                    const shouldTruncate = content.description.length > maxLength;
                    const isExpanded = expandedIndex === index;
                    const displayText = isExpanded
                        ? content.description
                        : content.description.slice(0, maxLength) + (shouldTruncate ? "..." : "");

                    return (
                        <SwiperSlide key={index}>
                            <FollowerPointerCard
                                title={<TitleComponent title={content.title} />}
                            >
                                <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
                                    <a className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100 block">
                                        <img
                                            src={content.image}
                                            alt="thumbnail"
                                            className="h-full w-full object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                                        />
                                    </a>
                                    <div className="p-4">
                                        <h2 className="font-jSB my-4 text-2xl text-zinc-950">
                                            {content.title}
                                        </h2>
                                        <p className="font-jl text-xl text-blue-950">
                                            {displayText}
                                            {shouldTruncate && (
                                                <span
                                                    onClick={() => toggleReadMore(index)}
                                                    className="ml-2 cursor-pointer text-blue-500 hover:underline"
                                                >
                                                    {isExpanded ? "Read less" : "Read more"}
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </FollowerPointerCard>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Bottom Navigation Arrows */}
            <div className="flex justify-end gap-6 mt-6">
                <button
                    onClick={handlePrev}
                    className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full shadow-xl"
                >
                    <ArrowLeft size={30} className="text-white" />
                </button>
                <button
                    onClick={handleNext}
                    className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full shadow-xl"
                >
                    <ArrowRight size={30} className="text-white" />
                </button>
            </div>
        </div>
    );
}