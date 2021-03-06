import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs/react';
import React, { Fragment } from "react";
import { withDocs } from "storybook-readme";
import { withConsole } from '@storybook/addon-console';

// import { jsxDecorator } from 'storybook-addon-jsx';

import CCButton from "./CCButton";
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

storiesOf("CCButton", module).addDecorator(withKnobs)
    .addDecorator(withDocs(readme))
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    // .addDecorator(jsxDecorator)
    // .addDecorator((story, context) => withInfo('common info')(story)(context))
    .add("Boton básico", () => {
        const children = text('children', 'CC Boton');
        return (
            <Fragment>
                <CCButton {...buildProps(
                    number('Font size', 16),
                    boolean('Disabled', false),
                    color('Border Color', '#111'),
                    color('Font Color', '#111'),
                    boolean('Show Border', true),
                    color('Background Color', '#FFF'),
                    boolean('Hover Background Hover', false),
                )}>
                    {
                        children
                    }
                </CCButton>
            </Fragment>
        );
  });
