import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs/react';
import React, { Fragment } from "react";
import { withDocs } from "storybook-readme";
import { withConsole } from '@storybook/addon-console';

// import { jsxDecorator } from 'storybook-addon-jsx';

import CCModal from "./CCModal";
import readme from "./README.md";

const buildProps = (backgroundModalColor, showModal, showBackgroundModal, widthCloseIcon, widthModal, maxWidthModal) => {
    return (
        {
            backgroundModalColor,
            showModal,
            showBackgroundModal,
            widthCloseIcon,
            widthModal,
            maxWidthModal
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
                <CCModal
                    {...buildProps(
                        text('Background Modal Color', 'rgba(0, 0, 0, 0.5)'),
                        boolean('Show Modal', true),
                        boolean('Show Background Modal', true),
                        number('Width Close Icon', 16),
                        text('Width Modal', '60%'),
                        text('Max Width Modal', '60%'),
                    )}
                >
                    <h1>Hola</h1>
                </CCModal>
            </Fragment>
        );
  });
