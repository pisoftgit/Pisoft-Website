import React, { useState } from 'react';
import Stepper, { Step } from '../Stepper';

function Stepp() {
  const [name, setName] = useState("");

  return (
    <div className="flex  flex-col md:flex-row w-full h-auto px-4 sm:px-6">
      <div className="w-full flex items-center justify-center">
        <Stepper
          initialStep={1}
          onStepChange={(step) => console.log(step)}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
          stepContainerClassName="justify-center mb-6 sm:mb-8"
          contentClassName="text-center"
        >
          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="meeting.jpg"
                alt="Center Illustration"
                className="w-[200px] sm:w-[250px] h-[90px] sm:h-[90px] object-cover rounded-full"
              />
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-jr text-gray-800">
                We Start By Listening
              </h2>
              <p className="text-gray-600 font-jr text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[700px]">
                We begin by actively listening to our clients Through open dialogue and detailed discussions, we gather all requirements to align our solutions with their vision.
              </p>
            </div>
          </Step>

          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="Plan.jpg"
                alt="Next Step"
                className="w-[100px] sm:w-[120px] h-[80px] sm:h-[100px] object-cover"
              />
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-jr text-gray-900">
                Planning & Strategy
              </h2>
              <p className="text-gray-600 font-jr text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[700px]">
                We create a tailored plan and strategy to align the project goals with the client’s vision and timeline.
              </p>
            </div>
          </Step>

          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="Develop.jpg"
                alt="Final Step"
                className="w-[180px] sm:w-[200px] h-[80px] sm:h-[90px] object-cover rounded-full"
              />
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-jr text-gray-800">
                Development
              </h2>
              <p className="text-gray-600 font-jr text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[700px]">
                We transform ideas into reality through intuitive design and robust development tailored to client needs.
              </p>
            </div>
          </Step>
          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="test.jpg"
                alt="Final Step"
                className="w-[180px] sm:w-[200px] h-[80px] sm:h-[90px] object-cover rounded-full"
              />
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-jr text-gray-800">
                Testing and Optimizations
              </h2>
              <p className="text-gray-600 font-jr text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[700px]">
                We ensure quality through thorough testing and optimize performance for a seamless user experience.
              </p>
            </div>
          </Step>
          <Step>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="Support.jpg"
                alt="Support Step"
                className="w-[180px] sm:w-[200px] h-[80px] sm:h-[90px] object-cover rounded-full"
              />
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-jr text-gray-800">
                Ongoing Support
              </h2>
              <p className="text-gray-600 font-jr text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[700px]">
                We deliver the final product on time and provide ongoing support to ensure long-term success and client satisfaction.
              </p>
            </div>
          </Step>
        </Stepper>
      </div>
    </div>
  );
}

export default Stepp;