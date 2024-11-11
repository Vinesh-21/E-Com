import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Socials from "@/components/auth/socials";
import BackButton from "@/components/auth/back-button";

type AuthCarProps = {
  children: React.ReactNode;
  cardTitle: string;
  backButtonHref: string;
  backButtonLable: string;
  showSocials?: boolean;
};

export const AuthCard = ({
  children,
  cardTitle,
  backButtonHref,
  backButtonLable,
  showSocials,
}: AuthCarProps) => {
  return (
    <Card>
      <CardHeader className="text-2xl font-semibold">{cardTitle}</CardHeader>
      <CardContent>{children}</CardContent>
      {showSocials && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLable} />
      </CardFooter>
    </Card>
  );
};
