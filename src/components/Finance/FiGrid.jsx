"use client";
import React from "react";
import { LayoutGrid } from "../layoutGrid";

export function LayoutGridDemo() {
    return (
        <div className="h-screen py-20 w-full">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const SkeletonOne = () => {
    return (
        <div className="text-center">
            <p className="font-bold flex flex-row flex-wrap justify-center items-center md:text-4xl text-xl text-white">
                Agent and advisor Management
            </p>
            <p className="font-normal text-center my-4 max-w-lg text-neutral-200">
                This module is meant for a management of advisors connected with a financial organisation as agents. The system can self-generate hierarchy for management and mapping to use with different services offered by the organisation.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Deposits and Investments
            </p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A system prepared for a financial institution wherein one can easily configure and manage all deposit products life Fixed deposits, Recurring Deposit and Monthly Income Scheme.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Members Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Using this module one can easily handle member’s information of a society or multi-level marketing system for easy access to manage system members and can also develop hierarchy as per system input of various levels.
            </p>
        </div>
    );
};


const SkeletonFive = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Financial Products - Loans
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                System is capable of handling various loan products for an easy management of interest calculations and penalty payment along with principal amount payable. A system for loan application and approval is maintained for an easy access of information
            </p>
        </div>
    );
};
const SkeletonSix = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Lead Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Complete solution to where you can capture details of new lead and system will automatically generates some unique details e.g. lead no. to communicate with the system in future. You maintain follow-ups with detailed remarks.
            </p>
        </div>
    );
};


const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Customer Relationship Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Complete CRM system to manage client database that handles complete information of respective client along with personal and contact details etc. One can easily search desired information using various available filters for easy reporting.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        title:"Agent and advisor Management",
        className: "md:col-span-2",
        thumbnail:
            "https://img.freepik.com/premium-vector/professional-financial-advisor-bank-consultant-providing-expert-help-consulting-services_1322560-2704.jpg",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        title:"Deposits and Investments",
        className: "col-span-1",
        thumbnail:
            "https://img.freepik.com/free-vector/rich-people-keeping-cash-clocks-piggy-bank-vector-illustration-time-is-money-business-time-management-wealth-concept_74855-13218.jpg",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        title:"Members Management",
        className: "col-span-1",
        thumbnail:
            "https://img.freepik.com/free-vector/corporate-portrait-office-workers-employees_74855-5471.jpg?semt=ais_items_boosted&w=740",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        title:"Customer Relationship Management",
        className: "md:col-span-2",
        thumbnail:
            "https://img.freepik.com/premium-vector/technology-isometric-crm-illustration_23-2149375821.jpg?semt=ais_hybrid&w=740",
    },
    {
        id: 5,
        content: <SkeletonFive />,
        title:"Financial Products - Loans",
        className: "col-span-2",
        thumbnail:
            "https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg?semt=ais_hybrid&w=740",
    },
    {
        id: 6,
        content: <SkeletonSix />,
        title:"Lead Management",
        className: "md:col-span-1",
        thumbnail:
            "https://img.freepik.com/free-vector/generating-new-leads-concept-illustration_114360-7654.jpg?semt=ais_hybrid&w=740",
    },
];
