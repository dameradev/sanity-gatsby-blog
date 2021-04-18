export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "bannerImage",
      type: "picture",
      title: "Banner Image",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your blog for search engines and social media.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your blog.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "author",
      type: "reference",
      description: "Publish an author and set a reference to them here.",
      title: "Author",
      to: [{ type: "author" }],
    },

    {
      name: "footer",
      type: "footer",
      description: "Fill in the content of the footer here",
      title: "Footer",
    },

    {
      name: "blogPosts",
      type: "array",
      title: "Blog posts",
      of: [
        {
          type: "reference",
          to: {
            type: "post",
          },
        },
      ],
    },

    {
      name: "services",
      type: "array",
      title: "Services",
      of: [
        {
          type: "reference",
          to: {
            type: "post",
          },
        },
      ],
    },
  ],
};
