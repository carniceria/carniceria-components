import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs/react';
import React, { Fragment } from "react";
import { withDocs } from "storybook-readme";
import { withConsole } from '@storybook/addon-console';

// import { jsxDecorator } from 'storybook-addon-jsx';

import CCModal from "./CCModal";
import readme from "./README.md";

const buildProps = (fontSize, disable, borderColor, fontColor, showBorder, backgroundColor, hoverBackgroundHover) => {
    return (
        {
          fontSize,
          disable,
          borderColor,
          fontColor,
          showBorder,
          backgroundColor,
          hoverBackgroundHover
        }
    )
}

storiesOf("CCModal", module).addDecorator(withKnobs)
    .addDecorator(withDocs(readme))
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    // .addDecorator(jsxDecorator)
    // .addDecorator((story, context) => withInfo('common info')(story)(context))
    .add("Modal básico", () => {
        return (
            <Fragment>
                <CCModal>
                </CCModal>
            </Fragment>
        );
  });
