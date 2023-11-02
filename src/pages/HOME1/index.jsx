import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";

const HOME1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-deep_purple-50 flex flex-col font-pixeled items-center justify-end mx-auto pt-[74px] w-full">
        <div className="flex flex-col md:gap-10 gap-[181px] items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start max-w-[1440px] mx-auto md:px-5 w-full">
            <div className="font-panic sm:h-[1346px] md:h-[788px] h-[826px] relative w-full">
              <div className="absolute bg-deep_purple-100 border-[10px] border-black-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-7 sm:px-5 w-full">
                <div className="flex flex-col gap-[33px] justify-start mb-11 mt-[114px] w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 gap-[307px] items-start justify-start w-full">
                    <Text
                      className="mb-[63px] md:text-5xl text-[250px] text-black-900"
                      size="txtPanic250"
                    >
                      a
                    </Text>
                    <Text
                      className="common-pointer sm:mt-0 mt-[63px] md:text-5xl text-[250px] text-black-900"
                      size="txtPanic250"
                      onClick={() => navigate("/board")}
                    >
                      REEL
                    </Text>
                  </div>
                  <div className="md:h-[227px] h-[261px] md:ml-[0] ml-[22px] relative w-[93%] md:w-full">
                    <Text
                      className="common-pointer absolute left-[0] md:text-5xl text-[250px] text-purple-A200_dd top-[0]"
                      size="txtPanic250PurpleA200dd"
                      onClick={() => navigate("/board")}
                    >
                      BOARD
                    </Text>
                    <Text
                      className="common-pointer absolute bottom-[0] right-[0] text-3xl sm:text-[26px] md:text-[28px] text-purple-A200_dd"
                      size="txtPixeled30"
                      onClick={() => navigate("/board")}
                    >
                      click me !!!
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bg-indigo-50 border-[10px] border-black-900 border-solid gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] items-center justify-start mx-auto p-[25px] sm:px-5 top-[0] w-full">
                <div className="bg-red-A200 border-[10px] border-black-900 border-solid h-[85px] w-[85px]"></div>
                <div className="bg-yellow-100 border-[10px] border-black-900 border-solid h-[85px] w-[85px]"></div>
                <div className="bg-light_green-300 border-[10px] border-black-900 border-solid h-[85px] w-[85px]"></div>
              </div>
            </div>
            <div className="font-pixeled md:h-[540px] h-[660px] sm:h-[801px] mt-[186px] relative w-full">
              <div className="absolute md:h-[354px] h-[483px] sm:h-[615px] left-[0] top-[0] w-[76%] md:w-full">
                <div className="absolute bg-green-50 border-[10px] border-black-900 border-solid flex flex-col items-center justify-end left-[0] p-8 sm:px-5 top-[0] w-[67%]">
                  <div className="bg-indigo-50 border-[10px] border-black-900 border-solid h-[94px] mt-[196px] w-[99%]"></div>
                </div>
                <div className="absolute bg-yellow-100_01 border-[10px] border-black-900 border-solid bottom-[0] flex sm:flex-col flex-row gap-[21px] items-start justify-end p-[30px] sm:px-5 right-[0] w-[67%]">
                  <Text
                    className="mb-[153px] sm:mt-0 mt-[52px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[77%] sm:w-full"
                    size="txtPixeled30Black900"
                  >
                    welcome to the website!
                  </Text>
                  <div className="bg-red-A200 border-[10px] border-black-900 border-solid h-[85px] mb-[207px] sm:mt-0 mt-0.5 w-[85px]"></div>
                </div>
              </div>
              <div className="absolute bg-deep_orange-50 border-[10px] border-black-900 border-solid bottom-[0] flex flex-col items-center justify-end p-[31px] sm:px-5 right-[0] w-[51%]">
                <div className="flex flex-col gap-[49px] items-center justify-start mt-[68px] w-[93%] md:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtPixeled30Black900"
                  >
                    go to our github !
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-between w-full">
                    <div className="bg-blue-50 border-[10px] border-black-900 border-solid flex flex-col items-center justify-start pb-7 sm:px-5 px-7">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[84%] sm:w-full"
                        size="txtPixeled30Black900"
                      >
                        issues
                      </Text>
                    </div>
                    <div className="bg-green-50 border-[10px] border-black-900 border-solid flex flex-col items-center justify-start pb-7 sm:px-5 px-7">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[63%] sm:w-full"
                        size="txtPixeled30Black900"
                      >
                        repo
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="absolute left-[4%] text-3xl sm:text-[26px] md:text-[28px] text-black-900 top-[7%]"
                size="txtPixeled30Black900"
              >
                <>
                  warning! <br />
                  error 4040
                </>
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row font-pixeled md:gap-10 gap-[66px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[181px] w-full"
              orientation="horizontal"
            >
              <div className="bg-deep_purple-100 border-[10px] border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-14 w-full">
                <div className="bg-indigo-50 border-[10px] border-black-900 border-solid flex flex-col items-start justify-start p-[25px] sm:px-5 w-full">
                  <div className="bg-red-A200 border-[10px] border-black-900 border-solid h-[85px] md:ml-[0] ml-[7px] w-[85px]"></div>
                </div>
                <Img
                  className="h-[334px] md:h-auto mt-[42px] object-cover w-[74%]"
                  src="images/img_rectangle46.png"
                  alt="rectangleFortySix"
                />
                <Text
                  className="mt-[7px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[47%] sm:w-full"
                  size="txtPixeled30Black900"
                >
                  Emma S
                </Text>
              </div>
              <div className="bg-blue-100 border-[10px] border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-14 w-full">
                <div className="bg-blue-50 border-[10px] border-black-900 border-solid flex flex-col items-start justify-start p-[25px] sm:px-5 w-full">
                  <div className="bg-red-A200 border-[10px] border-black-900 border-solid h-[85px] md:ml-[0] ml-[7px] w-[85px]"></div>
                </div>
                <Img
                  className="h-[334px] md:h-auto mt-[42px] object-cover w-[74%]"
                  src="images/img_rectangle47.png"
                  alt="rectangleFortySeven"
                />
                <Text
                  className="mt-[7px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[44%] sm:w-full"
                  size="txtPixeled30Black900"
                >
                  Aliya T
                </Text>
              </div>
              <div className="bg-yellow-100_01 border-[10px] border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-14 w-full">
                <div className="bg-yellow-50 border-[10px] border-black-900 border-solid flex flex-col items-start justify-start p-[25px] sm:px-5 w-full">
                  <div className="bg-red-A200 border-[10px] border-black-900 border-solid h-[85px] ml-2.5 md:ml-[0] w-[85px]"></div>
                </div>
                <Img
                  className="h-[334px] md:h-auto mt-[42px] object-cover w-[74%]"
                  src="images/img_rectangle48.png"
                  alt="rectangleFortyEight"
                />
                <Text
                  className="mt-[7px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[46%] sm:w-full"
                  size="txtPixeled30Black900"
                >
                  Ekam K
                </Text>
              </div>
            </List>
            <Button
              className="common-pointer border-[10px] border-black-900 border-solid cursor-pointer font-pixeled leading-[normal] min-w-[387px] sm:min-w-full md:ml-[0] ml-[898px] mt-[52px] sm:text-[31px] md:text-[33px] text-[35px] text-center"
              onClick={() => navigate("/about")}
              shape="square"
              color="green_50"
              size="sm"
              variant="fill"
            >
              view all
            </Button>
          </div>
          <Footer className="bg-deep_orange-50 border-[10px] border-black-900 border-solid flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HOME1Page;
