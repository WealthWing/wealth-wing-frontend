import * as React from 'react';

import { appWrapper } from './containers.styles';

export const AppWrapper = ({ children }: React.PropsWithChildren<unknown>) => (
	<div css={appWrapper}>{children}</div>
);
