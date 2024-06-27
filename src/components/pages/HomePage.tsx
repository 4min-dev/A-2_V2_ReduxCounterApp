import React from 'react';
import '../../style/css/pages/homePage/homePage.css';
import { HomePageMainCounterInterface } from '../UI/homePageUI/HomePageMainCounterInterface';
import { HomePageUsersSection } from '../sections/homePageSections/HomePageUsersSection';
import { useTypedSelectorStates } from '../../hooks/useTypedSelectorStates';
import { ErrorInterface } from '../UI/errors/ErrorInterface';

export const HomePage:React.FC = () => {

    const selector = useTypedSelectorStates(state => state.bankReducer)

  return (
    <div className='homePage'>
      <h1>{`Total cash - $${selector.cash}`}</h1>
      {selector.error && <ErrorInterface error={selector.error} canReload={false}/>}
      <HomePageMainCounterInterface totalCash={selector.cash}/>
      <HomePageUsersSection/>
    </div>
  )
}