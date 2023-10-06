import React from 'react'

// stylesheet
import "./style/SchoolProfile.css";

// component
import SearchNav from '../SearchPage/components/SearchNav';
import SchoolInfo from './SchoolInfo';

const SchoolProfile = () => {
  return (
    <div className='school_profile'>
        <SearchNav/>
        <SchoolInfo/>
    </div>
  )
}

export default SchoolProfile