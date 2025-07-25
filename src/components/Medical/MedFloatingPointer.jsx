import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import 'swiper/css';
import 'swiper/css/navigation';

import { FollowerPointerCard } from "../../components/FloatingPointer";
const blogContents = [
    {
        slug: "patient-management",
        title: "Patient Management System",
        description:
            "For a doctor or hospital the system manages patient details, visits, medical history.",
        image: "https://www.csm.tech/admin/storage/app/uploads/TwitterImage1703591177.jpeg"
    },
    {
        slug: "appointment-management",
        title: "Appointment Management",
        description:
            "Booking of appointment, managing and maintaining records of visitors with an easy online booking by patients and customers and maintaining records of visitors.",
        image: "https://media.istockphoto.com/id/1296699193/photo/make-an-appointment-written-under-torn-paper.jpg?s=612x612&w=0&k=20&c=2gWwlqj_sJzvrKAjpfEAaXV1eF8bb0x-CINyysCr6LM="
    },
    {
        slug: "clinic-opd-management",
        title: "Clinic OPD Management",
        description:
            "Manage diagnosis and prescription with patient history for sharing precise information for further referral and treatments.",
        image: "https://t3.ftcdn.net/jpg/09/60/66/00/360_F_960660047_9qukBpFes0mCCjcjGqNSsjy7L38wj6Do.jpg"
    },
    {
        slug: "pathology-tests-management",
        title: "Pathology Tests Management",
        description:
            "Helps laboratories, core facilities, and biotech’s providing services to clients or partners to keep track of samples arriving for processing, track status and generate reports while maintaining records.",
        image: "https://www.remedygroup.in/images/services/banner_1641921332.jpg"
    },
    {
        slug: "billing-collections",
        title: "Billing and Collections Management",
        description:
            "For any business made easy the bill generation and its management, receipts of collections and invoicing. Can also be used to track auto service bill generation and pendency.",
        image: "https://www.shutterstock.com/image-photo/financial-report-banking-management-e-600nw-2537984823.jpg"
    },
    {
        slug: "finance-accounting",
        title: "Finance and Accounting Management",
        description:
            "Account package to manage daily accounts along with performing complex tasks like profit and loss statement managing ledger and account heads to customized for easy usage and entries.",
        image: "https://img.freepik.com/free-photo/finance-business-accounting-analysis-management-concept_53876-15817.jpg"
    },
    {
        slug: "stocks-inventory",
        title: "Stocks and Inventory Management",
        description:
            "Here stock and inventory can be maintained of an organisation of internal usage or sales. Smoother system to search stocks by product and batch information. Has an ability to manage different warehouse and stores for easy management. Can be used to manage vendors and suppliers for indent and dispatches.",
        image: "https://img.freepik.com/free-vector/store-staff-check-number-products-that-must-be-delivered-customers-day_1150-51079.jpg"
    },
    {
        slug: "gifts-incentives",
        title: "Gifts and Incentive Management",
        description:
            "Can be used to manage and track various vouchers and gift coupons having unique code for giving discounts or free services / products to customers for maintaining loyalty or promotions.",
        image: "https://www.keka.com/media/2023/11/employee-incentive-program-cover-banner-800x419.png"
    },
    {
        slug: "lead-management",
        title: "Lead Management",
        description:
            "Complete solution to where you can capture details of new business lead and system will automatically generates some unique details e.g. lead no. to communicate with the system in future. You maintain follow-ups of leads along with detailed remarks. You can search and update the records of leads by large number of filters and can assign for further follow up.",
        image: "https://img.freepik.com/premium-photo/businessman-shows-his-hands-hologram-human-resources-blurred-background_1035553-203.jpg"
    },
    {
        slug: "hr-management",
        title: "Human Resource Management",
        description:
            "You can maintain employee's records as per the organization requirement. It includes Personal information, goal sheets, appraisals, etc. for the employees with a rich set of tools empower the employee. This system can be allotted the same recruitment and appraisal structure.",
        image: "https://img.freepik.com/free-photo/human-resource-hiring-recruiter-select-career-concept_53876-21141.jpg?semt=ais_hybrid&w=740"
    },
    {
        slug: "task-management",
        title: "Task Management",
        description:
            "Comprehensive system for managing work management using task assignment system and measure achievement milestone.",
        image: "https://img.freepik.com/premium-photo/project-management-team-coordinating-update-project-planned-schedule-computer-using-gantt-chart-software-office-business-people-planning-time-deadline-company-task-trailblazing_31965-255122.jpg"
    },
    {
        slug: "reports",
        title: "Reports",
        description:
            "A comprehensive reporting system for different modules to extract information as per required format and MIS coordination.",
        image: "https://img.freepik.com/free-photo/close-up-businessman-with-digital-tablet_1098-549.jpg?semt=ais_hybrid&w=740"
    },
    {
        slug: "news-notification",
        title: "News and Notification",
        description:
            "This module helps to manage your notice board by publishing new, notification or event details to the entire system member just selecting the category of notification. Auto generation of notice is also supported in automated way to give them the information of various updates of users category and pass alerts of different events happened in real-time so the users can login and see the information a gets updated at the time of relevant modification or updation.",
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