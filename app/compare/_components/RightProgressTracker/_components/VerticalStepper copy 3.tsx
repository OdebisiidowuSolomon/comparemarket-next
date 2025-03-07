import React, { useState } from "react";

interface Step {
  title: string;
  subSteps: { label: string; completed: boolean }[];
}

const steps: Step[] = [
  {
    title: "Car details",
    subSteps: [
      { label: "Your car", completed: false },
      { label: "Car value", completed: false },
      { label: "Car usage", completed: false },
    ],
  },
  {
    title: "Your details",
    subSteps: [{ label: "Personal Info", completed: false }],
  },
  {
    title: "Your policy",
    subSteps: [{ label: "Policy Type", completed: false }],
  },
  {
    title: "Check your answers",
    subSteps: [{ label: "Review", completed: false }],
  },
];

const VerticalStepper: React.FC = () => {
  const [stepData, setStepData] = useState(steps);

  const handleSubStepClick = (stepIndex: number, subStepIndex: number) => {
    const updatedSteps = [...stepData];
    updatedSteps[stepIndex].subSteps[subStepIndex].completed = true;

    setStepData(updatedSteps);
  };

  return (
    <div className="w-64 relative">
      {stepData.map((step, stepIndex) => {
        // Calculate sub-step completion progress
        const totalSubSteps = step.subSteps.length;
        const completedSubSteps = step.subSteps.filter((s) => s.completed).length;
        const progressPercentage = totalSubSteps
          ? (completedSubSteps / totalSubSteps) * 100
          : 0;

        return (
          <div key={stepIndex} className="relative flex items-start mb-6">
            {/* Step Number and Vertical Line */}
            <div className="relative flex flex-col items-center w-8">
              {/* Step Number */}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold z-10 shadow-md ${
                  completedSubSteps === totalSubSteps
                    ? "bg-blue-500"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {stepIndex + 1}
              </div>

              {/* Vertical Progress Bar */}
              {stepIndex < stepData.length - 1 && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gray-300">
                  <div
                    className="absolute left-0 top-0 w-full bg-blue-500 transition-all duration-300"
                    style={{ height: `${progressPercentage}%` }}
                  />
                </div>
              )}
            </div>

            {/* Step Content */}
            <div className="ml-4">
              <span
                className={`font-semibold ${
                  completedSubSteps === totalSubSteps ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {step.title}
              </span>

              {/* Sub-Steps */}
              <div className="mt-2">
                {step.subSteps.map((subStep, subStepIndex) => (
                  <div
                    key={subStepIndex}
                    className={`cursor-pointer py-1 ${
                      subStep.completed ? "text-blue-600 font-semibold" : "text-gray-500"
                    }`}
                    onClick={() => handleSubStepClick(stepIndex, subStepIndex)}
                  >
                    {subStep.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalStepper;
