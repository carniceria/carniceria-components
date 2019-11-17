import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
  name: "carniceria-react-components",
  url: "",
  goFullScreen: false,
  showDownPanel: true,
  showPanel: true,
  downPanelInRight: true,
  panelPosition: 'right',
});

const req = require.context("../src", true, /.+\.stories\.js/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
