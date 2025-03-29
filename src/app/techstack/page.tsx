import React from "react";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-balance text-xl text-zinc-500 antialiased opacity-100 pt-10 font-mono">
        <h1 className="">Tech Stack</h1>

        <div className="text-pretty text-center p-8">
          <div className="text-start">
            Languages: Java, JavaScript, TypeScript, HTML/Markdown,
            Tailwind/CSS, Bash, Python, SQL
          </div>
          <br />
          <br />
          <div className="text-start">
            Frontend: Angular, React, NextJS, Retool, JSP, Thymeleaf
          </div>
          <br />
          <br />
          <div className="text-start">
            Backend: Maven, Spring Framework, Hibernate, Eureka, OpenFeign,
            Gateway, Batch, Load Balancer, NodeJS
          </div>
          <br />
          <br />
          <div className="text-start">
            Database: MySQL, MSSQL, Oracle, DynamoDB, MongoDB
          </div>
          <br />
          <br />
          <div className="text-start">
            Security: OAuth2.0, NextAuth, JWT, Session
          </div>
          <br />
          <br />
          <div className="text-start">
            Containerization & Deployment: Docker, Kubernetes, Heroku, Vercel
          </div>
          <br />
          <br />
          <div className="text-start">
            AWS: Elastic Beanstalk, EC2, RDS, S3, MQ
          </div>
          <br />
          <br />
          <div className="text-start">AMQP Messaging: RabbitMQ</div>
          <br />
          <br />

          <div className="text-start">Automation: Jenkins, Autosys</div>
          <br />
          <br />
          <div className="text-start">
            Version Control: Github, Teamforge, Bitbucket, GitLab
          </div>
          <br />
          <br />
          <div className="text-start">Testing: JUnit, Postman</div>
          <br />
          <br />
          <div className="text-start">OS: Linux (RHEL, Ubuntu), Windows</div>
          <br />
          <br />
          <div className="text-start">IDE: Eclipse, IntelliJ, VSCode</div>
        </div>
      </div>
    </>
  );
}
