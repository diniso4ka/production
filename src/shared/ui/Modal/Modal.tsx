import {
    FC, ReactNode, MouseEvent, useEffect, useCallback, useState,
} from 'react';
import cls from './Modal.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps{
	className?: string,
	children:ReactNode,
	isOpen?: boolean
	onClose?: ()=> void
    lazy?: boolean
}

export const Modal: FC<ModalProps> = ({
    className, children, isOpen, onClose, lazy = false,
}) => {
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    const mods:Mods = {
        [cls.opened]: isOpen,
    };

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose?.();
        }
    }, [onClose]);

    const onClickContent = (e:MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        } else {
            setIsMounted(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown, isOpen]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div onClick={onClose} className={cls.overlay}>
                    <div onClick={onClickContent} className={classNames(cls.content, { [cls.opened]: isOpen })}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
