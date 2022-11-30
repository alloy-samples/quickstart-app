import { ReactElement, useContext, useState } from "react";
import Layout, { ResponseContext } from "../components/layouts/layout";
import { styled } from "../stitches.config";
import { Button, Label, Input, FieldSet, StateSelect } from "../components";
import { recordResponse } from "../utils/useResponse";
import { ApplicationResponse } from "../types/types";
import { useRouter } from "next/router";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

const Box = styled("div", {
  display: "flex",
});

const Title = styled("h1", {
  fontSize: "$6",
  lineHeight: "$6",
  margin: "$6 0",
});

const StyledAnchor = styled("a", {
  justifyContent: "flex-end",
  textDecoration: "none",
  color: "$sand12",
  width: "100%",
});

function Home() {
  const [birthDate, setbirthDate] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressState, setAddressState] = useState("NY");
  const [addressPostalCode, setAddressPostalCode] = useState("");
  const [income, setIncome] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const { ...context } = useContext(ResponseContext);

  const router = useRouter();

  const submitData = async () => {
    const data = {
      phone_number: phoneNumber,
      name_first: firstName,
      name_last: lastName,
      email_address: email,
      birth_date: birthDate,
      address_line_1: addressLine1,
      address_city: addressCity,
      address_state: addressState,
      address_postal_code: addressPostalCode,
      address_country_code: "US",
      income: income,
    };

    setLoading(true);
    const response = await fetch("/api/journey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ persons: [data] }),
    });

    const jsonResponse: ApplicationResponse = await response.json();
    if (response) {
      recordResponse(
        {
          action: "[API] POST call to create application",
          apiResponse: jsonResponse,
        },
        context
      );
    }
    setLoading(false);

    // pending_step_up is the correct status trigger the SDK
    // some legacy implentations will contain pending documents
    const journeyStatus = jsonResponse.status.toLowerCase();

    if (journeyStatus === "pending_step_up" || journeyStatus === "pending_documents") {
      router.push(`/${jsonResponse.journey_application_token}`);
    } else if (journeyStatus === "completed") {
      //This means journey finished. People would be either approved or denied.
      if (jsonResponse.complete_outcome.toLowerCase() === "approved") {
        //This person was approved
        router.push("/approved");
      }
      if (jsonResponse.complete_outcome.toLowerCase() === "denied") {
        //this person was denied
        router.push("/denied");
      }
    }
  };

  const populateWithSample = () => {
    setbirthDate("1987-06-05");
    setPhoneNumber("16087703190");
    setAddressLine1("41 E 11th St");
    setAddressCity("New York");
    setAddressState("NY");
    setAddressPostalCode("11111");
    setIncome("72000");
    setFirstName("David");
    setLastName("Kim");
    setEmail("someperson@alloy.com");
  };

  return (
    <div>
      {loading ? (
        <div> Making API request... </div>
      ) : (
        <>
          <Title>Alloy Sample App</Title>
          <Container>
            <Box
              css={{
                gap: "$2",
              }}
            >
              <FieldSet>
                <Label htmlFor="firstName">First name</Label>
                <Input
                  type={"text"}
                  id={"firstName"}
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.currentTarget.value);
                  }}
                />
              </FieldSet>
              <FieldSet>
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  type={"text"}
                  id={"lastName"}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.currentTarget.value);
                  }}
                />
              </FieldSet>
            </Box>
            <FieldSet>
              <Label htmlFor="email">Email</Label>
              <Input
                type={"text"}
                id={"email"}
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </FieldSet>
            <Box
              css={{
                gap: "$2",
              }}
            >
              <FieldSet>
                <Label htmlFor="phoneNumber">Phone number</Label>
                <Input
                  type={"tel"}
                  id={"phoneNumber"}
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.currentTarget.value);
                  }}
                />
              </FieldSet>
              <FieldSet>
                <Label htmlFor="birthdate">Birth Date</Label>
                <Input
                  type={"date"}
                  id={"birthdate"}
                  value={birthDate}
                  onChange={(e) => {
                    setbirthDate(e.currentTarget.value);
                  }}
                />
              </FieldSet>
            </Box>
            <FieldSet>
              <Label htmlFor="address">Address</Label>
              <Input
                type={"text"}
                id={"address"}
                value={addressLine1}
                onChange={(e) => {
                  setAddressLine1(e.currentTarget.value);
                }}
              />
            </FieldSet>
            <Box
              css={{
                gap: "$2",
              }}
            >
              <FieldSet>
                <Label htmlFor="city">City</Label>
                <Input
                  type={"text"}
                  id={"city"}
                  value={addressCity}
                  onChange={(e) => {
                    setAddressCity(e.currentTarget.value);
                  }}
                />
              </FieldSet>
              <FieldSet>
                <Label htmlFor="state">State</Label>
                <StateSelect
                  id={"state"}
                  value={addressState}
                  onChange={(value) => {
                    setAddressState(value);
                  }}
                />
              </FieldSet>
            </Box>
            <FieldSet>
              <Label htmlFor="postalCode">Postal code</Label>
              <Input
                type={"text"}
                id={"postalCode"}
                value={addressPostalCode}
                onChange={(e) => {
                  setAddressPostalCode(e.currentTarget.value);
                }}
              />
            </FieldSet>
            <FieldSet>
              <Label htmlFor="income">Income</Label>
              <Input
                type={"text"}
                id={"income"}
                value={income}
                onChange={(e) => {
                  setIncome(e.currentTarget.value);
                }}
              />
            </FieldSet>
            <StyledAnchor>
              <Button onClick={submitData} stretch>
                Submit
              </Button>
            </StyledAnchor>
            <button
              style={{
                position: "absolute",
                bottom: 12,
                left: 12,
              }}
              onClick={() => {
                populateWithSample();
              }}
            >
              Sample Data
            </button>
          </Container>
        </>
      )}
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
