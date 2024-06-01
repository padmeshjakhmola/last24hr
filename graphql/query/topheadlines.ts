import { gql } from "@apollo/client";

export const topheadlines = gql`
  query {
    getNews {
      source {
        id
        name
      }
      author
      content
      description
      publishedAt
      title
      url
      urlToImage
    }
  }
`;
