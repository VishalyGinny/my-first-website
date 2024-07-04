import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const projects = [
  {
    title: "Project 1: Titanic",
    description:
      "The competition uses machine learning to create a model that predicts which passengers survived the Titanic shipwreck.",
    link: "https://stripe.com",
  },
  {
    title: "Project 2: House Prices",
    description:
      "Use advanced regression techniques like random forest and gradient boosting to predict the sales price for each house.",
    link: "https://netflix.com",
  },
  {
    title: "Project 3: Natural Language Processing",
    description:
      "Use Natural Language Processing to analyze text predicting whether it is a real disaster or not.",
    link: "https://google.com",
  },
  {
    title: "Project 4: Digit Recognizer",
    description: "Use MNIST dataset to classify handwritten digits.",
    link: "https://meta.com",
  },
  {
    title: "Project 5: Academic Success",
    description: "Predict academic risk of students in higher education.",
    link: "https://amazon.com",
  },
  {
    title: "Project 6: Cleaned vs Dirty V2",
    description:
      "Train a classifier to determine clean dishes from dirty ones.",
    link: "https://microsoft.com",
  },
];

// Make CardHoverEffectDemo the default export
export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
