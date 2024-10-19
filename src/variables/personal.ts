const PERSONAL_ASSETS_PATH = "assets/personal/";

const firstName = "Almar";
const lastName = "Javier";
const profession = "Full-stack Developer";
const introduction = "I am a full-stack based in Philippines, specializing in creating innovative and user-friendly applications."

let links = {
  github: "https://github.com/Ladsyf",
  linkedin: "https://www.linkedin.com/in/almarjvr",
  curriculumvitae: "AlmarJavier-Resume 07-07-24.pdf",
  logo: "almar-logo.png"
};

links = {
  ...links,
  curriculumvitae: `${PERSONAL_ASSETS_PATH}${links.curriculumvitae}`,
  logo: `${PERSONAL_ASSETS_PATH}${links.logo}`,
}
const fullName = `${firstName} ${lastName}`;

export const personal = { firstName, lastName, fullName, profession, introduction, links };
