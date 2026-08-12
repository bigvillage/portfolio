export interface Experience {
  period: string;
  company: string;
  position: string;
  intro: string;
  categories: {
    title: string;
    items: string[];
  }[];
  technologies: string[];
}

export interface Project {
  number: string;
  type: string;
  title: string[];
  subtitle: string;
  period: string;
  description: string;
  details: {
    title: string;
    content: string;
  }[];
  technologies: string[];
}

export interface Skill {
  category: string;
  technologies: string;
}

export const experience: Experience = {
  period: "2023 — PRESENT",

  company: "새롬정보시스템",

  position: "SI / SM Developer",

  intro: "다양한 고객사의 그룹웨어 및 업무 시스템을 개발하고 운영했습니다.",

  categories: [
    {
      title: "SI",

      items: [
        "PMS 시스템 개발 및 운영",
        "대한적십자사 그룹웨어 개발",
        "SK엔펄스 데이터 마이그레이션",
        "SK마이크로웍스 데이터 마이그레이션",
      ],
    },

    {
      title: "SM",

      items: [
        "20여 개 고객사 그룹웨어 유지보수",
        "신규 기능 개발",
        "장애 원인 분석 및 대응",
        "고객 요구사항 분석 및 기능 개선",
      ],
    },
  ],

  technologies: [
    "Vue.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Linux",
  ],
};

export const projects: Project[] = [
  {
    number: "01",

    type: "PERSONAL PROJECT",

    title: ["Document", "Management System"],

    subtitle: "문서관리시스템",

    period: "2025 — PRESENT",

    description:
      "문서와 파일을 효율적으로 관리하기 위해 제작한 웹 기반 문서관리시스템입니다.",

    details: [
      {
        title: "PROBLEM",

        content:
          "기존 Express 기반 프로젝트의 구조를 개선하고 유지보수하기 좋은 구조로 변경할 필요가 있었습니다.",
      },

      {
        title: "APPROACH",

        content:
          "Express 서버를 NestJS와 TypeScript 기반으로 리빌딩하고 인증, 문서, 파일 기능을 모듈 단위로 분리했습니다.",
      },

      {
        title: "RESULT",

        content:
          "JWT 인증, 문서 검색, 파일 업로드와 다운로드 기능을 구현했습니다.",
      },
    ],

    technologies: [
      "Vue 3",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Elasticsearch",
      "AWS",
    ],
  },

  {
    number: "02",

    type: "WORK EXPERIENCE",

    title: ["Groupware", "System"],

    subtitle: "그룹웨어 개발 및 운영",

    period: "2023 — PRESENT",

    description:
      "다양한 고객사의 그룹웨어를 개발하고 운영하며 실제 업무 환경에 필요한 기능을 구현했습니다.",

    details: [
      {
        title: "PROBLEM",

        content:
          "고객사마다 서로 다른 업무 프로세스와 시스템 환경을 가지고 있었습니다.",
      },

      {
        title: "APPROACH",

        content:
          "고객 요구사항과 기존 시스템 구조를 분석하고 각 환경에 맞는 기능을 개발했습니다.",
      },

      {
        title: "RESULT",

        content:
          "20여 개 고객사의 시스템을 유지보수하며 다양한 업무 환경과 장애 상황을 경험했습니다.",
      },
    ],

    technologies: ["Vue.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
  },
];

export const skills: Skill[] = [
  {
    category: "FRONTEND",

    technologies:
      "Vue.js · Vue 2 · Vue 3 · TypeScript · JavaScript · Pinia · HTML · CSS",
  },

  {
    category: "BACKEND",

    technologies: "Node.js · Express.js · NestJS",
  },

  {
    category: "DATABASE",

    technologies: "MongoDB · MySQL · Elasticsearch",
  },

  {
    category: "INFRASTRUCTURE",

    technologies: "AWS · Linux · Nginx · PM2",
  },

  {
    category: "TOOLS",

    technologies: "Git · GitHub · Postman · Kibana",
  },
];
