export default {
  name: "footer",
  type: "object",
  title: "Footer",
  fields: [
    {
      name: "about",
      type: "string",
      title: "About us",
    },
    {
      name: "aboutDescription",
      type: "string",
      title: "About us description",
    },
    {
      name: "contact",
      type: "string",
      title: "Contact",
    },

    {
      name: "contactDescription",
      type: "array",
      title: "Contact description",
      of: [
        {
          type: "string",
          name: "contact-entity",
        },
      ],
    },
    {
      name: "quickLinksTitle",
      type: "string",
      title: "Quick Links",
    },
    {
      name: "quickLinks",
      type: "array",
      title: "Quick Links",
      of: [
        {
          type: "link",
        },
      ],
    },
    {
      name: "copyright",
      type: "string",
      title: "Copyright",
    },
  ],
};
