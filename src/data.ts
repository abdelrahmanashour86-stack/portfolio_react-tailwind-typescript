export type Own = { shot: number; type: string; title: string; desc: string; live: string; gh: string };
export type Entry = { tag: string; title: string; desc: string; url?: string };
export type Job = { title: string; meta: string; text: string };

export const EMAIL = "abdelrahmanashour86@gmail.com";

export const skills: [string, string][] = [
  ["Languages", "Python, C#, Java, JavaScript, TypeScript, PHP, Assembly"],
  ["Web", "HTML, CSS, JavaScript, TypeScript, React, Vite, Tailwind CSS, PHP"],
  ["Security", "Web penetration testing, XSS, SQL injection, bug bounty hunting"],
  ["Tools", "Kali Linux, Nmap, Wireshark, Metasploit, Nessus, VMware, VirtualBox"],
  ["Foundations", "Networks, operating systems, computer organization and architecture"],
  ["Automation", "Python file-system automation with os, shutil and pathlib"],
];

export const jobs: Job[] = [
  { title: "Front-End Dev Trainee", meta: "NTI and Digital Egypt Youth, March to May 2026", text: "Intensive web design and development program." },
  { title: "XSS Vulnerability Specialist", meta: "PortSwigger Web Security Academy", text: "Mastered advanced cross-site scripting techniques by solving 100% of the XSS labs." },
  { title: "Security Researcher", meta: "Bug bounty hunting", text: "Identifying web vulnerabilities and securing applications through active bug bounty hunting." },
  { title: "Cybersecurity Trainee", meta: "National Telecommunication Institute (NTI), September 2025", text: "Intensive cybersecurity training." },
];

export const own: Own[] = [
  { shot: 0, type: "Dashboard", title: "Bounty Radar, React edition", desc: "A threat intelligence and bug bounty aggregator for security researchers. It pulls live cybersecurity news, vulnerability write-ups and hacker rankings into a Red Team-inspired dashboard. Built with React, Vite and Tailwind CSS v4, with a responsive UI and a dark/light toggle.", live: "https://bounty-radar-react-edition.vercel.app/", gh: "https://github.com/abdelrahmanashour86-stack/bounty-radar-react-edition" },
  { shot: 1, type: "Dashboard", title: "Bounty Radar, vanilla JS", desc: "The original build of the platform: live cybersecurity news, the latest vulnerability write-ups and global hacker rankings, built entirely with vanilla JavaScript for performance and clean architecture.", live: "https://abdelrahmanashour86-stack.github.io/bounty-radar-platform/", gh: "https://github.com/abdelrahmanashour86-stack/bounty-radar-platform" },
  { shot: 2, type: "Landing page", title: "Botol", desc: "A responsive, modern landing page focused on clean design and a smooth user experience, built with core front-end technologies.", live: "https://abdelrahmanashour86-stack.github.io/botol-landing-page/", gh: "https://github.com/abdelrahmanashour86-stack/botol-landing-page" },
  { shot: 3, type: "Landing page", title: "Iron", desc: "A sleek, high-performance landing page designed to convert visitors, with an interactive interface and clean, maintainable code.", live: "https://abdelrahmanashour86-stack.github.io/iron-landing-page/", gh: "https://github.com/abdelrahmanashour86-stack/iron-landing-page" },
];

export const live: Entry[] = [
  { tag: "Website design, WordPress", title: "infogatee.com", desc: "Design for an Arabic articles website: a hero with search, category browsing, article rows for every section and a simplified admin dashboard for publishing.", url: "https://infogatee.com" },
  { tag: "Arabic theme, WordPress", title: "adaa11.com", desc: "Full Arabic localization of the Delta theme, covering the public site and the admin dashboard, with the original design left untouched.", url: "https://adaa11.com" },
];

export const other: Entry[] = [
  { tag: "Academic research", title: "Cyber-deception framework", desc: "A group research paper, written in LaTeX, that proposes a reproducible framework for comparing cyber-deception techniques by effectiveness, cost and stealthiness." },
  { tag: "Freelance, PowerPoint", title: "Arabic dashboard update", desc: "Added a new achievements section to an Arabic PowerPoint dashboard by editing the file’s XML directly, so the original styling stayed exactly as it was." },
];

export type Service = { title: string; text: string; icon: string };

export const services: Service[] = [
  { title: "Websites and web apps", text: "Fast, responsive React and TypeScript front ends, dashboards and landing pages that look sharp on every screen.", icon: "M16 18l6-6-6-6M8 6l-6 6 6 6" },
  { title: "WordPress and Arabic localization", text: "Custom WordPress dashboards, theme changes and full Arabic localization, from the public site to the admin.", icon: "M3 5h18v14H3zM3 10h18M9 10v9" },
  { title: "Web security testing", text: "Hands-on testing for XSS and other web vulnerabilities, so problems are found before attackers find them.", icon: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" },
  { title: "Python automation", text: "Python scripts that take repetitive file and data work off your plate.", icon: "M13 2L4 14h7l-1 8 9-12h-7z" },
];

export const stack: string[] = ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Python", "PHP", "C#", "Java", "Kali Linux", "Nmap", "Wireshark", "Metasploit", "Nessus"];

export const stats: [string, string][] = [
  ["6", "live projects online"],
  ["4", "open-source repos on GitHub"],
];
