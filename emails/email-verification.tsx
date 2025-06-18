import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailVerificationProps {
  username?: string;
  verificationLink?: string;
  appName?: string;
  supportEmail?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const EmailVerification = ({
  username = "{{username}}",
  verificationLink = "{{verificationLink}}",
  appName = "{{appName}}",
  supportEmail = "{{supportEmail}}",
}: EmailVerificationProps) => {
  const previewText = `Verify your email address for ${appName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="hidden">
            verificationLink:{verificationLink}
          </Container>
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
            <Section className="mt-[32px] bg-gray-100 p-4">
              <Heading className="mx-0 my-0 p-0 text-center font-bold text-[24px]">
                {appName}
              </Heading>
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
              Verify your email address
            </Heading>
            <Text className="text-[14px] text-black leading-[24px]">
              Hello {username},
            </Text>
            <Text className="text-[14px] text-black leading-[24px]">
              Thank you for signing up for {appName}! To complete your
              registration and ensure the security of your account, please
              verify your email address.
            </Text>
            <Section className="mt-[32px] mb-[32px] text-center">
              <Button
                className="rounded bg-[#000000] px-5 py-3 text-center font-semibold text-[12px] text-white no-underline"
                href={verificationLink}
              >
                Verify Email Address
              </Button>
            </Section>
            <Text className="text-[14px] text-black leading-[24px]">
              If you did not create an account with {appName}, you can safely
              ignore this email.
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This verification email was sent to{" "}
              <span className="text-black">{username}</span>. If you need any
              assistance, please contact our support team at{" "}
              <Link
                href={`mailto:${supportEmail}`}
                className="text-blue-600 no-underline"
              >
                {supportEmail}
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

EmailVerification.PreviewProps = {
  username: "john.doe@example.com",
  verificationLink: "https://yourapp.com/verify?token=abc123",
  appName: "ALG",
  supportEmail: "support@yourapp.com",
} as EmailVerificationProps;

export default EmailVerification;
