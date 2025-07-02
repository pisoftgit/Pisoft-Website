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
                Finance and Accounting Management
            </p>
            <p className="font-normal text-center my-4 max-w-lg text-neutral-200">
                Account package to manage daily accounts along with performing complex tasks like profit and loss statement managing ledger and account heads to customized for easy usage and entries.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Lead Management
            </p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Complete solution to where you can capture details of new lead and system will automatically generates some unique details e.g. lead no. to communicate with the system in future.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Students Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                You can maintain student records as per the organization requirement. It includes personal information, address details, Courses for the candidates. Student management reduces lots of end to end overheads.
            </p>
        </div>
    );
};


const SkeletonFive = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
               Human Resource Management
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                You can maintain employee's records as per the organization requirement. It includes Personal information, goal sheets, appraisals, etc. for the employees with a rich set of tools empower the employee. This system can be allotted the same recruitment and appraisal structure.
            </p>
        </div>
    );
};
const SkeletonSix = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Student Login Panel
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
               You can maintain student records as per the organization requirement. It includes personal information, address details, Courses for the candidates. Student management reduces lots of end to end overheads.
            </p>
        </div>
    );
};


const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Student Score and Evaluation
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Maintain subject of class, grades, credits, student's marks, Date-sheets, Faculty mapping, Exam scheduling as per the organization requirement. You can mark student attendance as per the organization regulation. Manage timetable of student and teacher.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        title:"Finance and Accounting Management",
        className: "md:col-span-2",
        thumbnail:
            "https://media.istockphoto.com/id/2148264573/vector/stock-market-investment-data-and-analysis-finance-graph-business-financial-chart-with-moving.jpg?s=612x612&w=0&k=20&c=K3HuUFBvH4iFrnb54v0F9iyT7DMmkDIN6tiSwL_9yGA=",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        title:"Lead Management",
        className: "col-span-1",
        thumbnail:
            "https://static.vecteezy.com/system/resources/thumbnails/006/174/188/small_2x/lead-generation-finding-and-identifying-customers-for-your-business-products-or-services-finance-concept-photo.jpg",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        title:"Students Management",
        className: "col-span-1",
        thumbnail:
            "https://www.shutterstock.com/image-photo/internet-educationonline-degreeelearning-education-conceptonline-260nw-2341578301.jpg",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        title:"Student Score and Evaluation",
        className: "md:col-span-2",
        thumbnail:
            "https://www.shutterstock.com/image-photo/soft-focushigh-school-university-student-260nw-737217331.jpg",
    },
    {
        id: 5,
        content: <SkeletonFive />,
        title:"Human Resource Management",
        className: "col-span-2",
        thumbnail:
            "https://www.shutterstock.com/image-photo/hr-human-resources-management-recruitment-260nw-2460979123.jpg",
    },
    {
        id: 6,
        content: <SkeletonSix />,
        title:"Student Login Panel",
        className: "md:col-span-1",
        thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9WdP7ZZ1Rxjvj-0encz2s_W343KRQpYrpQ&s",
    },
];
