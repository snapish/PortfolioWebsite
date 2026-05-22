import type { Project, Experience } from '../types'

export const projects: Project[] = [
  {
    id: 'project-01',
    title: 'Ironman.gg',
    description:
      'One of my first real-world projects that I created. It\'s a web app for randomizing a character list for various fighting games. Still used monthly by thousands of people!',
    stack: ['Angular', 'TypeScript', 'Node', 'ExpressJS'],
    role: 'Full Stack Developer',
    timeline: '2019-2020',
    links: [
      { label: 'Live', href: 'https://ironman.gg', icon: '[]' },
      { label: 'GitHub', href: 'https://github.com', icon: '</>' },
    ],
  },
  {
    id: 'project-02',
    title: 'AFK SWS',
    description:
      'A pet project I made to get acquainted with OpenCV for use in video games. Designed to run for 4+ hours at a time, this script can play an MMO like a real person without being caught by bot detection.',
    stack: ['Python', 'OpenCV', 'TKinter'],
    role: 'Developer',
    timeline: '2021',
    links: [{ label: 'GitHub', href: 'https://github.com', icon: '</>' }],
  },
  {
    id: 'project-03',
    title: 'Procedural Animations in UE5',
    description:
      'Created a skeleton project in Unreal Engine for using advanced math to animate a human character. Followed a course offered by Lincoln Margison for the majority of the work.',
    stack: ['Unreal Engine 5', 'Control Rig', 'Inverse Kinematics'],
    role: '3D Animator',
    timeline: '2024',
    links: [
      { label: 'Course', href: 'https://www.youtube.com', icon: '()' },
      { label: 'GitHub', href: 'https://github.com', icon: '</>' },
    ],
  },
  {
    id: 'project-04',
    title: 'Dookie Clicker',
    description:
      'An incremental game I made in Godot, and published to Steam. Parodying \'Cookie Clicker\', the player is able to scale their resources infinitely, and is encouraged to play daily.',
    stack: ['Godot Game Engine', 'GDScript', 'SteamWorks API'],
    role: 'Game Developer, Publisher',
    timeline: '2024-2025',
    links: [
      { label: 'Steam', href: 'https://store.steampowered.com', icon: '[]' },
      { label: 'GitHub', href: 'https://github.com', icon: '</>' },
    ],
  },
  {
    id: 'project-05',
    title: 'Terraria Damage Tracker',
    description:
      'A mod for Terraria that tracks individual player\'s damage to boss monsters in a multiplayer environment.',
    stack: ['C#', 'Visual Studio'],
    role: 'Mod Developer',
    timeline: '2022',
    links: [{ label: 'GitHub', href: 'https://github.com', icon: '</>' }],
  },
  {
    id: 'project-06',
    title: 'Glimmervoid',
    description:
      'A web tool used to search Magic: The Gathering cards. I worked alongside 2 other classmates, and did the majority of the front end development, and configured a wrapper for the API calls.',
    stack: ['REST APIs', 'Angular'],
    role: 'Front End Developer',
    timeline: '2019',
    links: [{ label: 'GitHub', href: 'https://github.com', icon: '</>' }],
  },
  {
    id: 'project-07',
    title: 'Lucia\'s Bottle',
    description:
      'A 2D puzzle platformer game I developed for a 48hr game jam, alongside a texture artist and audio engineer. The game is fully playable in a web browser and on Windows.',
    stack: ['Godot'],
    role: 'Game Developer',
    timeline: '2024',
    links: [
      { label: 'Play', href: 'https://itch.io', icon: '[]' },
      { label: 'GitHub', href: 'https://github.com', icon: '</>' },
    ],
  },
  {
    id: 'project-08',
    title: 'Pi-Hole',
    description:
      'Used a Raspberry Pi as a DNS filter to block ads on a per-device basis. All traffic on the network is checked by the device, and if the network request is coming from a known advertising/malicious domain it is sent to the ether.',
    stack: ['Raspberry Pi Zero', 'Networking'],
    role: 'Tutorial Follower',
    timeline: '2026',
    links: [
      { label: 'Docs', href: 'https://pi-hole.net', icon: '[]' },
      { label: 'GitHub', href: 'https://github.com/pi-hole/pi-hole', icon: '</>' },
    ],
  },
]

export const experiences: Experience[] = [
  {
    title: 'Full Stack Engineer',
    company: 'GCI, Inc.',
    period: 'June-Oct 2025',
    description:
      'Worked on an 8 person team for the Alaskan telecomms company GCI on their FastFone website. I was designated to fix as many unhandled errors in production as possible. My focus was mainly learning the basics and conventions of Ruby on Rails. Though my time there was short, I gained a good understanding of what kind of resposibilities a full stack engineer has.',
    links: [{ label: 'Company Site', href: 'https://www.gci.com', icon: '[]' }],
  },
  {
    title: 'QA Automation Engineer',
    company: 'Intel',
    period: '2021 - 2025',
    description:
      'Primarily focused on QA automation and mitigating issues with the products before an update is shipped. I worked on two projects, Intel eXtreme Tuning Utility (XTU), and Intel Application Opimization (APO). For a more granular explanation of my job duties see my resume.',
    links: [{ label: 'Company Site', href: 'https://www.intel.com', icon: '[]' }],
  },
  {
    title: 'AI Engineer',
    company: 'Central Boiler',
    period: '2023 - 2024',
    description:
      'Brought on as a contractor to find business applications of AI tools. Things like AI assisted coding were just becoming mainstream, and it was my job to research how these things work under the hood, then present them to the IT department. \nAdditionally, I created an ARIMA model prediction model used to forecast sales numbers. I did this in Python by aggregating yearly sales data, relevant data known to affect sales, and trained the model based on that data.',
    links: [{ label: 'Company Site', href: 'https://centralboiler.com', icon: '[]' }],
  },
]
