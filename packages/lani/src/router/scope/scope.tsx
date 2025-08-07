import { AddScope } from 'router/scope/add-scope';
import { scope } from 'router/scope/scope.styles';

export const Scope = () => {
	/* 
	TODO:
	- handle loading state
	- handle error state
	- handle empty state
	- handle pagination
	- handle search
	- handle filter
	- handle sort
	*/

	return (
		<div css={scope.root}>
			<div css={scope.container}>
				<div css={scope.scopes}>
					<AddScope />
				</div>
			</div>
		</div>
	);
};
