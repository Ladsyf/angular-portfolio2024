export interface ISkill {
  logo: string;
  name: string;
}

const skillsAssetPath = "assets/skills/";

export const skills: ISkill[] = [
  {
    logo: getSkillsFilePath("angular-icon.svg"),
    name: "Angular"
  },
  {
    logo: getSkillsFilePath("react-icon.svg"),
    name: "React"
  },
  {
    logo: getSkillsFilePath("dotnet-icon.svg"),
    name: ".Net Core"
  },
  {
    logo: getSkillsFilePath("nodejs-icon.svg"),
    name: "Nodejs"
  },
  {
    logo: getSkillsFilePath("laravel-icon.svg"),
    name: "Laravel"
  },
  {
    logo: getSkillsFilePath("mysql-icon.svg"),
    name: "MySQL"
  },
  {
    logo: getSkillsFilePath("mongodb-icon.svg"),
    name: "MongoDB"
  },
  {
    logo: getSkillsFilePath("sql-icon.svg"),
    name: "SQL"
  },
  {
    logo: getSkillsFilePath("php-icon.svg"),
    name: "PHP"
  },
  {
    logo: getSkillsFilePath("csharp-icon.svg"),
    name: "C#"
  },
  {
    logo: getSkillsFilePath("typescript-icon.svg"),
    name: "TypeScript"
  },
  {
    logo: getSkillsFilePath("javascript-icon.svg"),
    name: "JavaScript"
  },
  {
    logo: getSkillsFilePath("html-icon.svg"),
    name: "HTML5"
  },
  {
    logo: getSkillsFilePath("css-icon.svg"),
    name: "CSS3"
  },
]

function getSkillsFilePath(fileName: string) {
  return `${skillsAssetPath}${fileName}`;
}
