"use client";
import Container from "@/components/Container/Container";
import OrDivider from "@/components/OrDivider/OrDivider";
import Section, {
    SectionSubtitle,
    SectionTitle,
} from "@/components/Section/Section";

import ContactForm from "@/components/ContactMeSection/ContactForm";
import GetInTouchSection from "@/components/ContactMeSection/GetInTouchSection/GetInTouchSection";

const ContactMe = () => {
    return (
        <Section className="border-b border-b-gray-200 dark:border-b-gray-800 bg-gray-100 dark:bg-gray-900">
            <Container className="flex flex-col items-stretch justify-between gap-2 md:flex-row">
                <div className="relative grow md:max-w-md">
                    <SectionTitle defaultBottomMargin>
                        Tell me about your project
                    </SectionTitle>
                    <SectionSubtitle defaultBottomMargin>
                        Let&apos;s create something together.
                    </SectionSubtitle>
                    <GetInTouchSection />
                </div>
                <OrDivider />
                <ContactForm />
            </Container>
        </Section>
    );
};

export default ContactMe;
