import { HoverEffect } from "../cardHoverEffect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Advisor / Agent Management",
    description:
      "This module is meant for a management of advisors connected with a financial organisation as agents. The system can self-generate hierarchy for management and mapping to use with different services offered by the organisation.",
  },
  {
    title: "Deposits and Investments",
    description:
      "A system prepared for a financial institution wherein one can easily configure and manage all deposit products life Fixed deposits, Recurring Deposit and Monthly Income Scheme.",

  },
  {
    title: "Members Management",
    description:
      "Using this module one can easily handle member’s information of a society or multi-level marketing system for easy access to manage system members and can also develop hierarchy as per system input of various levels.",

  },
  {
    title: "Customer Relationship Management",
    description:
      "Complete CRM system to manage client database that handles complete information of respective client along with personal and contact details etc. One can easily search desired information using various available filters for easy reporting.",

  },
  {
    title: "Financial Products - Loans",
    description:
      "System is capable of handling various loan products for an easy management of interest calculations and penalty payment along with principal amount payable. A system for loan application and approval is maintained for an easy access of information",

  },
  {
    title: "Lead Management",
    description:
      "Complete solution to where you can capture details of new lead and system will automatically generates some unique details e.g. lead no. to communicate with the system in future. You maintain follow-ups with detailed remarks.",
  },
];
