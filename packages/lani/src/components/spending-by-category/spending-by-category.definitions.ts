import type { HeadingTag } from '@wealth-wing/tayo';

export type SpendingByCategoryItem = {
	category_id: string;
	category: string;
	expense: number;
	transaction_count: number;
};

export type SpendingByCategoryData = {
	spending_by_categories: readonly SpendingByCategoryItem[];
	total_spending_by_category: number;
	transaction_count: number;
};

type SpendingByCategoryCommonProps = {
	className?: string;
	headingTag?: HeadingTag;
	title?: string;
	titleId?: string;
};

type SpendingByCategoryState =
	| {
			status: 'loading';
	  }
	| {
			onRetry?: () => void;
			status: 'error';
	  }
	| {
			data: SpendingByCategoryData;
			isRefreshing?: boolean;
			status: 'ready';
	  };

export type SpendingByCategoryProps = SpendingByCategoryCommonProps & SpendingByCategoryState;
