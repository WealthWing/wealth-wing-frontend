import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';

/**
 * const dispatch = useAppDispatch();
 * @example dispatch(incrementByAmount(1))
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/**
 * Use to reference state
 * @example  const count = useAppSelector((state) => state.counter.value)
 */
export const useAppSelector = useSelector.withTypes<RootState>();
