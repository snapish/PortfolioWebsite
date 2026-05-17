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
  },
  {
    id: 'project-02',
    title: 'AFK SWS',
    description:
      'A pet project I made to get acquainted with OpenCV for use in video games. Designed to run for 4+ hours at a time, this script can play an MMO like a real person without being caught by bot detection.',
    stack: ['Python', 'OpenCV', 'TKinter'],
    role: 'Developer',
    timeline: '2021',
  },
  {
    id: 'project-03',
    title: 'Procedural Animations in UE5',
    description:
      'Created a skeleton project in Unreal Engine for using advanced math to animate a human character. Followed a course offered by Lincoln Margison for the majority of the work.',
    stack: ['Unreal Engine 5', 'Control Rig', 'Inverse Kinematics'],
    role: '3D Animator',
    timeline: '2024',
  },
  {
    id: 'project-04',
    title: 'Dookie Clicker',
    description:
      'An incremental game I made in Godot, and published to Steam. Parodying \'Cookie Clicker\', the player is able to scale their resources infinitely, and is encouraged to play daily.',
    stack: ['Godot Game Engine', 'GDScript', 'SteamWorks API'],
    role: 'Game Developer, Publisher',
    timeline: '2024-2025',
  },
  {
    id: 'project-05',
    title: 'Terraria Damage Tracker',
    description:
      'A mod for Terraria that tracks individual player\'s damage to boss monsters in a multiplayer environment.',
    stack: ['C#', 'Visual Studio'],
    role: 'Mod Developer',
    timeline: '2022',
  },
  {
    id: 'project-06',
    title: 'Glimmervoid',
    description:
      'A web tool used to search Magic: The Gathering cards. I worked alongside 2 other classmates, and did the majority of the front end development, and configured a wrapper for the API calls.',
    stack: ['REST APIs', 'Angular'],
    role: 'Front End Developer',
    timeline: '2019',
  },
    {
    id: 'project-07',
    title: 'Lucia\'s Bottle',
    description:
      'A 2D puzzle platformer game I developed for a 48hr game jam, alongside a texture artist and audio engineer. The game is fully playable in a web browser and on Windows.',
    stack: ['Godot'],
    role: 'Game Developer',
    timeline: '2024',
  },
]

export const experiences: Experience[] = [
  {
    title: 'Full Stack Engineer',
    company: 'GCI, Inc.',
    period: 'June-Oct 2025',
    description:
      'Worked on a small team for the Alaskan telecomms company GCI on their FastFone site. Though my time there was short I gained a decent understanding of in Ruby on Rails. My focus was mainly fixing unhandled errors in production code, and learning how to interact with their infrastructure.',
  },
  {
    title: 'QA Automation Engineer',
    company: 'Intel',
    period: '2021 - 2025',
    description:
      'Implemented component systems, refined accessibility patterns, and improved handoff quality between design and engineering.',
  },
  {
    title: 'Junior Web Developer',
    company: 'Nova Collective',
    period: '2021 - 2022',
    description:
      'Delivered responsive marketing pages and early product prototypes while learning modern JavaScript and UI architecture.',
  },
]
