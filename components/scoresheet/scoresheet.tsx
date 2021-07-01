import React from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';

export const Schoresheet = ({ scoresheetPath }: any) => {
  if (!scoresheetPath) {
    return <>-</>;
  }

  return (
    <>
      <a href={process.env.REACT_APP_BASE_ASSETS_API_URL + scoresheetPath} target="_blank" rel="noopener noreferrer">
        <ListAltIcon color="primary" />
      </a>
    </>
  )
}