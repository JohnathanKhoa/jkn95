export const emailMQ = async (email: string) => {
  const resume =
    "https://docs.google.com/document/d/1M-gvP145gU3COeSkQeEYHPavSPYaDqjoSUCsCg7A7qw/edit?tab=t.0";
  const details = {
    recipient: email,
    msgBody:
      "Hello! \nThanks for being interested in my services. I specialize in building Websites and Microservices.\n\n" +
      "Work Preferences: Remote, or Hybrid in LA/San Bernardino County (Local zipcode: 91709)\n" +
      "Contact Email: johnathan.k.nguyen.95@gmail.com \n" +
      "Cell: +1(909)-809-1905 \n" +
      `Resume: ${resume}`,
    subject: "Email exchange from Johnathan Nguyen @ https://jkn95dev.com",
  };
  console.log(JSON.stringify(details));
  const res = await fetch("https://amqp-1b09b6131ff7.herokuapp.com/sendMail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(details),
  });
  const body = await res;
  return body.json;
};

export const emailAndCredMQ = async (email: string) => {
  const details = {
    recipient: email,
    msgBody:
      "Cloud Web Service guest credentials:\nUsername: guest-user@jkn95.dev\nPassword: !retool1234\n\n" +
      "\nNurtree guest credentials:\nUsername: guest-user@jkn95.dev\nPassword: !spotify1234\n\n ",
    subject: "Guest credentials for demos from https://jkn95.dev",
  };
  console.log(JSON.stringify(details));
  const res = await fetch("https://amqp-1b09b6131ff7.herokuapp.com/sendMail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(details),
  });
  const body = await res;
  return body.json;
};
