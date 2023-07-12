import { styled } from "../stitches.config";
import { openAlloy, initAlloy } from "../utils/alloy";
import { ReactElement, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Layout, { ResponseContext } from "../components/layouts/layout";
import { Button } from "../components";
import { recordResponse } from "../utils/useResponse";

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

const Body = styled("p", {
  fontSize: "$4",
});

const DocV = () => {
  const router = useRouter();
  const { applicationToken } = router.query;
  const { ...context } = useContext(ResponseContext);
  useEffect(() => {
    if (applicationToken) {
      initAlloy(applicationToken as string);
    }
  }, [applicationToken]);

  const callback = (data: any) => {
    if (data.status === "closed") {
      // this means the user closed the DocV Modal instead of finishing
      recordResponse(
        {
          action: "[SDK] Closed Document Verification without finishing",
          apiResponse: data,
        },
        context
      );
    }

    if (data.status === "completed") {
      //this means the user finished the DocV Modal
      if (data.journey_application_status.toLowerCase() === "approved") {
        recordResponse(
          {
            action: "[SDK] Completed Document Verification",
            apiResponse: data,
          },
          context
        );
        router.push("/approved");
      }

      if (data.journey_application_status.toLowerCase() === "denied") {
        recordResponse(
          {
            action: "[SDK] Completed Document Verification SDK",
            apiResponse: data,
          },
          context
        );
        router.push("/denied");
      }
    }
  };

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
        <Title>Document Verification</Title>
        <Body>
          You will be asked to go through a process to verify your identity.
          This process helps us ensure that we are meeting the compliance
          standards and provide the best experience tailored to you.
        </Body>
        <Button
          onClick={() => {
            openAlloy(callback);
          }}
        >
          Next
        </Button>
      </Container>
    </MainContainer>
  );
};

DocV.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default DocV;
