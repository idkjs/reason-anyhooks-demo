  open ReasonAnyhooks;
  let useClock = () => {
    let (date, setDate) = React.useState(() => Js.Date.now());
    let tick = () => {
      setDate(_ => Js.Date.now());
    };
    React.useEffect(() => {
      let ticker = Js.Global.setInterval(() => tick(), 1000);
      Some(() => Js.Global.clearInterval(ticker));
    });
    date;
  };
  let useAnyHooksClock = () => {
    let (date, setDate) = React.useState(() => Js.Date.now());
    let tick = () => {
      setDate(_ => Js.Date.now());
    };
    AnyHooks.useEffect(() => {
      let ticker = Js.Global.setInterval(() => tick(), 1000);
      Some(() => Js.Global.clearInterval(ticker));
    });
    date;
  };