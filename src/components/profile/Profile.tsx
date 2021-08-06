import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mediaQuery } from "../../lib/styles/media";
import { getGithubProfile, GithubProfile } from "../../lib/api/github";
import Skeleton from "./Skeleton";
import Avatar from "./Avatar";

const Block = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  flex-wrap: wrap;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  .name {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 300;
    color: rgb(33, 37, 41);
    word-break: break-all;
  }
  .bio {
    white-space: pre-wrap;
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: 600;
    margin-top: 0.25rem;
    color: rgb(73, 80, 87);
    letter-spacing: -0.004em;
    word-break: break-all;
  }
  ${mediaQuery(944)} {
    ul {
      display: none;
    }
  }
  ${mediaQuery(767)} {
    ul {
      display: none;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    li {
      margin-left: 0;
      margin-right: 40px;
    }
  }
`;

const Profile = () => {
  // const user = useGithubProfileQuery();
  const [user, setUser] = useState<GithubProfile>(null);

  useEffect(() => {
    getGithubProfile().then(res => {
      setUser(res);
    });
  }, []);

  if (user === null) {
    return (
      <Block>
        <Skeleton />
      </Block>
    );
  }

  return (
    <Block>
      <Avatar avatarUrl={user.avatar_url} />
      <Content>
        <div className="name">{user.name}</div>
        {/* <ul>
          <li className="repositories">Repositories: {user.public_repos}</li>
          <li className="followers">Followers: {user.followers}</li>
          <li className="following">Following: {user.following}</li>
        </ul> */}
        <div className="bio">{user.bio}</div>
      </Content>
    </Block>
  );
};

export default Profile;
