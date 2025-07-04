"use client";
import React from "react";
import { LayoutGrid } from "../layoutGrid";

export function LayoutGridDemo() {
    return (
        <div className="h-screen pt-5 pb-35 md:pb-23 w-full">
                    <LayoutGrid cards={cards} />
                </div>
    );
}

const SkeletonOne = () => {
    return (
        <div className="text-center">
            <p className="font-bold flex flex-row flex-wrap justify-center items-center md:text-4xl text-xl text-white">
                Service And Package Management
            </p>
            <p className="font-normal text-center my-4 max-w-lg text-neutral-200">
                 Create services and packages for easy management and allotment for different services offered by a business and maintain usage information by the customers. Enable flexible tracking and reporting to optimize customer engagement and service performance.
                </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Appointment Management
            </p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Easily manage and schedule patient appointments with real-time availability. Supports online bookings, reminders, and visit logs. Designed to improve efficiency for front-desk staff and enhance patient experience with streamlined coordination.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Clinic OPD Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Simplifies outpatient department operations by handling diagnoses, prescriptions, and patient visit records. Doctors can quickly refer to past medical history, while patients benefit from consistent, high-quality treatment and follow-up tracking.
            </p>
        </div>
    );
};


const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
               Pathology Tests Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Track pathology samples, generate reports, and notify patients on test progress. Ensures accuracy and speed in handling lab requests, managing workflows, and storing historical reports for clinics, labs, and diagnostic centers.
            </p>
        </div>
    );
};


const SkeletonFive = () => {
    return (
        
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Billing and Collections
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Automates invoice generation, payment tracking, and collection management. Supports multiple payment modes, recurring billing, and ledger maintenance. Great for healthcare providers to streamline financial operations and reduce billing errors.
            </p>
        </div>
    );
};
const SkeletonSix = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Finance & Accounting Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Complete accounting module with ledger, expenses, profit/loss reports, and customized categories. Designed to help medical practices manage their finances efficiently with built-in tools for tracking income and expenditure easily.
            </p>
        </div>
    );
};


const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        title:"Service And Package Management",
        className: "md:col-span-2",
        thumbnail:
            "https://png.pngtree.com/thumb_back/fh260/background/20231006/pngtree-d-render-concept-efficient-product-delivery-service-with-courier-transportation-and-image_13533986.png",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        title:" Appointment Management",
        className: "col-span-1",
        thumbnail:
            "https://media.istockphoto.com/id/1296699193/photo/make-an-appointment-written-under-torn-paper.jpg?s=612x612&w=0&k=20&c=2gWwlqj_sJzvrKAjpfEAaXV1eF8bb0x-CINyysCr6LM=",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        title:"Clinic OPD Management",
        className: "col-span-1",
        thumbnail:
            "https://t3.ftcdn.net/jpg/09/60/66/00/360_F_960660047_9qukBpFes0mCCjcjGqNSsjy7L38wj6Do.jpg",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        title:" Pathology Tests Management",
        className: "md:col-span-2",
        thumbnail:
            "https://www.remedygroup.in/images/services/banner_1641921332.jpg",
    },
    {
        id: 5,
        content: <SkeletonFive />,
        title:"Billing And Collections Management",
        className: "col-span-2",
        thumbnail:
            "https://www.shutterstock.com/image-photo/financial-report-banking-management-e-600nw-2537984823.jpg",
    },
    {
        id: 6,
        content: <SkeletonSix />,
        title:"Finance And Accounting Management",
        className: "md:col-span-1",
        thumbnail:
            "https://png.pngtree.com/thumb_back/fh260/background/20240410/pngtree-financial-accounting-banking-finance-business-banking-image_15654018.jpg",
    },
];
