import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@CMS-POC/graphQL';

const App = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Function to render content (assuming content is an array of paragraphs)
  const renderContent = (content: any[]) => {
    return content.map((block, index) => {
      if (block.type === 'paragraph') {
        return (
          <p key={index}>
            {block.children.map((child: any, childIndex: number) => (
              <span key={childIndex}>{child.text}</span>
            ))}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.posts.map((post: any) => (
          <li key={post.documentId}>
            <h2>{post.title}</h2>
            {renderContent(post.content)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
