export default {
  title: "Picture",
  name: "picture",
  type: "document",
  options: {
    hotspot: true, // <-- Defaults to false
  },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
    },
    {
      name: "picture",
      type: "image",
      title: "Picture",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: "attribution",
      type: "string",
      title: "Attribution",
    },
  ],
};
