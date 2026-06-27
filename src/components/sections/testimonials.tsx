/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/components/section";
import { SymmetricScrollCard } from "@/components/symmetric-scroll-card";
import { siteConfig } from "@/lib/config";

export function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="What our users say"
      className="container px-10 mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10 overflow-visible">
        {siteConfig.testimonials.map((testimonial, index) => (
          <SymmetricScrollCard
            key={testimonial.id}
            index={index}
            columns={4}
            className="h-full"
            contentClassName="bg-muted/60 overflow-hidden rounded-3xl flex flex-col h-full"
          >
            <div className="px-4 py-5 sm:p-6 flex-grow">
              <div className="flex items-center mb-4">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-foreground">{testimonial.text}</p>
            </div>
          </SymmetricScrollCard>
        ))}
      </div>
    </Section>
  );
}
