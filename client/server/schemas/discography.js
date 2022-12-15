export default {
  name: "discography",
  title: "Discography",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Album title",
      type: "string"
    },
    {
      name: "albumImg",
      title: "Album image",
      type: "image",
      fields: [
        {
          name: 'caption',
          title: "Caption",
          type: "string"
        },
        {
         name: "attribution",
         title: "Attribution",
         type: "string"
        }
      ]
    },
    {
      name: "details",
      title: "Details",
      type: "string"
    },
  ]
}