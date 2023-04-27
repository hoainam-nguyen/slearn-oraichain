import React from "react";
import tw from "twin.macro";

const Container = tw.div`
  flex
  flex-col
  items-center
  justify-center
  min-h-screen
`;

const Header = tw.header`
  w-full
  flex
  justify-between
  items-center
  p-4
`;

const Logo = tw.a`
  text-3xl
  font-bold
  text-gray-800
  hover:text-gray-900
`;

const Navigation = tw.nav`
  flex
  items-center
`;

const NavLink = tw.a`
  px-4
  py-2
  text-gray-800
  hover:text-gray-900
`;

const Main = tw.main`
  w-full
  max-w-6xl
  px-4
`;

const SectionTitle = tw.h2`
  text-3xl
  font-bold
  text-gray-800
  my-8
`;

const Thread = tw.article`
  border-t-2
  border-gray-300
  p-4
`;

const ThreadTitle = tw.h3`
  text-xl
  font-bold
  text-gray-800
  mb-2
`;

const ThreadAuthor = tw.p`
  text-gray-600
  mb-2
`;

const ThreadContent = tw.p`
  text-gray-800
  mb-4
`;

const ThreadMeta = tw.p`
  text-gray-600
`;

const Forum = () => {
  return (
      <Main>
        <SectionTitle>Latest Threads</SectionTitle>
        <Thread>
          <ThreadTitle>This is a thread title</ThreadTitle>
          <ThreadAuthor>Posted by John Doe on 01/01/2023</ThreadAuthor>
          <ThreadContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            quis lobortis elit. Nullam auctor tortor eget pulvinar tristique.
            Morbi non ipsum non nisl euismod feugiat. Vestibulum ac arcu eu odio
            elementum bibendum.
          </ThreadContent>
          <ThreadMeta>5 replies · Last reply by Jane Doe on 01/03/2023</ThreadMeta>
        </Thread>
        <Thread>
          <ThreadTitle>This is another thread title</ThreadTitle>
          <ThreadAuthor>Posted by Jane Doe on 01/02/2023</ThreadAuthor>
          <ThreadContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            quis lobortis elit. Nullam auctor tortor eget pulvinar tristique.
            Morbi non ipsum non nisl euismod feugiat. Vestibulum ac arcu eu odio
            elementum bibendum.
          </ThreadContent>
          <ThreadMeta>2 replies · Last reply by John Doe on 01/04/2023</ThreadMeta>
        </Thread>
      </Main>
  );
};

export default Forum;