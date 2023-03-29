import React, { RefObject, useContext, useRef } from 'react';

type SectionReferencesContextType = {
  homeSection: RefObject<HTMLDivElement> | null;
  howItWorksSection: RefObject<HTMLDivElement> | null;
  teamSection: RefObject<HTMLDivElement> | null;
  partnershipSection: RefObject<HTMLDivElement> | null;
  contactSection: RefObject<HTMLDivElement> | null;
};

const SectionReferencesContext =
  React.createContext<SectionReferencesContextType>({
    homeSection: null,
    howItWorksSection: null,
    teamSection: null,
    partnershipSection: null,
    contactSection: null,
  });

export default function SectionReferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const homeSection = useRef(null);
  const howItWorksSection = useRef(null);
  const teamSection = useRef(null);
  const partnershipSection = useRef(null);
  const contactSection = useRef(null);

  return (
    <SectionReferencesContext.Provider
      value={{
        homeSection,
        howItWorksSection,
        teamSection,
        partnershipSection,
        contactSection,
      }}
    >
      {children}
    </SectionReferencesContext.Provider>
  );
}

export const useSetionReferences = () => useContext(SectionReferencesContext);
