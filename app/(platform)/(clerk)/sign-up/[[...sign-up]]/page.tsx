import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp 
  appearance={{
    elements: {
      formButtonPrimary: {
        fontSize: 14,
        textTransform: "none",
        backgroundColor: "#16a34a",
        "&:hover, &:focus, &:active": {
          backgroundColor: "#15803d",
        },
      },
    },
  }}
  path="/sign-up" />;
}