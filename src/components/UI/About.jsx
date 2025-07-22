import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <div className="text-lg leading-relaxed space-y-6">
          <p>
            I’m a results-driven <span className="font-semibold"> Full-Stack Developer </span> with over 6+ years of experience designing and delivering high-performance, scalable web applications. My expertise lies in building robust backend systems using <strong>Python (Django/FastAPI)</strong> and crafting sleek, responsive frontends with <strong>React</strong>, <strong>Tailwind CSS</strong>, and modern JavaScript ecosystems.
          </p>
          <p>
            From eCommerce platforms and SaaS dashboards to real-time applications, I’ve led end-to-end development of production-grade solutions that combine technical excellence with thoughtful UX. I prioritize <strong>clean architecture</strong>, <strong>reusable components</strong>, and <strong>performance optimization</strong> at every stage of the stack.
          </p>
          <p>
            Beyond shipping features, I stay deeply engaged in the tech community-contributing to open-source, refining UI/UX practices, and keeping up with the latest frameworks and patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
