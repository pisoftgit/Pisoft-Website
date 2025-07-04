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
                Patient Management System
            </p>
            <p className="font-normal text-center my-4 max-w-lg text-neutral-200">
                For a doctor or hospital the system manages patient details, visits, medical history.
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
                Booking of appointment, managing and maintaining records of visitors with an easy online booking by patients and customers and maintaining records of visitors.
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
                Manage diagnosis and prescription with patient history for sharing precise information for further referral and treatments.
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
                Helps laboratories, core facilities, and biotech’s providing services to clients or partners to keep track of samples arriving for processing, track status and generate reports while maintaining records.
            </p>
        </div>
    );
};


const SkeletonFive = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Billing And Collections Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                For any business made easy the bill generation and its management, receipts of collections and invoicing. Can also be used to track auto service bill generation and pendency.
            </p>
        </div>
    );
};
const SkeletonSix = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Finance And Accounting Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Account package to manage daily accounts along with performing complex tasks like profit and loss statement managing ledger and account heads to customized for easy usage and entries.
            </p>
        </div>
    );
};


const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        title:"Patient Management System",
        className: "md:col-span-2",
        thumbnail:
            "https://www.csm.tech/admin/storage/app/uploads/TwitterImage1703591177.jpeg",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        title:" Appointment Management",
        className: "col-span-1",
        thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PeLO2glNyRpD-gyxvOWPz5-kGST0q-9wNA&s",
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
