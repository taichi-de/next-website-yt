import Head from 'next/head'
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 10rem;
  font-weight: 900;
  margin-left: 5%;
`;

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>Contact</Heading>
      </Hero>
    </>
  )
}
