import Footer from "@/src/components/Layout/Footer";
import React from "react";
import { MDXProvider } from '@mdx-js/react'
import { Container } from '@mui/material'

import PrivacyPolicyMd from '@/markdown/en/privacy.md'
import { BackgroundGradient } from "@/src/components/Layout/BackgroundGradient";


const PrivacyPolicy = () => {
  return (
    <Container fixed sx={{mb: 4}}>
      <MDXProvider>
        <PrivacyPolicyMd />
      </MDXProvider>
    </Container>
  )
}
PrivacyPolicy.getLayout = (children: React.ReactElement) => {
  return (
      <>
        <BackgroundGradient />
        {children}
        <Footer />
      </>
  );
};
export default PrivacyPolicy
