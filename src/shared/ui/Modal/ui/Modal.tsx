import {
    FC, ReactNode, MouseEvent, useEffect, useCallback,
} from 'react';
import cls from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps{
	className?: string,
	children:ReactNode,
	isOpen?: boolean
	onClose?: ()=> void
}

export const Modal: FC<ModalProps> = ({
    className, children, isOpen, onClose,
}) => {
    const { theme } = useTheme();
    const mods:Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    const onClickContent = (e:MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown, isOpen]);

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
