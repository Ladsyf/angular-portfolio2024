export interface IProject {
  title: string;
  fullTitle: string;
  subheading: string;
  tech: string[];
  logo?: string;
  date: Date;
  hexColor: string;
  thumbnail: string;
  paragraphs: Array<IProjectParagraph | string>;
  references: IProjectReference[];
}

export interface IProjectReference {
  name: string;
  link: string;
}

export interface IProjectParagraph {
  description: string;
  photo: string;
}

const PROJECT_ASSETS_PATH = "assets/projects/";

const getProjectFilePath = (filename: string) => `${PROJECT_ASSETS_PATH}${filename}`;

const _projects: IProject[] = [
  {
    title: "BLSD",
    fullTitle: "BLSD Website",
    subheading: "Landing page for Bridging Leaders for Sustainable Development Inc.",
    date: new Date(2023, 8),
    logo: "blsd-logo.png",
    tech: ["Reactjs", "Nextjs", "Shadcn", "Laravel", "MySql", "TailwindCss"],
    hexColor: "#0284C7",
    thumbnail: "blsd-thumbnail.png",
    paragraphs: [
      `This project includes client and administrator content management system, where their administrators can update, delete and add contents in their website (for privacy purposes, I won't be showing the admin pages). The main website has pages: Landing page, programs page, about page, blogs, and more pages in resources.`,
      {
        photo: "blsd-description1.png",
        description: "Landing Page",
      },
      {
        photo: "blsd-description2.png",
        description: "Programs Page"
      },
      {
        photo: "blsd-description3.png",
        description: "About Page"
      },
      {
        photo: "blsd-description4.png",
        description: "Blogs"
      }
    ],
    references: [
      {
        name: "Website",
        link: "https://blsd.asia/"
      }
    ]
  },
  {
    title: "CTES",
    fullTitle: "Capstone Titles Evaluation System",
    subheading: "Capstone Title Proposal Evaluation system for BulSu IT Students",
    logo: "",
    tech: [],
    date: new Date(2023, 4),
    hexColor: "#D46935",
    thumbnail: "",
    paragraphs: [],
    references: []
  },
  {
    title: "ENVote",
    fullTitle: "ENVote: Online Voting System",
    subheading: "Online Voting System for BPC SG and SSG Election",
    logo: "",
    tech: [],
    date: new Date(2023, 4),
    hexColor: "#017106",
    thumbnail: "",
    paragraphs: [],
    references: []
  }
];

export const projects: IProject[] = _projects.map(x => {
  const paragraphs = x.paragraphs.map(y => {
    const paragraph = (y as IProjectParagraph);
    if (paragraph.photo == null) return y;

    return {
      ...paragraph,
      photo: getProjectFilePath(paragraph.photo)
    };
  });

  const logo = x.logo != null ? getProjectFilePath(x.logo) : undefined;
  const thumbnail = getProjectFilePath(x.thumbnail);

  return {
    ...x,
    logo,
    thumbnail,
    paragraphs
  };
});
