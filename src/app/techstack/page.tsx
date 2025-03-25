import React from "react";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-balance  antialiased opacity-100 pt-10">
        <h1 className="">Tech Stack</h1>

        <div className="text-pretty text-center p-8">
          <div className="text-start">
            Languages: Java, JavaScript, TypeScript, HTML/Markdown,
            Tailwind/CSS, Python, SQL, Linux
          </div>

          <br />
          <br />
          <div className="text-start">
            Frontend: Angular, React, NextJS, Vercel, Retool
          </div>

          <br />
          <br />
          <div className="text-start">
            Backend: Spring Framework, MySQL, Oracle, MongoDB, JDBC, Hibernate,
            Microservices
          </div>

          <br />
          <br />
          <div className="text-start">AWS: Elastic Beanstalk, EC2, RDS, S3</div>

          <br />
          <br />
          <div className="text-start">Containerization: Docker, Kubernetes</div>

          <br />
          <br />
          <div className="text-start">Automation: Jenkins</div>

          <br />
          <br />
          <div className="text-start">
            Version Control: Github, Teamforge, Heroku
          </div>

          <br />
          <br />
          <div className="text-start">Testing: Cypress, JUnit, Postman</div>

          <br />
          <br />
          <div className="text-start">OS: Linux, Windows</div>

          <br />
          <br />
          <div className="text-start">IDE: IntelliJ, VSCode</div>
        </div>
      </div>
    </>
  );
}
