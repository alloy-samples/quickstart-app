import { styled } from "../stitches.config";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/layouts/layout";
import { Button } from "../components";

const Title = styled("h1", {
  fontSize: "$6",
  lineHeight: "$6",
  margin: "$6 0",
});

const MainContainer = styled("main", {
  display: "flex",
  margin: "$6",
  justifyContent: "center",
});

const Container = styled("div", {
  display: "flex",
  padding: "$6",
  flexDirection: "column",
  maxWidth: 500,
  width: "100%",
  gap: "$4",
});

const Approved = () => {
  const router = useRouter();

  return (
    <MainContainer>
      <Container>
        <Button
          onClick={() => {
            router.back();
          }}
          outline
        >
          Back
        </Button>
        <Title>Your application has been approved</Title>
      </Container>
    </MainContainer>
  );
};

Approved.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Approved;
