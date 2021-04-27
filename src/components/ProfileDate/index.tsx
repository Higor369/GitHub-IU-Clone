import React from 'react';

 import { Container, BlogIcon, EmailIcon, Flex, Avatar, Row, PeopleIcon, Column, CompanyIcon, LocationIcon } from './styles';

 interface Props {
    username:string;
    name: string;
    avatarUrl: string;
    following: number;
    followers: number;
    company?: string;
    location? : string;
    email?: string;
    blog?: string;
 }

const ProfileDate: React.FC<Props> = ({
    username,
    name,
    avatarUrl,
    following,
    followers,
    company,
    location ,
    email,
    blog,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} />
        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Row>

      <Column>
        {company ? (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        ) : '' }
        {location ? (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        ) : '' }
        {email ? (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        ) : '' }
        {blog ? (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        ) : '' }
      </Column>
    </Container>

  );
}

export default ProfileDate;