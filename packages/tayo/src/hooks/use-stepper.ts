import React from 'react';

export function useStepper<T extends string>(initialStep: T) {
	const [activeStep, setActiveStep] = React.useState<T>(initialStep);
	const [previousStep, setPreviousStep] = React.useState<T>(initialStep);
	const changeSteps = React.useCallback(
		(step: T) => {
			setPreviousStep(activeStep);
			setActiveStep(step);
		},
		[activeStep]
	);
	return { changeSteps, activeStep, previousStep };
}
