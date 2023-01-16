import { CSSProperties, FC } from 'react';
import cls from './Skeleton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface SkeletonProps {
	className?: string
   height?:string| number
   width?:string| number
   border?:string
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const {
        height, width, border, className,
    } = props;

    const styles:CSSProperties = {
        width, height, borderRadius: border,
    };
    return (
        <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
    );
};
