export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string"
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "company",
      title: "Company",
      type: "text",
    },
    {
      name: "startDate",
      title: "StartDate",
      type: "date",
      by: [
        {field: 'startDate', direction: 'asc'}
      ]
    },
    {
      name: "endDate",
      title: "EndDate",
      type: "date",
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: {type: "skill"} }]
    },
    {
      name:"points",
      title: "Points",
      type:"array",
      of: [{type: "string"}],
    },
  ],
}
