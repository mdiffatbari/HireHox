import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="w-10/12 max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Got Questions?
            <span className="text-blue-600"> We've Got Answers</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-500 leading-8">
            Find answers to the most common questions about using HireHox,
            whether you're looking for your next opportunity or hiring top
            talent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mt-14"
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="space-y-5"
          >
            <AccordionItem
              value="item-1"
              className="rounded-2xl px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                Is HireHox free for job seekers?
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-7">
                Yes. Creating an account, searching for jobs, and applying to
                opportunities on HireHox is completely free for job seekers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="rounded-2xl px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                How do I apply for a job?
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-7">
                Simply create an account, complete your profile, browse
                available jobs, and click the "Apply" button on any position
                that matches your skills and interests.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="rounded-2xl px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                Are employers verified?
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-7">
                Yes. HireHox reviews employer accounts to help create a trusted
                hiring environment and reduce fraudulent job postings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="rounded-2xl px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                Can companies post unlimited jobs?
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-7">
                Employers can post jobs based on their subscription or plan.
                Premium plans provide additional features, higher visibility,
                and advanced candidate management tools.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="rounded-2xl px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                How does AI-powered job matching work?
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-7">
                HireHox analyzes your profile, skills, experience, and job
                preferences to recommend opportunities that best match your
                qualifications.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="rounded-2xl px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                Can I update my profile after creating an account?
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-7">
                Absolutely. You can edit your profile, upload a new resume,
                update your skills, and manage your personal information at any
                time.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;