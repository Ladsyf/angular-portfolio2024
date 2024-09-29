export interface IExperience {
  title: string;
  duration: string;
  description: string;
  skillset: string;
  logo: string;
}

export const experiences: IExperience[] = [
  {
    title: "Infor PSSC",
    duration: "2023 - Present",
    description: "Software Engineer, Associate",
    skillset: "C# .Net, ReactJS, MS SQL Server",
    logo: "assets/experiences/infor-logo.png"
  },
  {
    title: "Bulacan State University",
    duration: "2019 - 2023",
    description: "Bachelor of Science in Information Technology",
    skillset: "PHP, Angular, Laravel, TypeScript",
    logo: "assets/experiences/bulsu-logo.png"
  },
]
