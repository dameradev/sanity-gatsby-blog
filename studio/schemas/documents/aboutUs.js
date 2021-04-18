export default {
  name: "aboutUs",
  type: "document",
  title: "About us",
  fields: [
    {
      name: "mainImage",
      type: "picture",
      title: "Main image",
    },

    {
      title: "Content",
      type: "array",
      name: "content",
      of: [{ type: "content" }],
    },
    {
      title: "People",
      type: "array",
      name: "people",
      of: [
        {
          type: "person",
        },
      ],
    },

    {
      title: "Perks",
      type: "array",
      name: "perks",
      of: [
        {
          type: "perk",
        },
      ],
    },

    {
      title: "Awards",
      type: "array",
      name: "awards",
      of: [
        {
          type: "award",
        },
      ],
    },
    {
      title: "Testamonials",
      type: "array",
      name: "testamonials",
      of: [
        {
          type: "testamonial",
        },
      ],
    },
  ],
};
