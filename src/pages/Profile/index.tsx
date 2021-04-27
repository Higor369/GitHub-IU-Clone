import React from 'react';

import { Container, Main, LeftSide, RigthSide, Repos } from './styles';

import ProfileDate from '../../components/ProfileDate'
import RepoCard from '../../components/RepoCard';

const profile: React.FC = () => {
  return (
    <Container>
        <Main >
            <LeftSide>
                <ProfileDate
                    username={'higor barbosa'}
                    name={'Higor Barbosa'}
                    avatarUrl={'https://avatars.githubusercontent.com/u/54073133?v=4'}
                    followers={887}
                    following={545}
                    company={'FNC'}
                    location={'São Paulo, Brasil'}
                    email={'higorpereirabarbosa@gmail.com'}
                    blog={undefined}
                    >
                </ProfileDate>
            </LeftSide>
            <RigthSide>
                <Repos>
                    <h2>Randow repos</h2>
                    <div>
                        {[1,2,3,4,5,6].map( x => {
                            <RepoCard 
                            key={x} 
                            username={'higor369'}
                            reponame={'random repo'}
                            description={'just a test'}
                            language={ x % 3 == 0? 'javascript' : 'C#'}
                            stars={x*4}
                            forks={x*2}

                            />
                        })}
                    </div>
                </Repos>
            </RigthSide>
        </Main>
    </Container>
    );
}

export default profile;