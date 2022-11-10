export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: "title",
        title: "Title",
        description: "Title of skill",
        type: "string"
      },
      {
        name: "progress",
        title: "Progress",
        type: "string",
        description: "Technologie skills",
        validation: Rule => Rule.required().min(10).max(80)
      },
      {
        name: "image",
        title: "Image",
        type: "string",
        options: {
          hotspot: true,
        },
      },
    ],
  }
  