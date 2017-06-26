const projectStructure = {
  id: "",
  name: "",
  slug: "",
  shortDescription: "",
  year: "",
  image: "",
  projectUrl: "",
  maskLeft: {
    x: 0,
    y: 0,
  },
  maskRight: {
    x: 0,
    y: 0,
  },
  extended: {
    format: '',
    type: '',
    role: '',
    featuredImage: '',
    brief: '',
    imageSubBrief: '',
    headline: '',
    headlineBackgroundImage: '',
    fullCaseStudyLink: '',
    fullCaseStudyText: '',
    enableMockupBlocks: true,
    mockups: [],
  },
};

const projectSampleStructure = {
  id: '',
  name: '',
  shortDescription: '',
};

export default {
  projects: {
    currentProject: projectStructure,
    nextProjectsSample: [...projectSampleStructure],
    projectImages: {},
    projectSample: {},
  },
  ui: {
    isDisplayingLite: false,
    lockScroll: false,
    theme: "dark",
    isConsultingAProject: false,
    showFooterLeft: true,
    showFooterRight: true,
  },
  router: {},
};
