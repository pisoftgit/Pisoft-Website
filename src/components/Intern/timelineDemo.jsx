import React from "react";
import { Timeline } from "./timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Expert Guidance",
            content: (
                <div>
                    <p
                        className="mb-8 md:text-xl font-jr text-blue-950 sm:text-sm dark:text-blue-950">
                        Throughout your internship, our experienced professionals will mentor you at every step, sharing valuable insights and knowledge to help you navigate the IT landscape. You’ll gain hands-on experience in a real-world setting, honing your skills effectively
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://media.istockphoto.com/id/607463118/photo/industrial-designers-at-the-office-discussing-project-on-the-computer.jpg?s=612x612&w=0&k=20&c=XynvP8ispRkfv9fy-iYqcUbtHgkDNGQ1_-JFTXyHFdU="
                            alt="Expert guidance 1"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                        <img
                            src="https://st4.depositphotos.com/4218696/28233/i/450/depositphotos_282335542-stock-photo-student-looking-on-board-in.jpg"
                            alt="Expert guidance 2"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                    </div>
                </div>
            ),
        },
        {
            title: "Hands-On Experience",
             content: (
                <div>
                    <p
                        className="mb-8 md:text-xl font-jr text-blue-950 sm:text-sm dark:text-blue-950">
                       Engage directly with live projects, allowing you to apply your theoretical knowledge in practical scenarios. This immersive experience is invaluable for building confidence and competence in your chosen field.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://media.istockphoto.com/id/1206796363/photo/ai-machine-learning-hands-of-robot-and-human-touching-on-big-data-network-connection.jpg?s=612x612&w=0&k=20&c=xIX5Bz7h50B83cCZG_gXkyZSOu-mG93DtOcNK7RNEAo="
                            alt="Hands-On Experience 1"
                            width={500}
                            height={500}
                            className="h-20 border-1 border-blue-950 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                        <img
                            src="https://s39613.pcdn.co/wp-content/uploads/2020/03/creating-experiential-learning-opp.jpg"
                            alt="Hands on Experience 2"
                            width={500}
                            height={500}
                            className="h-20 border-1 border-blue-950 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                    </div>
                </div>
            ),
        },
        {
            title: "Live Project",
             content: (
                <div>
                    <p
                        className="mb-8 md:text-xl font-jr text-blue-950 sm:text-sm dark:text-blue-950">
                        You'll have the opportunity to work on live projects, which you can showcase or submit to your college or university. This practical experience will significantly enhance your portfolio and academic credentials.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://www.financialexpress.com/wp-content/uploads/2023/04/APIS-and-NxtWave-image-27.jpg?w=440"
                            alt="live project 1"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D12AQEV6aY_1vN--g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702182479435?e=2147483647&v=beta&t=vMJlxzOXng0jcawcLRyNliuJVgTHAZwMgDrRgI157MI"
                            alt="live project 2"
                            width={500}
                            height={500}
                            className="h-20  w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                    </div>
                </div>
            ),
        },
         {
            title: "Skill Enhancement",
            content: (
                <div>
                    <p
                        className="mb-8 md:text-xl font-jr text-blue-950 sm:text-sm dark:text-blue-950">
                        We are dedicated to your professional development. Our program focuses on enhancing your aptitude, communication, and other essential skills to ensure you become a highly employable candidate
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwVUA_PoLA20OOS0QiOgDvr95yzxtoSdVqbavdXxBwoxDCL-1RTzQySgcw5KnwQ1ZTLIlhMrVWkgRfNwhu1l1U6WUW91SlqQYKJFcxIsroXskusIbGFH5mbLqoEpyLs_8vTFNrBbHWRo2j0_NPvGqEk5afttnFEJDz1kLdWMy2SHGnuFyUhyCNkZdBeoY/w640-h426/skill_develop_01.jpg"
                            alt="skill enhacement 1"
                            width={500}
                            height={500}
                            className="h-20  w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                        <img
                            src="https://t3.ftcdn.net/jpg/11/53/88/92/360_F_1153889284_60us83qROLAVe2KVx9Exn2sDYtyUGJWx.jpg"
                            alt="skill enhancement 2"
                            width={500}
                            height={500}
                            className="h-20  w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                    </div>
                </div>
            ),
        },
        {
            title: "Path to full time employment",
             content: (
                <div>
                    <p
                        className="mb-8 md:text-xl font-jr text-blue-950 sm:text-sm dark:text-blue-950">
                       Exceptional interns who demonstrate their skills and commitment may be considered for full-time positions within our organization, providing a seamless transition from intern to employee.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://cdn.prod.website-files.com/652d2475f39e846f2116f071/6540dd798e2467fe892126d9_6539099ff6375f401d8e5120_people-office-analyzing-checking.webp"
                            alt="Path to full time employment 1"
                            width={500}
                            height={500}
                            className="h-20  w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                        <img
                            src="https://res.cloudinary.com/highereducation/images/c_fill,f_auto,fl_lossy,q_auto,g_center,h_512/v1659632011/BestColleges.com/developers-working-on-computer_44097a2b44/developers-working-on-computer_44097a2b44.jpg"
                            alt="Path to full time employment 2"
                            width={500}
                            height={500}
                            className="h-20  w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                    </div>
                </div>
            ),
        },
        {
            title: "Recognition and rewards",
             content: (
                <div>
                    <p
                        className="mb-8 md:text-xl font-jr text-blue-950 sm:text-sm dark:text-blue-950">
                        Outstanding performance during your internship may earn you the “Best Intern Award,” recognizing your hard work and dedication. This accolade will boost your professional profile as you advance in your career.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://www.crewhu.com/hubfs/employee-rewards-recognition.jpg"
                            alt="Recognition and rewards 1"
                            width={500}
                            height={500}
                            className="h-20  w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                        <img
                            src="https://imageio.forbes.com/specials-images/imageserve/62602bba96f40df576fc46ac/Employee-recognition-is-more-crucial-than-ever-/960x0.jpg?format=jpg&width=960"
                            alt="Recognition and rewards 2"
                            width={500}
                            height={500}
                            className="h-20  w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                    </div>
                </div>
            ),
            
        },
         {
            title: "Certificate Opportunities",
             content: (
                <div>
                    <p
                        className="mb-8 md:text-xl font-jr text-blue-950 sm:text-sm dark:text-blue-950">
                        Interning with us allows you to earn two prestigious certifications: one for successfully completing your internship and another as an experience certificate, adding significant value to your resume.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://wallpapersok.com/images/high/choosing-career-opportunities-9khwzvy7e7rmx0yo.jpg"
                            alt="Certificate Opportunities 1"
                            width={500}
                            height={500}
                            className="h-20  w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                        <img
                            src="https://www.shutterstock.com/image-photo/human-resources-recruitment-hiring-concept-600nw-2488695797.jpg"
                            alt="Certificate Opportunities 2"
                            width={500}
                            height={500}
                            className="h-20  w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                    </div>
                </div>
            ),
            
        },
         {
            title: "Team Collaboration",
             content: (
                <div>
                    <p
                        className="mb-8 md:text-xl font-jr text-blue-950 sm:text-sm dark:text-blue-950">
                        Experience working in a collaborative team environment, enhancing your teamwork and interpersonal skills, which are vital in any workplace.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://media.istockphoto.com/id/1075972590/vector/hand-united-together-form-lines-triangles-and-particle-style-design-illustration-vector.jpg?s=612x612&w=0&k=20&c=FhGyRn8ThLncMbogiXDRBOd72lLNb-I7gSiKE3gnPNY="
                            alt="Team Collaboration 1"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                        <img
                            src="https://thumbs.dreamstime.com/b/teamwork-team-together-collaboration-business-communication-outd-outdoors-concept-48568990.jpg"
                            alt="Team Collaboration 2"
                            width={500}
                            height={500}
                            className="h-20  w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
                    </div>
                </div>
            ),
            
        },
    ];
    return (
        <div className="relative w-full">
            <Timeline data={data} />
        </div>
    );
}
