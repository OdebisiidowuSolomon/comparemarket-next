import React from "react";

interface VerticalStepperProps {
  steps: string[];
  currentStep: number;
}

const VerticalStepper: React.FC<VerticalStepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col items-start">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start">
          {/* Step Indicator */}
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${
                index < currentStep
                  ? "bg-blue-500"
                  : index === currentStep
                  ? "bg-blue-700"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>
            {/* Progress Line */}
            {index !== steps.length - 1 && (
              <div
                className={`w-1 h-10 ${
                  index < currentStep - 1 ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
          {/* Step Label */}
          <div className="ml-4">
            <p
              className={`font-semibold ${
                index === currentStep ? "text-blue-700" : "text-gray-500"
              }`}
            >
              {step}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalStepper;
