import React from 'react';
import moment from 'moment';

import Style1 from "./styles/style1"
import Style2 from "./styles/style2"






const RepoCard = ({ repository = {}, type = "explore" }) => {

  const {
    owner,
    stargazers_count,
    full_name,
    description,
    updated_at,
    language,
    forks_count
  } = repository

  const image = owner.avatar_url

  const updatedAt = moment(updated_at).fromNow()

  const Component = type === "explore" ? Style1 : Style2

  return (
    <Component
      full_name={full_name}
      description={description}
      updatedAt={updatedAt}
      language={language}
      forks_count={forks_count}
      stargazers_count={stargazers_count}
      image={image}
    />
  );

}



export default RepoCard
