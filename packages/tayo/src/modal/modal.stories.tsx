import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { Flex } from '../containers';
import { Modal, ModalBody, ModalFooter, ModalHeader } from './modal';

const ModalContent = ({ onClose }: { onClose: () => void }) => {
	return (
		<>
			<ModalBody>
				<p>This is a ModalSection.</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur totam
					harum, debitis neque laudantium. Architecto asperiores cumque ipsum et accusamus
					facere, optio minus quidem explicabo unde inventore sit est!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur totam
					harum, debitis neque laudantium. Architecto asperiores cumque ipsum et accusamus
					facere, optio minus quidem explicabo unde inventore sit est!
				</p>
			</ModalBody>
			<ModalFooter>
				<Flex direction="row" justifyContent="space-between">
					<Button onClick={onClose} variant="tertiary" format="outline">
						Close
					</Button>
					<Flex direction="row" gap="s16">
						<Button
							onClick={() => alert('Primary Action')}
							variant="tertiary"
							format="outline"
						>
							Primary Action
						</Button>
						<Button
							onClick={() => alert('Secondary Action')}
							variant="tertiary"
							format="outline"
						>
							Secondary Action
						</Button>
					</Flex>
				</Flex>
			</ModalFooter>
		</>
	);
};

const meta = {
	title: 'Modal',
	component: Modal,
	argTypes: {
		children: {
			control: false
		}
	},
	decorators: [
		(Story, ctx) => {
			const [, setArgs] = useArgs<typeof ctx.args>();

			const onClose = () => {
				setArgs({ isOpen: false });
			};

			return (
				<div>
					<Button
						onClick={() => setArgs({ isOpen: true })}
						variant="primary"
						format="regular"
					>
						Open Modal
					</Button>

					<Modal {...ctx.args} onClose={onClose}>
						<ModalHeader title="Modal Title" />
						<ModalContent onClose={onClose} />
					</Modal>
				</div>
			);
		}
	]
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalStory: Story = {
	args: {
		isOpen: false,
		children: '',
		onClose: () => {},
		variant: 'floatingsmall'
	}
};
