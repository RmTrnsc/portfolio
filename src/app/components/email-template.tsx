import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface EmailTemplateProps {
  lastname_name: string;
  email: string;
  phone?: string;
  project_type: string;
  project_description: string;
}

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const EmailTemplate = ({
  lastname_name,
  email,
  phone,
  project_type,
  project_description,
}: EmailTemplateProps) => {
  const previewText = `Nouvelle prise de contact sur le portfolio`;
  const capitalizedName = capitalize(lastname_name);

  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Lato:wght@400;700&display=swap');
            
            .font-header {
              font-family: 'Caveat', cursive, Arial, sans-serif;
            }
            .font-text {
              font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
          `}
        </style>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-[#fffffb] font-text text-[#2a4d3a]">
          <Container className="mx-auto py-5 px-4">
            <Heading className="text-3xl font-header mb-4">
              {`${capitalizedName} vous a contacté`}
            </Heading>
            <Section className="rounded-lg p-6">
              <Text>
                <span className="font-semibold">Nom :</span> {capitalizedName}
              </Text>
              <Text>
                <span className="font-semibold">Email :</span>{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-[#2a4d3a] underline"
                >
                  {email}
                </a>
              </Text>
              {phone && (
                <Text>
                  <span className="font-semibold">Téléphone :</span>{" "}
                  <a href={`tel:${phone}`} className="text-[#2a4d3a] underline">
                    {phone}
                  </a>
                </Text>
              )}
              <Text>
                <span className="font-semibold">Type de projet :</span>{" "}
                {project_type}
              </Text>
              {project_description !== "" ? (
                <>
                  <Hr className="border-[#d8d8d8] my-4" />
                  <Text className="font-semibold">Description du projet :</Text>
                  <Text className="whitespace-pre-wrap">
                    {project_description}
                  </Text>
                </>
              ) : null}
            </Section>
            <Text className="text-sm text-[#555555] mt-4 text-center">
              Ce message a été envoyé depuis le formulaire de contact du
              portfolio.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
