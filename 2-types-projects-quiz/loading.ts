{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;
  function printLoginState1(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        console.log(`loading`);
        break;
      case "success":
        console.log(`${state.response.body}`);
        break;
      case "fail":
        console.log(`${state.reason}`);
        break;
    }
    // if ("response" in state) {
    //   console.log(`${state.response.body}`);
    // } else if ("reason" in state) {
    //   console.log(`${state.reason}`);
    // } else {
    //   console.log(`loading`);
    // }
  }
  printLoginState1({ state: "loading" }); // 👀 loading...
  printLoginState1({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState1({ state: "fail", reason: "no network" }); // 😱 no network
}
