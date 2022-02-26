import react from "react";
const MainCard = (props) => {
  return (
    <>
      <div className="flex items-center justify-center py-8">
        <div className="max-w-sm rounded shadow bg-white dark:bg-gray-800">
          <div className="p-4 md:p-6">
            <div className="flex items-center">
              <img
                src="https://portfolio-react-farhan-test.s3.ap-southeast-1.amazonaws.com/farhan.jpg"
                alt="dp"
                className="w-16 h-16 rounded-full"
              />
              <div className="pl-4 sm:pl-5">
                <p className="sm:text-xl text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Muhammad Farhan Helmy
                </p>
                <p className="sm:text-lg text-base text-gray-500 dark:text-gray-400 mt-1">
                  Selangor, Malaysia
                </p>
              </div>
            </div>
            <div className="sm:mt-7 mt-4">
              <p className="sm:text-lg text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">
                DESCRIPTION
              </p>
              <p className="sm:text-base text-sm leading-5 text-gray-500 dark:text-gray-400 mt-2">
                Creator of sewanow.com and renoz.com, looking into developing
                Web3.0, NFT, Smart Contract and Block Chain. AWS enthusiast
              </p>
            </div>
            <div className="mt-4">
              <p className="sm:text-lg text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100">
                FOCUS AREA
              </p>
              <div className="flex items-center mt-5">
                <div className="bg-gray-100 dark:bg-black-800 rounded-full w-20 h-10 flex items-center justify-center">
                  <p className="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-700">
                    NodeJS
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-black-800 rounded-full w-20 h-10 flex items-center justify-center ml-4 sm:ml-8">
                  <p className="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-700">
                    React
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-black-800 rounded-full w-20 h-10 flex items-center justify-center ml-4 sm:ml-8">
                  <p className="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-700">
                    Laravel
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-black-800 rounded-full w-20 h-10 flex items-center justify-center ml-4 sm:ml-8">
                  <p className="text-xs font-semibold leading-loose text-center text-gray-500 dark:text-gray-700">
                    AWS
                  </p>
                </div>
              </div>
            </div>
            <div className="px-8 mt-6">
              <button className="bg-indigo-700 hover:bg-indigo-600 w-full rounded py-2">
                <p className="sm:text-base text-sm font-semibold leading-9 text-center text-white">
                  -
                </p>
              </button>
            </div>
            <div className="px-8 mt-6">
              <div className="flex  sm:justify-start xl:justify-center space-x-6   md:pr-0 sm:pr-0">
                <div>
                  <a href="https://www.facebook.com/dazzle.dota">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={20}
                      viewBox="0 0 14 20"
                      fill="none"
                    >
                      <path
                        d="M1 7.96655L1 11.9474H4.14076L4.14076 18.914H8.32845L8.32845 11.9474H11.4692L12.5161 7.96655L8.32845 7.96655V5.97611C8.32845 5.71216 8.43875 5.45902 8.63508 5.27238C8.83142 5.08574 9.09771 4.98088 9.37537 4.98088H12.5161V1L9.37537 1C7.98706 1 6.65562 1.52427 5.67394 2.45747C4.69226 3.39067 4.14076 4.65636 4.14076 5.97611L4.14076 7.96655L1 7.96655Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div>
               
                  <a href=" https://github.com/farhan-helmy">
                    <svg
                      aria-label="Github"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#718096"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/muhammad-farhan-helmy-0529501a7/">
                    <svg
                      class="w-6 h-6 text-blue-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainCard;
