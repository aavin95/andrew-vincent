"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 48rem; /* Equivalent to max-w-3xl */
  margin: 0 auto;
  padding: 3rem 1.5rem; /* Equivalent to px-6 py-12 */
  font-family: 'Arial', sans-serif;
  color: #1a202c; /* Equivalent to text-gray-900 */
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem; /* Equivalent to mb-16 */
`;

const Title = styled.h1`
  font-size: 3rem; /* Equivalent to text-5xl */
  font-weight: 800; /* Equivalent to font-extrabold */
  margin-bottom: 1rem; /* Equivalent to mb-4 */
  color: #667eea; /* Equivalent to text-gray-800 */

  @media (min-width: 640px) {
    font-size: 4.5rem; /* Equivalent to sm:text-6xl */
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem; /* Equivalent to text-xl */
  font-weight: 500; /* Equivalent to font-medium */
  color: #718096; /* Equivalent to text-gray-600 */

  @media (min-width: 640px) {
    font-size: 1.5rem; /* Equivalent to sm:text-2xl */
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem; /* Equivalent to gap-16 */
`;

const Section = styled.section`
  space-y: 1.5rem; /* Equivalent to space-y-6 */
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem; /* Equivalent to text-4xl */
  font-weight: 600; /* Equivalent to font-semibold */
  color: #4a5568; /* Equivalent to text-gray-700 */
  margin-bottom: 1.5rem; /* Equivalent to mb-6 */
  @media (min-width: 640px) {
    font-size: 3rem; /* Equivalent to sm:text-5xl */
  }
`;


const ProjectTitle = styled.h3`
  font-size: 1.5rem; /* Equivalent to text-2xl */
  font-weight: 600; /* Equivalent to font-semibold */
  color: #2d3748; /* Equivalent to text-gray-800 */
  margin-bottom: 0.75rem; /* Equivalent to mb-3 */
`;

const ProjectSubTitle = styled.h4`
  font-size: 1.15rem; /* Equivalent to text-xl */
  font-weight: 500; /* Equivalent to font-medium */
  color: #4a5568; /* Equivalent to text-gray-700 */
  margin-bottom: 0.5rem; /* Equivalent to mb-2 */
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem; /* Equivalent to gap-8 */

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr); /* Equivalent to sm:grid-cols-2 */
  }
`;

const Paragraph = styled.p`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease, max-height 0.3s ease, padding-top 0.3s ease;
  line-height: 1.5;
  margin-top: 1rem;
  color: #718096; /* Equivalent to text-gray-600 */
`;


const ProjectCard = styled.div`
  border: 1px solid #e2e8f0; /* Equivalent to border-gray-200 */
  border-radius: 0.75rem; /* Equivalent to rounded-lg */
  padding: 1.5rem; /* Equivalent to p-6 */
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Equivalent to shadow-md */
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: translateZ(0); /* Prevent potential box-shadow bleed */
  overflow: auto; 

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15); /* Equivalent to hover:shadow-lg */
    transform: scale(1.05); /* Equivalent to hover:scale-105 */
  }

  &:hover ${Paragraph} {
    opacity: 1;
    max-height: 200px; /* Adjust this value based on your content */
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
    transform: translateY(0); /* Ensure buttons are revealed on hover */
  }
`;


const Button = styled.a`
  flex: 1;
  padding: 0.5rem 1rem;
  background-color: #3182ce; /* Equivalent to bg-blue-600 */
  color: #fff;
  text-align: center;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2b6cb0; /* Equivalent to hover:bg-blue-800 */
  }

  @media (max-width: 640px) {
    padding: 0.5rem; /* Adjust padding for smaller screens */
    font-size: 0.875rem; /* Smaller text size on mobile */
  }
`;

const ContactLink = styled.a`
  color: #3182ce; /* Equivalent to text-blue-600 */
  text-decoration: underline;
  transition: color 0.2s ease;

  &:hover {
    color: #2b6cb0; /* Equivalent to hover:text-blue-800 */
  }
`;

const CardContainer = styled.div`
  position: relative;
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
        <Title>Andrew Vincent</Title>
        <Subtitle>Software & Web Developer</Subtitle>
      </Header>

      <Main>
        <Section>
          <SectionTitle>About Me</SectionTitle>
          <Paragraph>
            I&apos;m a passionate developer focused on writing usable, efficient, and scalable code.
            I enjoy balancing functionality and usability to make the best possible user experience.
            I graduated from the University of Michigan with a degree in Computer Science in the spring of 2024.
            I&apos;m currently looking for a full-time position in software or web development.
            Until then, I&apos;m enjoying working on personal projects and learning new technologies!
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Projects</SectionTitle>
          <ProjectGrid>
            <CardContainer>
              <ProjectCard>
                <ProjectTitle>Goodreads Book Selector</ProjectTitle>
                <ProjectSubTitle>
                  Helps users find and pick books that are on their to-read list
                </ProjectSubTitle>
                <Paragraph>
                  This project came about because I was trying to filter my to-read list by genre, but Goodreads doesn&apos;t have that feature.
                  So, I decided to make it myself! I used the OpenLibrary API to get each book&apos;s genre in a user&apos;s to-read list.
                  Then, I created a filter to allow users to select which genres they want to see.
                  This was my first time spending so much time on the design and user experience of an app, and I learned so much.
                </Paragraph>
                <ButtonsContainer>
                  <Button href="https://github.com/aavin95/goodreads-book-selector" target="_blank" rel="noopener noreferrer">The Code</Button>
                  <Button href="https://goodreads-book-selector.vercel.app/" target="_blank" rel="noopener noreferrer">Live Site</Button>
                </ButtonsContainer>
              </ProjectCard>
            </CardContainer>

            <CardContainer>
              <ProjectCard>
                <ProjectTitle>This Website</ProjectTitle>
                <ProjectSubTitle>A personal website to showcase my projects and skills</ProjectSubTitle>
                <ButtonsContainer>
                  <Button href="https://github.com/aavin95/andrew-vincent" target="_blank" rel="noopener noreferrer">GitHub</Button>
                  <Button href="https://andrew-vincent.vercel.app/" target="_blank" rel="noopener noreferrer">Live Site</Button>
                </ButtonsContainer>
              </ProjectCard>
            </CardContainer>
            {/* Add more projects as needed */}
          </ProjectGrid>
        </Section>

        <Section>
          <SectionTitle>Contact</SectionTitle>
          <Paragraph>
            Feel free to reach out to me at{" "}
            <ContactLink href="mailto:aavin@umich.edu">
              aavin@umich.edu
            </ContactLink>
            .
          </Paragraph>
        </Section>
      </Main>
    </Container>
  );
}
