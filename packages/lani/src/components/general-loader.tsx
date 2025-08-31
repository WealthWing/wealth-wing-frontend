import { CenterContent, Flex, Text, theme } from '@wealth-wing/tayo';
import { BeatLoader } from 'react-spinners';

export const GeneralLoader = ({ children }: { children: React.ReactNode }) => (
	<CenterContent width="100%" height="100%">
		<Flex direction="column" alignItems="center" justifyContent="center" gap="s10">
			<Text font="lg" color="textPrimary">
				{children}
			</Text>
			<BeatLoader size={15} color={theme.color.primary100} loading />
		</Flex>
	</CenterContent>
);
