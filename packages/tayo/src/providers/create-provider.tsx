import React from 'react';

type CreateProviderReturn<TContextValue> = [
	React.FunctionComponent<React.PropsWithChildren<TContextValue>>,
	() => TContextValue
];

type CreateProviderOptions<TContextValue> = {
	defaultValue?: TContextValue;
	undefinedAction?: 'warn' | 'suppress';
};

function getErrorMessage(provider: string) {
	return `useContext returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}

/**
 * Create a provider and a hook to access the context value
 * const [ModalProvider, useModal] = createProvider<ModalProviderProps>('Modal');
 *
 */

export function createProvider<TContextValue>(
	providerName: string,
	options?: CreateProviderOptions<TContextValue>
): CreateProviderReturn<TContextValue> {
	const Context = React.createContext<TContextValue | undefined>(options?.defaultValue);

	function useContext() {
		const context = React.useContext(Context);

		if (context === undefined) {
			const error = new Error(getErrorMessage(providerName));
			error.name = 'ContextError';
			Error.captureStackTrace?.(error, useContext);
			throw error;
		}

		return context;
	}

	function ContextProvider({
		children,
		...contextValue
	}: React.PropsWithChildren<TContextValue>) {
		return (
			<Context.Provider value={contextValue as TContextValue}>{children}</Context.Provider>
		);
	}

	return [ContextProvider, useContext];
}
