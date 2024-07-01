/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold mb-8 text-center ">About SAAED</h1>
      <div className="text-lg space-y-6 mb-12 leading-relaxed">
        <p className="">
          At SAAED, we pride ourselves on offering a diverse suite of coaching
          and consultation services to meet the unique needs of each client. Our{" "}
          <strong>Personal Coaching (Life Coaching)</strong> helps individuals
          achieve personal growth, balance, and fulfillment. Through{" "}
          <strong>Professional Coaching</strong>, we support career development
          by enhancing performance and guiding clients to reach their
          professional goals.
        </p>
        <p className="">
          Strengthen your interpersonal connections with our{" "}
          <strong>Relationship Coaching</strong>, designed to improve
          communication skills and foster more meaningful relationships. For
          those in leadership roles, our <strong>Executive Coaching</strong>{" "}
          focuses on developing leadership abilities and offering strategic
          support to navigate complex business challenges.
        </p>
        <p className="">
          Enhance your personal and professional effectiveness with our{" "}
          <strong>Emotional Intelligence (EIQ-2) Assessments</strong>, which
          provide in-depth evaluations to improve self-awareness and empathy.
          Our <strong>Effective Communication Skills Coaching</strong> equips
          individuals and teams with strategies to enhance clarity and impact in
          their interactions.
        </p>
        <p className="">
          We also offer <strong>Mental Health and Well-being Courses</strong>,
          promoting mental health awareness and stress management through
          specialized workshops. Additionally, we design{" "}
          <strong>Custom Programs for Organizational Development</strong> to
          improve team dynamics and foster a positive work culture.
        </p>
        <p className="">
          Beyond our coaching and training services, we actively collaborate
          with institutions and psychiatric clinics to conduct research and
          gather statistics on the effectiveness of our services. These
          collaborations focus on exploring the impact of coaching on mental
          health and organizational success, providing valuable insights to
          continually enhance our practices.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-12">
        <img
          src="https://images.unsplash.com/photo-1541614256854-6fbf99e006b5?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Coaching session"
          className="w-full lg:w-1/2 rounded-lg shadow-lg object-cover max-h-96"
        />
        <img
          src="https://images.unsplash.com/photo-1510535043828-3d1edc68071e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Consultation"
          className="w-full lg:w-1/2 rounded-lg shadow-lg object-cover max-h-96"
        />
      </div>
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14500.03473692369!2d46.6332502!3d24.6922282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d00bf0a7f2f%3A0x8f3fa3832e3ec787!2sLaysen%20Valley!5e0!3m2!1sen!2sae!4v1719859848575!5m2!1sen!2sae"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
