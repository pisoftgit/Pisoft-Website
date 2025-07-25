import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import 'swiper/css';
import 'swiper/css/navigation';

import { FollowerPointerCard } from "../../components/FloatingPointer";

  const blogContents = [
    {
        slug: "members-management",
        title: "Members Management",
        description:
            "Using this module one can easily handle member’s information of a society or multi-level marketing system for easy access to manage system members and can also develop hierarchy as per system input of various levels.",
        image: "https://img.freepik.com/premium-photo/hand-touching-virtual-screen-human-management-icon-employee-icon-human-development-teamwork-concept_50039-2252.jpg?semt=ais_hybrid&w=740"
    },
    {
        slug: "advisors-management",
        title: "Advisors Management",
        description:
            "This module is meant for a management of advisors connected with a financial organisation as agents. The system can self-generate hierarchy for management and mapping to use with different services offered by the organisation.",
        image: "https://img.freepik.com/free-photo/businessman-showing-changes-report_1098-3504.jpg?semt=ais_hybrid&w=740"
    },
    {
        slug: "deposits-management",
        title: "Financial Products Management - Deposits",
        description:
            "A system prepared for a financial institution wherein one can easily configure and manage all deposit products like Fixed Deposits, Recurring Deposits, and Monthly Income Schemes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5S83-5dXhVmqSvHSbXUmM08ioGJznfUBBA&s"
    },
    {
        slug: "loans-management",
        title: "Financial Products Management - Loans",
        description:
            "System is capable of handling various loan products for easy management of interest calculations, penalties, and principal payments. Includes application and approval workflows.",
        image: "https://img.freepik.com/free-photo/closeup-shot-person-thinking-buying-selling-house_181624-19919.jpg?semt=ais_hybrid&w=740"
    },
    {
        slug: "finance-accounting",
        title: "Finance and Accounting Management",
        description:
            "Account package to manage daily accounts along with performing complex tasks like profit and loss statements, managing ledgers and account heads. Customized for easy usage.",
        image: "https://img.freepik.com/free-photo/finance-business-accounting-analysis-management-concept_53876-15817.jpg"
    },
    {
        slug: "commission-payouts",
        title: "Commission Payouts Management",
        description:
            "A complete module to calculate commissions for various levels in a hierarchy. It supports automatic calculation and disbursal for accurate and efficient payouts.",
        image: "https://img.freepik.com/free-photo/wire-transfer-young-man-using-his-smartphone-laptop-banking-transaction-some-payments_662251-2046.jpg?semt=ais_hybrid&w=740"
    },
    {
        slug: "lead-management",
        title: "Lead Management",
        description:
            "Capture and track business leads. Auto-generates lead numbers, allows follow-ups with remarks, and supports advanced filters for assignment and updates.",
        image: "https://img.freepik.com/premium-photo/businessman-shows-his-hands-hologram-human-resources-blurred-background_1035553-203.jpg"
    },
    {
        slug: "appointment-management",
        title: "Appointment Management",
        description:
            "Booking and management of appointments for visitors, patients, or clients. Supports online booking and maintains a structured visitor record.",
        image: "https://media.istockphoto.com/id/1296699193/photo/make-an-appointment-written-under-torn-paper.jpg?s=612x612&w=0&k=20&c=2gWwlqj_sJzvrKAjpfEAaXV1eF8bb0x-CINyysCr6LM="
    },
    {
        slug: "hr-management",
        title: "Human Resource Management",
        description:
            "Maintain employee records, goal sheets, appraisals, and recruitment. Empower employees with structured HR tools and performance tracking.",
        image: "https://img.freepik.com/free-photo/human-resource-hiring-recruiter-select-career-concept_53876-21141.jpg?semt=ais_hybrid&w=740"
    },
    {
        slug: "task-management",
        title: "Task Management",
        description:
            "Comprehensive system for managing work using task assignments and milestones. Ensures accountability and structured work completion.",
        image: "https://img.freepik.com/premium-photo/project-management-team-coordinating-update-project-planned-schedule-computer-using-gantt-chart-software-office-business-people-planning-time-deadline-company-task-trailblazing_31965-255122.jpg"
    },
    {
        slug: "reports",
        title: "Reports",
        description:
            "A comprehensive reporting system that extracts data from various modules in required formats. Ideal for audits, MIS, and performance tracking.",
        image: "https://img.freepik.com/free-photo/close-up-businessman-with-digital-tablet_1098-549.jpg?semt=ais_hybrid&w=740"
    },
    {
        slug: "news-notification",
        title: "News and Notification",
        description:
            "Manage and publish news, notifications, or event details system-wide. Auto-generates notices and sends real-time updates to relevant users.",
        image: "https://img.freepik.com/premium-vector/phone-notifications-icon-flat-style-smartphone-with-new-notice-vector-illustration-isolated-background-reminder-message-sign-business-concept_157943-44220.jpg?semt=ais_hybrid&w=740"
    }
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