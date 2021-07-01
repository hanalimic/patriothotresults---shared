import React from 'react';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import TvOffIcon from '@material-ui/icons/TvOff';

export const LiveStream = ({ liveStreamUrl }: any) => {
  console.log('liveStreamUrl: ', liveStreamUrl);

  return (
    <>
      {liveStreamUrl ?
        <a href={liveStreamUrl} target="_blank" title={liveStreamUrl}>
          <LiveTvIcon color="primary" />
        </a>
        :
        <span>
          <TvOffIcon color="disabled" />
        </span>
      }
    </>
  )
}