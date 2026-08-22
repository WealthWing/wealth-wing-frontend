import { ComponentPropsWithoutRef } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { markdown } from './markdown.styles';

export type MarkdownProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
	/** Markdown source to render. Raw HTML is not executed. */
	children: string;
	/** Optional element overrides passed to react-markdown. */
	components?: Components;
};

const MarkdownTable = ({ children }: ComponentPropsWithoutRef<'table'>) => (
	<div css={markdown.tableScroll}>
		<table>{children}</table>
	</div>
);

/** Renders Markdown with GitHub Flavored Markdown support and responsive tables. */
export const Markdown = ({ children, className, components, ...rest }: MarkdownProps) => (
	<div {...rest} className={className} css={markdown.root}>
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			components={{ table: MarkdownTable, ...components }}
		>
			{children}
		</ReactMarkdown>
	</div>
);
