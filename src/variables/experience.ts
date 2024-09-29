const EXPERIENCE_ASSETS_PATH = "assets/experiences/";
const getExperiencesFilePath = (fileName: string) => `${EXPERIENCE_ASSETS_PATH}${fileName}`

export interface IExperience {
  title: string;
  duration: string;
  description: string;
  skillset: string;
  logo: string;
}

const _experiences: IExperience[] = [
  {
    title: "Infor PSSC",
    duration: "2023 - Present",
    description: "Software Engineer, Associate",
    skillset: "C# .Net, ReactJS, MS SQL Server",
    logo: "infor-logo.png"
  },
  {
    title: "Bulacan State University",
    duration: "2019 - 2023",
    description: "Bachelor of Science in Information Technology",
    skillset: "PHP, Angular, Laravel, TypeScript",
    logo: "bulsu-logo.png"
  },
]

export const experiences = _experiences.map(x => {
  return {
    ...x,
    logo: getExperiencesFilePath(x.logo)
  }
});
