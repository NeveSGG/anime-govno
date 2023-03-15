import { FC, useState, memo } from 'react'
import { clsx } from 'clsx';
import { ContainerState } from '../../types/Types';
import CalcContainer from '../../components/calcContainer';
import CalcSwitcher from '../../components/calcSwitcher';

const App: FC = () => {
  const [container, setContainer] = useState<ContainerState>(ContainerState.Unhovered);
  return (
    <div className={clsx(
      'm-5',
      'flex',
      'flex-col',
      'gap-3'
    )}>
      <CalcSwitcher />
      <CalcContainer container={container}/>
    </div>
  )
}

export default memo(App);