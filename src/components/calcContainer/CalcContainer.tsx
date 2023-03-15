import { FC, useState, memo } from 'react'
import { clsx } from 'clsx';
import add_icon from '../../assets/icons/add_icon.svg';
import { ContainerState } from '../../types/Types';

interface IProps {
  container: ContainerState;
}

const CalcContainer: FC<IProps> = ({container}) => {
  
  return (
    <div
      className={ clsx(
        'h-[448px]', 
        'w-[243px]', 
        'outline-dashed', 
        'outline-2', 
        'outline-zinc-300', 
        'rounded-md', 
        'flex', 
        'justify-center', 
        'items-center', 
        container !== ContainerState.Unhovered && 'bg-custom_light-blue'
      )}
    >
      <div 
        className={clsx(
          container === ContainerState.Filled ? 'hidden' : 'flex',
          'justify-center',
          'items-center',
          'flex-col',
          'font-mono'
        )}
      >
        <img src={add_icon} alt="Перенеси сюда элемент"/>
        <p className={clsx('text-center', 'text-custom_blue', 'font-semibold', 'text-base', 'leading-snug', 'pt-3')}>Перетащите сюда</p>
        <p className={clsx('text-center', 'text-custom_gray', 'font-normal', 'text-sm', 'leading-tight', 'pt-1')}>любой элемент<br />из левой панели</p>
      </div>
    </div>
  )
}

export default memo(CalcContainer);