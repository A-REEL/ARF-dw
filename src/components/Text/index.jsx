import React from "react";

const sizeClasses = {
  txtPanic250: "font-normal font-panic",
  txtPixeled30RedA200: "font-normal font-pixeled",
  txtPixeled35: "font-normal font-pixeled",
  txtPixeled30Green700: "font-normal font-pixeled",
  txtPanic250PurpleA200dd: "font-normal font-panic",
  txtPixeled30: "font-normal font-pixeled",
  txtPixeled20: "font-normal font-pixeled",
  txtPixeled30Black900: "font-normal font-pixeled",
  txtPanic100: "font-normal font-panic",
  txtPixeled30BlueA700: "font-normal font-pixeled",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
