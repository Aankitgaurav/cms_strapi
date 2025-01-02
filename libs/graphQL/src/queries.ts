import { gql } from '@apollo/client';

// Example query to fetch posts
export const GET_POSTS = gql`
  query GetPosts {
  posts {
    documentId
    title
    content
    slug
  }
}
`;