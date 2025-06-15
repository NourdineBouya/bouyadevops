export default {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title" },
      },
      {
        name: "excerpt",
        title: "Excerpt",
        type: "text",
      },
      {
        name: "body",
        title: "Body",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "coverImage",
        title: "Cover Image",
        type: "image",
      },
      {
        name: "keywords",
        title: "Keywords",
        type: "array",
        of: [{ type: "string" }],
      },
    ],
  };
  