import "jest-styled-components";

import React from "react";
import renderer from "react-test-renderer";

import CCButton from "./CCButton";

describe("CCButton", () => {

  it("renders without props", () => {
    const tree = renderer.create(<CCButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
