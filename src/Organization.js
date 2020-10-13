import React from 'react';
import Repository from './Repository';

const Organization = (props) => {
  const {organization, errors} = props;
  console.log(props)
  if (errors) {
    return (
      <p>
        <strong>Something went wrong:</strong>
        {errors.map(err => err.messages).join('')}
      </p>
    )
  }
  return (
    <div>
      <p>
        <strong>Issues from Organization:</strong>
        <a href={organization.url}>{organization.name}</a>
      </p>
      <Repository repository={organization.repository}/>
    </div>
  ) 

};

export default Organization;