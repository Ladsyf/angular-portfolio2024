export interface ISkill {
  logo: string;
  name: string;
}

const SKILLS_ASSETS_PATH = "assets/skills/";
const getSkillsFilePath = (fileName: string) => `${SKILLS_ASSETS_PATH}${fileName}`

const _skills: ISkill[] = [
  {
    logo: "angular-icon.svg",
    name: "Angular"
  },
  {
    logo: "react-icon.svg",
    name: "React"
  },
  {
    logo: "dotnet-icon.svg",
    name: ".Net Core"
  },
  {
    logo: "nodejs-icon.svg",
    name: "Nodejs"
  },
  {
    logo: "laravel-icon.svg",
    name: "Laravel"
  },
  {
    logo: "mysql-icon.svg",
    name: "MySQL"
  },
  {
    logo: "mongodb-icon.svg",
    name: "MongoDB"
  },
  {
    logo: "sql-icon.svg",
    name: "SQL"
  },
  {
    logo: "php-icon.svg",
    name: "PHP"
  },
  {
    logo: "csharp-icon.svg",
    name: "C#"
  },
  {
    logo: "typescript-icon.svg",
    name: "TypeScript"
  },
  {
    logo: "javascript-icon.svg",
    name: "JavaScript"
  },
  {
    logo: "html-icon.svg",
    name: "HTML5"
  },
  {
    logo: "css-icon.svg",
    name: "CSS3"
  },
]

export const skills = _skills.map(x => {
  return {
    ...x,
    logo: getSkillsFilePath(x.logo)
  }
});
