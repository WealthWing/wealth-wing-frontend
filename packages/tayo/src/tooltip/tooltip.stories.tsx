import { Button } from '../button';
import { Icon } from '../icon';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

export default {
	component: Tooltip,
	title: 'tooltip'
};

export const Single = () => (
	<Tooltip>
		<TooltipTrigger>
			<Button format="regular" variant="secondary">
				<Icon name="sort-arrow" /> 3
			</Button>
		</TooltipTrigger>
		<TooltipContent>Here is my tip!</TooltipContent>
	</Tooltip>
);

export const Corners = () => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			justifyContent: 'space-between'
		}}
	>
		<div style={{ justifyContent: 'space-between', display: 'flex' }}>
			<Tooltip>
				<TooltipTrigger>
					<Button format="regular" variant="secondary">
						<Icon name="sort-arrow" /> 3
					</Button>
				</TooltipTrigger>
				<TooltipContent>Here is my tip!</TooltipContent>
			</Tooltip>
			<Tooltip>
				<TooltipTrigger>
					<Button format="regular" variant="secondary">
						<Icon name="sort-arrow" /> 3
					</Button>
				</TooltipTrigger>
				<TooltipContent>Here is my tip!</TooltipContent>
			</Tooltip>
		</div>
		<div style={{ alignSelf: 'center' }}>
			<Tooltip>
				<TooltipTrigger>
					<Button format="regular" variant="secondary">
						<Icon name="sort-arrow" /> 3
					</Button>
				</TooltipTrigger>
				<TooltipContent>Here is my tip!</TooltipContent>
			</Tooltip>
		</div>
		<div style={{ justifyContent: 'space-between', display: 'flex' }}>
			<Tooltip>
				<TooltipTrigger>
					<Button format="regular" variant="secondary">
						<Icon name="sort-arrow" /> 3
					</Button>
				</TooltipTrigger>
				<TooltipContent>Here is my tip!</TooltipContent>
			</Tooltip>
			<Tooltip>
				<TooltipTrigger>
					<Button format="regular" variant="secondary">
						<Icon name="sort-arrow" /> 3
					</Button>
				</TooltipTrigger>
				<TooltipContent>Here is my tip!</TooltipContent>
			</Tooltip>
		</div>
	</div>
);

export const Interactive = () => {
	return (
		<Tooltip isInteractive placement="bottom">
			<TooltipTrigger>
				<span>hello</span>
			</TooltipTrigger>
			<TooltipContent>
				<a style={{ color: 'white' }} href="https://www.google.com">
					google
				</a>
			</TooltipContent>
		</Tooltip>
	);
};
