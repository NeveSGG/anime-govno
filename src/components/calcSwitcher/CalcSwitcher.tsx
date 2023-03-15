import {FC} from 'react';
import clsx from 'clsx';

export const CalcSwitcher: FC = () => {
  return (
    <div className={clsx(
        'w-[243px]',
        'h-[38px]',
        'bg-custom_light-gray',
        'p-[1px]',
        'rounded-md',
        'flex',
        'items-ceneter',
    )}>
      <section className={clsx(
        'w-[108px]',
        'h-[38px]',
      )}>
        <p className={clsx(
            'font-semibold',
            'text-base',
            'leading-tight',
            'text-custom_dark-gray'
        )}>Runtime</p>
      </section>
      <section className={clsx(
        'w-[133px]',
        'h-[38px]',
      )}>
        <p className={clsx(
            'font-semibold',
            'text-base',
            'leading-tight',
            'text-custom_dark-gray'
        )}>Constructor</p>
      </section>
    </div>
  );
}
