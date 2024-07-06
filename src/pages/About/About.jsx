import { useEffect, useState } from 'react';
import Service from '../About/Service'
import Testimonial from './Testimonial';
const servicesData = [  
    {
      "title": "Web design",
      "icon": "/images/icon-design.svg",
      "description": "I am currently learning web design."
    },
    {
      "title": "Web development",
      "icon": "/images/icon-dev.svg",
      "description": "I developed a website using HTML, CSS, and JavaScript, and I have knowledge of React."
    },
    {
        "title": "Data Structures and Algorithms(DSA)",
        "icon": "/images/icon-dev.svg",
        "description": "I possess a strong knowledge of Data Structures and Algorithms (DSA)."
      },
]

const About = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(()=>{
       fetch('testimonials.json').then(res => res.json()).then(data =>{
            // console.log(data)
            setTestimonials(data)
       });
    },[])

  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          I'm a proficient software developer who completed their Master of
          Computer Applications (MCA) in 2024 and their Bachelor of Computer
          Applications (BCA) in 2019.
        </p>
        <p>
          I possess a strong command of several programming languages and
          technologies, including C, Java, DSA, JavaScript, HTML, CSS, and
          knowledge of frameworks like React and languages like Python. My
          portfolio showcases my ability to develop functional and interactive
          applications, demonstrated through projects like a News Views Website,
          a To Do List website, a Tic-Tac-Toe game, a calculator, and a
          Rock-Paper-Scissors game.
        </p>
      </section>

      {/*service*/}
    <section className="service">
        <h2 className="h3 service-title">What I'm Doing</h2>
        <ul className='service-list'>
            {
                // servicesData.map((service, index) => (
                //     <p key={index}>{service.title}</p>
                // ))
                servicesData.map((service,index) => (
                    <Service key={index} title={service.title} icon={service.icon} description={service.description}/>
                ))
            }
        </ul> 
    </section>

    {/*Testimonials section*/}
    <section className='testimonials'>
        <h3 className='h3 testimonials-title'>Testimonials</h3>
        <ul className='testimonials-list has-scrollbar'>
            {
                testimonials.map((testimonial,index)=>(
                    <Testimonial key={index} name={testimonial.name} avatar={testimonial.avatar} testimonial={testimonial.testimonial} />
                ))
            }
        </ul>
    </section>

    </div>
  );
};

export default About;
