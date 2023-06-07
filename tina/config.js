import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "5259e7b2-4d1b-4dd2-9eeb-2332a0ffee1b", // Get this from tina.io
  token: "1d9eedbc6488899395946bd6eaa80c3b0d09d07d", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
            {
                type: "boolean",
                name: "draft",
                label: "Is Draft",
                isBody: false
            },
            {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
            },
            {
                type: "datetime",
                name: "date",
                label: "Publish Date",
                isBody: false,
                required: true
            },
            {
                type: "rich-text",
                name: "summary",
                label: "Summary",
                isBody: false
            },
            {
                type: "string",
                name: "leadPhoto",
                label: "Lead Photo",
                isBody: false
            },
            {
                type: "string",
                name: "leadPhotoSource",
                label: "Lead Photo Source",
                isBody: false
            },
            {
                type: "rich-text",
                name: "body",
                label: "Body",
                isBody: true,
            }
        ],
      },
    ],
  },
});
