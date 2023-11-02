import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-pixeled items-center justify-end mx-auto pt-20 w-full">
        <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1281px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-1.5 justify-start md:mt-0 mt-[116px] w-[43%] md:w-full">
                <div className="h-[186px] relative w-[33%]">
                  <div className="h-[186px] m-auto w-full">
                    <div className="h-[186px] m-auto w-full">
                      <div className="absolute bg-red-A200 border-[10px] border-black-900 border-solid bottom-[0] h-[166px] inset-x-[0] mx-auto w-full"></div>
                      <div className="absolute bg-red-A200 border-[10px] border-black-900 border-solid h-[186px] inset-y-[0] left-[0] my-auto w-[58%]"></div>
                    </div>
                    <div
                      className="common-pointer absolute bg-red-A200 border border-black-900 border-solid bottom-[0] h-[156px] inset-x-[0] mx-auto w-[70%]"
                      onClick={() => navigate("/login")}
                    ></div>
                  </div>
                  <div className="absolute bg-red-A200 border-[10px] border-black-900 border-solid bottom-[0] h-[142px] inset-x-[0] mx-auto w-full"></div>
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[23px] w-[96%] md:w-full">
                  <div className="h-[84px] relative w-1/4">
                    <Text
                      className="common-pointer m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtPixeled30Black900"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-max"
                      size="txtPixeled30Black900"
                    >
                      Login
                    </Text>
                  </div>
                  <div className="h-[186px] md:h-[194px] mt-2 relative w-[35%]">
                    <div className="h-[186px] m-auto w-full">
                      <div className="h-[186px] m-auto w-full">
                        <div className="absolute bg-blue-A700 border-[10px] border-black-900 border-solid bottom-[0] h-[166px] inset-x-[0] mx-auto w-full"></div>
                        <div className="absolute bg-blue-A700 border-[10px] border-black-900 border-solid h-[186px] inset-y-[0] left-[0] my-auto w-[58%]"></div>
                      </div>
                      <div className="absolute bg-blue-A700 border border-black-900 border-solid bottom-[0] h-[156px] inset-x-[0] mx-auto w-[70%]"></div>
                    </div>
                    <div
                      className="common-pointer absolute bg-blue-A700 border-[10px] border-black-900 border-solid bottom-[0] h-[142px] inset-x-[0] mx-auto w-full"
                      onClick={() => navigate("/board")}
                    ></div>
                  </div>
                </div>
                <div className="h-[84px] md:ml-[0] ml-[381px] relative w-[27%]">
                  <Text
                    className="common-pointer m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtPixeled30Black900"
                    onClick={() => navigate("/board")}
                  >
                    Board
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-max"
                    size="txtPixeled30Black900"
                  >
                    Board
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col justify-start w-[53%] md:w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[308px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="h-[186px] sm:ml-[0] relative w-full">
                    <div className="h-[186px] m-auto w-full">
                      <div className="h-[186px] m-auto w-full">
                        <div className="absolute bg-deep_orange-400 border-[10px] border-black-900 border-solid bottom-[0] h-[166px] inset-x-[0] mx-auto w-full"></div>
                        <div className="absolute bg-deep_orange-400 border-[10px] border-black-900 border-solid h-[186px] inset-y-[0] left-[0] my-auto w-[58%]"></div>
                      </div>
                      <div className="absolute bg-deep_orange-400 border border-black-900 border-solid bottom-[0] h-[156px] inset-x-[0] mx-auto w-[70%]"></div>
                    </div>
                    <div className="absolute bg-deep_orange-400 border-[10px] border-black-900 border-solid bottom-[0] h-[142px] inset-x-[0] mx-auto w-full"></div>
                  </div>
                  <div className="h-[186px] sm:ml-[0] relative w-full">
                    <div className="h-[186px] m-auto w-full">
                      <div className="h-[186px] m-auto w-full">
                        <div className="absolute bg-yellow-400 border-[10px] border-black-900 border-solid bottom-[0] h-[166px] inset-x-[0] mx-auto w-full"></div>
                        <div className="absolute bg-yellow-400 border-[10px] border-black-900 border-solid h-[186px] inset-y-[0] left-[0] my-auto w-[58%]"></div>
                      </div>
                      <div className="absolute bg-yellow-400 border border-black-900 border-solid bottom-[0] h-[156px] inset-x-[0] mx-auto w-[70%]"></div>
                    </div>
                    <div className="absolute bg-yellow-400 border-[10px] border-black-900 border-solid bottom-[0] h-[142px] inset-x-[0] mx-auto w-full"></div>
                  </div>
                </List>
                <div className="flex flex-row sm:gap-10 items-center justify-between ml-2 md:ml-[0] mt-1.5 w-[96%] md:w-full">
                  <div className="h-[84px] relative w-1/4">
                    <Text
                      className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtPixeled30Black900"
                    >
                      Issues
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-max"
                      size="txtPixeled30Black900"
                    >
                      Issues
                    </Text>
                  </div>
                  <div className="h-[84px] relative w-[23%]">
                    <Text
                      className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtPixeled30Black900"
                    >
                      About
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-green-700 w-max"
                      size="txtPixeled30Green700"
                    >
                      About
                    </Text>
                  </div>
                </div>
                <div className="h-[186px] md:h-[280px] md:ml-[0] ml-[214px] mt-[94px] relative w-[27%]">
                  <div className="h-[186px] m-auto w-full">
                    <div className="h-[186px] m-auto w-full">
                      <div className="absolute bg-deep_purple-A200 border-[10px] border-black-900 border-solid bottom-[0] h-[166px] inset-x-[0] mx-auto w-full"></div>
                      <div className="absolute bg-deep_purple-A200 border-[10px] border-black-900 border-solid h-[186px] inset-y-[0] left-[0] my-auto w-[58%]"></div>
                    </div>
                    <div
                      className="common-pointer absolute bg-deep_purple-A200 border border-black-900 border-solid bottom-[0] h-[156px] inset-x-[0] mx-auto w-[70%]"
                      onClick={() => navigate("/")}
                    ></div>
                  </div>
                  <div className="absolute bg-deep_purple-A200 border-[10px] border-black-900 border-solid bottom-[0] h-[142px] inset-x-[0] mx-auto w-full"></div>
                </div>
                <div className="h-[84px] md:h-[90px] ml-60 md:ml-[0] mt-1.5 relative w-[19%]">
                  <Text
                    className="common-pointer m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtPixeled30Black900"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-max"
                    size="txtPixeled30Black900"
                  >
                    Home
                  </Text>
                </div>
              </div>
            </div>
            <div className="md:gap-5 gap-[66px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[122px] w-full">
              <div className="bg-deep_purple-100 border-[10px] border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-[55px] w-full">
                <div className="bg-indigo-50 border-[10px] border-black-900 border-solid flex flex-col items-start justify-start p-[25px] sm:px-5 w-full">
                  <div className="bg-red-A200 border-[10px] border-black-900 border-solid h-[85px] md:ml-[0] ml-[7px] w-[85px]"></div>
                </div>
                <Img
                  className="h-[334px] md:h-auto mt-[42px] object-cover w-[74%]"
                  src="images/img_rectangle46.png"
                  alt="rectangleFortySeven"
                />
                <Text
                  className="mt-2 text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[47%] sm:w-full"
                  size="txtPixeled30Black900"
                >
                  Emma S
                </Text>
              </div>
              <div className="bg-blue-100 border-[10px] border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-[55px] w-full">
                <div className="bg-blue-50 border-[10px] border-black-900 border-solid flex flex-col items-start justify-start p-[25px] sm:px-5 w-full">
                  <div className="bg-red-A200 border-[10px] border-black-900 border-solid h-[85px] md:ml-[0] ml-[7px] w-[85px]"></div>
                </div>
                <Img
                  className="h-[334px] md:h-auto mt-[42px] object-cover w-[74%]"
                  src="images/img_rectangle47.png"
                  alt="rectangleFortyEight"
                />
                <Text
                  className="mt-2 text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[44%] sm:w-full"
                  size="txtPixeled30Black900"
                >
                  Aliya T
                </Text>
              </div>
              <div className="bg-yellow-100 border-[10px] border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-[55px] w-full">
                <div className="bg-yellow-50 border-[10px] border-black-900 border-solid flex flex-col items-start justify-start p-[25px] sm:px-5 w-full">
                  <div className="bg-red-A200 border-[10px] border-black-900 border-solid h-[85px] ml-2.5 md:ml-[0] w-[85px]"></div>
                </div>
                <Img
                  className="h-[334px] md:h-auto mt-[42px] object-cover w-[74%]"
                  src="images/img_rectangle48.png"
                  alt="rectangleFortyNine"
                />
                <Text
                  className="mt-2 text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[46%] sm:w-full"
                  size="txtPixeled30Black900"
                >
                  Ekam K
                </Text>
              </div>
              <div className="bg-deep_orange-100 border-[10px] border-black-900 border-solid flex flex-1 flex-col gap-[42px] items-center justify-start pb-[63px] w-full">
                <div className="bg-deep_orange-50 border-[10px] border-black-900 border-solid flex flex-col items-start justify-start p-[25px] sm:px-5 w-full">
                  <div className="bg-red-A200 border-[10px] border-black-900 border-solid h-[85px] md:ml-[0] ml-[7px] w-[85px]"></div>
                </div>
                <Img
                  className="h-[334px] md:h-auto object-cover w-[74%]"
                  src="images/img_rectangle50.png"
                  alt="rectangleFifty"
                />
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[39%] sm:w-full"
                  size="txtPixeled30Black900"
                >
                  Luna I
                </Text>
              </div>
              <div className="bg-green-A100 border-[10px] border-black-900 border-solid flex flex-1 flex-col gap-[42px] items-center justify-start pb-[63px] w-full">
                <div className="bg-green-50 border-[10px] border-black-900 border-solid flex flex-col items-start justify-start p-[25px] sm:px-5 w-full">
                  <div className="bg-red-A200 border-[10px] border-black-900 border-solid h-[85px] md:ml-[0] ml-[7px] w-[85px]"></div>
                </div>
                <Img
                  className="h-[334px] md:h-auto object-cover w-[74%]"
                  src="images/img_rectangle51.png"
                  alt="rectangleFiftyOne"
                />
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[61%] sm:w-full"
                  size="txtPixeled30Black900"
                >
                  Raunak M
                </Text>
              </div>
            </div>
            <List
              className="flex flex-col gap-[95px] items-center mt-[204px] w-full"
              orientation="vertical"
            >
              <div className="bg-green-A100 border-[10px] border-black-900 border-solid flex flex-1 flex-col justify-start pb-[257px] w-full">
                <div className="bg-green-50 border-[10px] border-black-900 border-solid gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start p-[25px] sm:px-5 w-full">
                  <div className="bg-red-A200 border-[10px] border-black-900 border-solid h-[85px] w-[85px]"></div>
                  <div className="bg-yellow-100 border-[10px] border-black-900 border-solid h-[85px] w-[85px]"></div>
                  <div className="bg-light_green-300 border-[10px] border-black-900 border-solid h-[85px] w-[85px]"></div>
                </div>
                <Text
                  className="md:ml-[0] ml-[60px] mt-[57px] md:text-5xl text-[100px] text-black-900"
                  size="txtPanic100"
                >
                  mission
                </Text>
                <Text
                  className="md:ml-[0] ml-[226px] mt-[279px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 w-[56%] sm:w-full"
                  size="txtPixeled35"
                >
                  our mission here{" "}
                </Text>
              </div>
              <div className="bg-yellow-100_01 border-[10px] border-black-900 border-solid flex flex-1 flex-col justify-start pb-[162px] w-full">
                <div className="bg-yellow-50 border-[10px] border-black-900 border-solid gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start p-[25px] sm:px-5 w-full">
                  <div className="bg-red-A200 border-[10px] border-black-900 border-solid h-[85px] w-[85px]"></div>
                  <div className="bg-yellow-100 border-[10px] border-black-900 border-solid h-[85px] w-[85px]"></div>
                  <div className="bg-light_green-300 border-[10px] border-black-900 border-solid h-[85px] w-[85px]"></div>
                </div>
                <Text
                  className="md:ml-[0] ml-[55px] mt-[86px] md:text-5xl text-[100px] text-black-900"
                  size="txtPanic100"
                >
                  Features
                </Text>
                <Text
                  className="md:ml-[0] ml-[233px] mt-[182px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 w-[56%] sm:w-full"
                  size="txtPixeled35"
                >
                  some cool features to list
                </Text>
              </div>
            </List>
          </div>
          <Footer className="bg-deep_orange-50 border-[10px] border-black-900 border-solid flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
