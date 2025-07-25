"use client";
import React from "react";
import { LayoutGrid } from "../layoutGrid";

export function LayoutGridDemo() {
    return (
        <div className="h-auto md:h-screen py-10 w-full">
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
                Create services and packages for easy management and allotment for different services offered by a business and maintain usage information by the customers.
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
                Billing And Collections Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                For any business made easy the bill generation and its management, receipts of collections and invoicing. Can also be used to track auto service bill generation and pendency.
            </p>
        </div>
    );
};


const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
               Gifts And Incentive Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Can be used to manage and track various vouchers and gift coupons having unique code for giving discounts or free services / products to customers for maintaining loyalty or promotions.
            </p>
        </div>
    );
};


const SkeletonFive = () => {
    return (
        
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Commission Payouts Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A complete module to calculate commissions for various levels in hierarchy that can be configured for automatic calculation and disbursal for ease and accurate calcutaions.
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
        title:"Billing And Collections Management",
        className: "col-span-1",
        thumbnail:
            "https://www.shutterstock.com/image-photo/financial-report-banking-management-e-600nw-2537984823.jpg",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        title:" Gifts And Incentive Management",
        className: "md:col-span-2",
        thumbnail:
            "https://www.keka.com/media/2023/11/employee-incentive-program-cover-banner-800x419.png",
    },
    {
        id: 5,
        content: <SkeletonFive />,
        title:"Commission Payouts Management",
        className: "col-span-2",
        thumbnail:
            "https://www.shutterstock.com/image-photo/online-finance-transaction-concept-businessman-260nw-2428543527.jpg",
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
