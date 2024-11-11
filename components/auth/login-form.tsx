"use client";

import { AuthCard } from "@/components/auth/auth-card";

export const LoginForm = () => {
  return (
    <AuthCard
      cardTitle="Welcome Back"
      backButtonHref="/auth/register"
      backButtonLable="Create a new Account"
      showSocials={true}
    >
      <div>Hey</div>
    </AuthCard>
  );
};
