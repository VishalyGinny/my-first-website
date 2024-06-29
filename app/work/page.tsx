import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export const projects = [
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


const Page = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="bg-primary py-8 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
            My Machine Learning Projects
          </h1>
        </div>
      </header>
      <main className="flex-1 bg-background">
        <div className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  Project 1: Titanic
                </h3>
                <p className="text-sm text-muted-foreground">
                  The competition uses machine learning to create a model that
                  predicts which passengers survived the Titanic shipwreck.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  Project 2: House Prices
                </h3>
                <p className="text-sm text-muted-foreground">
                  Use advanced regression techniques like random forest and
                  gradient boosting to predict the sales price for each house.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  Project 3: Natural Language Processing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Use Natural Language Processing to analyze text predicting
                  whether it is a real disaster or not.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  Project 4: Digit Recognizer
                </h3>
                <p className="text-sm text-muted-foreground">
                  Use MNIST dataset to classify handwritten digits.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  Project 5: Academic Success
                </h3>
                <p className="text-sm text-muted-foreground">
                  Predict academic risk of students in higher education.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  Project 6: Cleaned vs Dirty V2
                </h3>
                <p className="text-sm text-muted-foreground">
                  Train a classifier to determine clean dishes from dirty ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Page;
