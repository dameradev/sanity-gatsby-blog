export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605854999f77cfd33ecc186f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-rihicc7x",
                  apiId: "6f2e05a9-96be-45c7-8c2c-da83a5bb1951",
                },
                {
                  buildHookId: "60585499b16f0817bfaa6f1d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-yj8ivn6j",
                  apiId: "5478fe93-103e-4895-bd15-5dff2a899bd3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dameradev/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-yj8ivn6j.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
