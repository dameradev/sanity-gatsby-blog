export default {
  name: "aboutUs",
  type: "document",
  title: "About us",
  fields: [
    {
      name: "firstTitle",
      type: "string",
      title: "Title",
    },

    {
      name: "firstParagraph",
      type: "bodyPortableText",
      title: "Body",
    },

    {
      name: "secondTitle",
      type: "string",
      title: "Title",
    },

    {
      name: "secondParagraph",
      type: "bodyPortableText",
      title: "Body",
    },

    {
      name: "thirdTitle",
      type: "string",
      title: "Title",
    },

    {
      name: "thirdParagraph",
      type: "bodyPortableText",
      title: "Body",
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
