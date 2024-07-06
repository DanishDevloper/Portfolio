import React from "react";
import { FaBookReader } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import IntCer from "./IntCer";
import SkillItem from "./SkillItem";
const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      {/* Education */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Master Of Computer Application (MCA)"
            mark="8.9 CGPA"
            date="2022 - 2024"
            description="Kalinga Institute of Industrial Technology,Bhubaneswar(Odisha)"
          />

          <TimelineItem
            title="Bachelor Of Computer Application (BCA)"
            mark="67.9 %"
            date="2016 - 2019"
            description="S N Sinha College, Jehanabad(Bihar)"
          />
          <TimelineItem
            title="Intermediate"
            mark="60 %"
            date="2014 - 2016"
            description="Hadi Hashmi Senior Secondary(+2)School, Gaya(Bihar)"
          />
          <TimelineItem
            title="Matric"
            mark="61 %"
            date="2013 - 2014"
            description="High School Tehta, Tehta(Bihar)"
          />
        </ol>
      </div>
      {/* Expricence section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Internship/Certificates</h3>
        </div>
        <ol className="timeline-list">
          <IntCer
            title="SAP ABAP"
            duration="2 Oct - 30 Dec"
            description="I have completed an intensive SAP ABAP training program with TechnoHub from October 2 to December 30. During this period, I gained substantial knowledge of T-code and modules, and developed a solid understanding of SAP ABAP concepts and applications."
          />
        </ol>
      </div>

      {/* Skill section */}
       <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
            <SkillItem
            title="C" value={80}/>
            <SkillItem
            title="Java" value={85}/>
            <SkillItem
            title="DSA" value={80}/>
            <SkillItem
            title="React" value={60}/>
            <SkillItem
            title="HTML" value={90}/>
            <SkillItem
            title="CSS" value={85}/>
            <SkillItem
            title="JavaScript" value={70}/>
            <SkillItem
            title="SAP ABAP" value={75}/>
            <SkillItem
            title="Python" value={70}/>
        </ul>
       </div>
    </section>
  );
};

export default Resume;
