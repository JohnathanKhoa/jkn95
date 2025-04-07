import React from "react";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-balance text-xl text-white antialiased opacity-100 pt-10 ">
        {/* <h1 className="">Tech Stack</h1> */}

        <div className="text-pretty text-center p-8">
          <div className="text-start">
            Languages: Bash, Python, SQL, Java 17, JavaScript, TypeScript, HTML5, Markdown
            TailwindCSS 4
          </div>
          <br />
          <br />
          <div className="text-start">
            Frontend: React, NextJS, Redux, Zustand
          </div>
          <br />
          <br />
          <div className="text-start">
            Backend: Spring, REST, NodeJS
          </div>
          <br />
          <br />
          <div className="text-start">
            Database: MySQL, MSSQL, MongoDB
          </div>
          <br />
          <br />
          <div className="text-start">
            Security: Auth0, NextAuth
          </div>
          <br />
          <br />
          <div className="text-start">
            Deployment: Github, Docker, Heroku, Vercel
          </div>
          <br />
          <br />
          <div className="text-start">
            AWS: Elastic Beanstalk, EC2, RDS, S3, MQ
          </div>
          <br />
          <br />
          <div className="text-start">Messaging: RabbitMQ</div>
          {/* <br />
          <br />

          <div className="text-start">Automation: Jenkins, Autosys</div> */}
          {/* <br />
          <br />
          <div className="text-start">
            Version Control: Github
          </div> */}
          <br />
          <br />
          <div className="text-start">Testing: JUnit, Postman</div>
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
