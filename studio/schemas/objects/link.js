export default {
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    {
      name: "text",
      type: "string",
      title: "Link text",
    },
    {
      name: "link",
      type: "string",
      title: "Link destination",
    },
  ],
  preview: {
    select: {
      title: "link.text",
      link: "link.link",
    },
  },
};
