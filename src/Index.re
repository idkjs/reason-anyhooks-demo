[@bs.val] external requireCSS: string => unit = "require";
requireCSS("./index.css");
module Clocks = {
  [@react.component]
  let make = () => {
    <div className="grid-container">
     <ReactHooksClock /> <AnyHooksClock /> </div>;
  };
};
ReactDOMRe.renderToElementWithId(<Clocks />, "use-clock");
