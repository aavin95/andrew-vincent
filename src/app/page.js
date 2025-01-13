"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-family: 'Arial', sans-serif;
  color: #1a202c;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #667eea;

  @media (min-width: 640px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: #718096;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Section = styled.section`
  space-y: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 1.5rem;
  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;


const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.75rem;
`;

const ProjectSubTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 0.5rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem; /* Equivalent to gap-8 */

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Paragraph = styled.p`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease, max-height 0.3s ease, padding-top 0.3s ease;
  line-height: 1.5;
  margin-top: 1rem;
  color: #718096;
`;


const ProjectCard = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: translateZ(0);
  overflow: auto; 

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }

  &:hover ${Paragraph} {
    opacity: 1;
    max-height: 200px;
    padding-top: 0.5rem;
    overflow: auto;
  }
`;


const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 1rem;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: translateY(0);
  }
`;


const Button = styled.a`
  flex: 1;
  padding: 0.5rem 1rem;
  background-color: #3182ce;
  color: #fff;
  text-align: center;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2b6cb0;
  }

  @media (max-width: 640px) {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
`;

const ContactLink = styled.a`
  color: #3182ce;
  text-decoration: underline;
  transition: color 0.2s ease;

  &:hover {
    color: #2b6cb0;
  }
`;

const CardContainer = styled.div`
  position: relative;
`;

const BodyParagraph = styled.p`
  opacity: 1;
  max-height: none;
  overflow: visible;
  line-height: 1.5;
  margin-top: 1rem;
  color: #718096;
  font-size: 1.15rem;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Prevent rendering until mounted
  }

  return (

    <Container>
      <Header>
        <ProfileImage src="/Andrew_Vincent.webp" alt="Andrew Vincent" />
        <Title>Andrew Vincent</Title>
        <Subtitle>Software & Web Developer</Subtitle>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤖 </text></svg>"
        />
      </Header>
      <Main>
        <Section>
          <SectionTitle>About Me</SectionTitle>
          <BodyParagraph>
            I&apos;m a passionate developer focused on writing usable, efficient, and scalable code.
            I enjoy balancing functionality and usability to make the best possible user experience.
            I graduated from the University of Michigan with a degree in Computer Science in the spring of 2024.
            I&apos;m currently looking for a full-time position in software or web development.
            Until then, I&apos;m enjoying working on personal projects and learning new technologies!
          </BodyParagraph>
        </Section>

        <Section>
          <SectionTitle>Projects</SectionTitle>
          <ProjectGrid>
            <CardContainer>
              <ProjectCard>
                <ProjectTitle>📚 Goodreads Book Selector</ProjectTitle>
                <ProjectSubTitle>
                  Helps users find and pick books that are on their to-read list
                </ProjectSubTitle>
                <Paragraph>
                  This project came about because I was trying to filter my to-read list by genre, but Goodreads doesn&apos;t have that feature.
                  So, I decided to make it myself! I used the OpenLibrary API to get each book&apos;s genre in a user&apos;s to-read list.
                  Then, I created a filter to allow users to select which genres they want to see. The Project is built with React and Next.js.
                  It&apos;s deployed and has web analytics enabled through Vercel.
                  This was my first time spending so much time on the design and user experience of an app, and I learned so much.
                </Paragraph>
                <ButtonsContainer>
                  <Button href="https://github.com/aavin95/goodreads-book-selector" target="_blank" rel="noopener noreferrer">The Code</Button>
                  <Button href="https://goodreads-shelf-helper.andrewvincent.dev/" target="_blank" rel="noopener noreferrer">Live Site</Button>
                </ButtonsContainer>
              </ProjectCard>
            </CardContainer>

            <CardContainer>
              <ProjectCard>
                <ProjectTitle>🤖 This Website</ProjectTitle>
                <ProjectSubTitle>A personal website to showcase my projects and skills</ProjectSubTitle>
                <ButtonsContainer>
                  <Button href="https://github.com/aavin95/andrew-vincent" target="_blank" rel="noopener noreferrer">The Code</Button>
                  <Button href="https://www.andrewvincent.dev/" target="_blank" rel="noopener noreferrer">Live Site</Button>
                </ButtonsContainer>
              </ProjectCard>
            </CardContainer>
            <CardContainer>
              <ProjectCard>
                <ProjectTitle>🃏 Poker Website</ProjectTitle>
                <ProjectSubTitle>A multiplayer real-time poker web app</ProjectSubTitle>
                <Paragraph>
                  This project is a modern multiplayer Texas Hold&apos;em poker app designed to deliver an engaging and real-time gaming experience.
                  Built with the latest Next.js 14 features, including app-based routing, it seamlessly integrates with a Node.js and Socket.io
                  backend for live game updates and player interactions. The app ensures smooth gameplay by managing different stages of the poker
                  game, handling player actions, and automating game transitions.
                </Paragraph>
                <ButtonsContainer>
                  <Button href="https://github.com/aavin95/smarter-poker" target="_blank" rel="noopener noreferrer">The Code</Button>
                </ButtonsContainer>
              </ProjectCard>
            </CardContainer>
            <CardContainer>
              <ProjectCard>
                <ProjectTitle>📊 Polling Website</ProjectTitle>
                <ProjectSubTitle>A website to create and share polls quickly</ProjectSubTitle>
                <Paragraph>
                  This project is a web app for creating and managing polls using Next.js, React, and styled-components.
                  It stores poll data in AWS DynamoDB, accessed via the AWS SDK for JavaScript. Features include requiring names,
                  multiple votes, and free response options. TypeScript ensures type safety, while Tailwind CSS provides styling.
                  Build and deployment are handled with Node.js scripts and GitHub Actions, deploying to AWS. The app is responsive
                  and user-friendly for seamless poll creation and participation.
                </Paragraph>
                <ButtonsContainer>
                  <Button href="https://github.com/aavin95/quick_poll" target="_blank" rel="noopener noreferrer">The Code</Button>
                  <Button href="https://quick-poll.andrewvincent.dev/" target="_blank" rel="noopener noreferrer">Live Site</Button>
                </ButtonsContainer>
              </ProjectCard>
            </CardContainer>
            <CardContainer>
              <ProjectCard>
                <ProjectTitle>🎥 Video Audio Enhancer</ProjectTitle>
                <ProjectSubTitle>A website to move background audio from videos</ProjectSubTitle>
                <Paragraph>
                  This project is a video audio enhancement web application built with Next.js,
                  TypeScript, and Flask. It leverages Supabase for authentication, storage, and
                  database management, while using DeepFilterNet for AI-powered audio processing.
                  Features include secure file uploads, real-time processing status updates, and video playback with enhanced audio.
                  The project follows a microservices architecture, with the frontend and backend services communicating via RESTful APIs, and includes comprehensive TypeScript types for enhanced code reliability.
                </Paragraph>
                <ButtonsContainer>
                  <Button href="https://github.com/aavin95/hush" target="_blank" rel="noopener noreferrer">The Code</Button>
                  <Button href="https://hush.andrewvincent.dev/" target="_blank" rel="noopener noreferrer">Live Site</Button>
                </ButtonsContainer>
              </ProjectCard>
            </CardContainer>
            {/* Add more projects as needed */}
          </ProjectGrid>
        </Section>

        <Section>
          <SectionTitle>Contact</SectionTitle>
          <BodyParagraph>
            Feel free to reach out to me at{" "}
            <ContactLink href="mailto:aavin@umich.edu">
              aavin@umich.edu
            </ContactLink>
            .
          </BodyParagraph>
        </Section>
      </Main>
    </Container>
  );
}
