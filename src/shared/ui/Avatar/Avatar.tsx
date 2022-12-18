import {
    CSSProperties, FC, memo, useMemo,
} from 'react';
import cls from './Avatar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface AvatarProps{
	className?: string
	src?:string
	alt?:string
	size?: number
}

export const Avatar = memo(({
    className, src, alt, size = 300,
}:AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    return (
        <img style={styles} src={src} className={classNames(cls.Avatar, {}, [className])} alt={alt} />
    );
});
