export default {
  name: "content",
  type: "object",
  title: "content",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },

    {
      name: "text",
      type: "bodyPortableText",
      title: "Body",
    },
    {
      name: "image",
      type: "picture",
      title: "Image",
    },
  ],
};
