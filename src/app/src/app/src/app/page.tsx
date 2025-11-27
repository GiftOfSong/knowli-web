"use client";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Logo>Knowli</Logo>
      <Tagline>Power in your choices.</Tagline>

      <Description>
        Clear ingredients. Honest information. Confidence in what you buy.
      </Description>

      <Form
        action="https://submit-form.com/your-key-here"
        method="POST"
      >
        <EmailInput
          type="email"
          name="email"
          required
          placeholder="Enter your email…"
        />
        <JoinButton type="submit">Join the Waitlist</JoinButton>
      </Form>

      <Pledge>No promotions. No brand influence. Always independent.</Pledge>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background-color: #2F3C7E;
`;

const Logo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #A8E6CF;
`;

const Tagline = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: #A8E6CF;
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 500px;
  margin-bottom: 2rem;
  color: #ffffff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
`;

const EmailInput = styled.input`
  padding: 12px;
  border-radius: 6px;
  border: none;
  margin-bottom: 12px;
  font-size: 1rem;
  outline: none;
`;

const JoinButton = styled.button`
  padding: 12px;
  background-color: #A8E6CF;
  border: none;
  border-radius: 6px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  color: #2F3C7E;
  font-size: 1rem;
`;

const Pledge = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  opacity: 0.85;
  color: #ffffff;
`;
