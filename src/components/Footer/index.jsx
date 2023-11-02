import React from "react";

import { Button, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mx-auto my-[23px] w-[98%]">
          <Button
            className="!text-black-900 border-[10px] border-black-900 border-solid cursor-pointer font-pixeled leading-[normal] min-w-[334px] sm:text-[31px] md:text-[33px] text-[35px] text-center"
            shape="square"
            color="indigo_50"
            size="xs"
            variant="fill"
          >
            back
          </Button>
          <Text className="text-black-900 text-xl" size="txtPixeled20">
            a-reel all rights reserved{" "}
          </Text>
          <div className="bg-deep_orange-100 border-[10px] border-black-900 border-solid h-[139px] w-[15%]"></div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
