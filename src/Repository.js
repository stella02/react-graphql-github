import React from 'react';

const Repository = ({repository, onFetchMoreIssues, onStarRepository}) =>{
  const {repository} = props;
  return (
    <div>
      <p>
        <strong>In Repository</strong>
        <a href={repository.url}>{repository.name} </a>
      </p>
      <button 
        type="button"
        onClick={() => onStarRepository(repository.id, repository.viewerHasStarred)}
      >
      {repository.viewerHasStarred? 'Unstar': 'Star'}
      </button>
      <ul>
        {repository.issues.edges.map(issue => (
          <li key={issue.node.id}>
            <a href={issue.node.url}>{issue.node.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Repository;