import GitHubContributions from "@/components/github-stats";
import Links from "@/components/Links";
import About from "@/components/About";
import ProfileImage from "@/components/ProfileImage";

export default function Home() {
  return (
    <div className="flex flex-col mb-16 gap-3 items-center justify-center w-screen  overflow-hidden scrollbar-hide text-slate-500">
      <GitHubContributions />
      <ProfileImage />
      <About />
      <Links />
    </div>
  );
}
