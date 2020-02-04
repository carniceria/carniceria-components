import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs/react';
import React, { Fragment } from "react";
import { withDocs } from "storybook-readme";
import { withConsole } from '@storybook/addon-console';

// import { jsxDecorator } from 'storybook-addon-jsx';

import CCTooltip from "./CCTooltip";
import readme from "./README.md";

storiesOf("CCTooltip", module).addDecorator(withKnobs)
    .addDecorator(withDocs(readme))
    .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
    // .addDecorator(jsxDecorator)
    // .addDecorator((story, context) => withInfo('common info')(story)(context))
    .add("Tooltip básico", () => {
        const children = text('children', 'CC Boton');
        const tooltipContent = 'Contenido de tooltip';

        return (
            <Fragment>
                <CCTooltip>
                    {
                        [children, tooltipContent]
                    }
                </CCTooltip>
            </Fragment>
        );
  });
