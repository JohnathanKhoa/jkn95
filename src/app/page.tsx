"use client";
import Image, { type ImageProps } from "next/image";
import { Container } from "@/components/tailwind-plus-template/Spotlight/components/Container";
import Link from "next/link";
import { Card } from "@/components/tailwind-plus-template/Spotlight/components/Card";
import clsx from "clsx";
import { Button } from "@/components/tailwind-plus-template/Spotlight/components/Button";
import { article } from "@/components/jkn95/Articles";

import {
  GitHubIcon,
  LinkedInIcon,
} from "@/components/tailwind-plus-template/Spotlight/components/SocialIcons";
import Atlas from "@/public/images/logos/atlas.png";

import BFire from "@/public/images/logos/Bfire.jpeg";
import Fmac from "@/public/images/logos/fmac.png";
import image1 from "@/public/images/photos/studio.png";
import image2 from "@/public/images/photos/protocol.png";
import image3 from "@/public/images/photos/commit.png";
import image4 from "@/public/images/photos/pocket.png";
import image5 from "@/public/images/photos/keynote.png";

import GitHubContributions from "@/components/jkn95/GitHubContributions";
import { useState } from "react";
import ProfileImage from "@/components/jkn95/ProfileImage";

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Article({ article }: any) {
  return (
    <Card as="article">
      <Card.Title href={article.href}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        #{article.hashtag}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      {article.href && <Card.Cta>Nurtree</Card.Cta>}
    </Card>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Newsletter() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    //onInputChange(event.target.value); // Pass the value to the parent component
  };
  return (
    <form
      action={`/email/${encodeURIComponent(inputValue)}`}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 animate-fade"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Exchange emails</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        I'll send over email with my resume and contact information.
      </p>

      <div className="mt-6 flex">
        <input
          value={inputValue}
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-hidden sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Send
        </Button>
      </div>
    </form>
  );
}

interface Role {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  let startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === "string" ? role.end : role.end.label;
  let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: "Freddie Mac",
      title: "Consultant - Contract/Hybrid",
      logo: Fmac,
      start: "2023",
      end: {
        label: "2025",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Beaconfire Inc",
      title: "Software Engineer - Remote",
      logo: BFire,
      start: "2019",
      end: "2023",
    },
    {
      company: "Atlas",
      title: "Java Developer - Onsite",
      logo: Atlas,
      start: "2017",
      end: "2019",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 animate-fade">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="https://docs.google.com/document/d/1M-gvP145gU3COeSkQeEYHPavSPYaDqjoSUCsCg7A7qw/edit?usp=sharing"
        target="_blank"
        download="JohnathanKhoaNguyenResume.pdf"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  //let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9 animate-fade delay-700">
        <div className="max-w-2xl">
          <div className="flex flex-row gap-4">
            <div>
              <ProfileImage />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Coding enthusiast, web developer, software engineer
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                I’m Johnathan, a full-stack developer based in Chino Hills,
                California. I like to build Websites and Microservices.
              </p>
            </div>
          </div>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            /> */}
            <SocialLink
              href="https://github.com/JohnathanKhoa"
              aria-label="Follow on GitHub"
              target="_blank"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/johnawin/"
              aria-label="Follow on LinkedIn"
              target="_blank"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <div>
        <GitHubContributions />
      </div>
      <Container className="mt-24 md:mt-28 animate-fade">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16 animate-fade">
            {article.map((article) => (
              <Article key={article.title} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
