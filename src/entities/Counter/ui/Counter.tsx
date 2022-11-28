import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useTranslation } from 'react-i18next';

interface CounterProps{
className?: string
}

export const Counter: FC<CounterProps> = ({ className }) => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state:StateSchema) => state.counter.value);
    const { t } = useTranslation();
    const decrement = () => {
        dispatch(counterActions.decrement(1));
    };
    const increment = () => {
        dispatch(counterActions.increment(1));
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <p>
                {/* value = */}
                {/* {counterValue} */}
            </p>
            <Button data-testid="increment-btn" onClick={increment}>{t('increment')}</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>{t('decrement')}</Button>
        </div>
    );
};
