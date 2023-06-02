import React, {useEffect} from 'react';
import { Collapse } from 'antd';
import ReactPlayer from 'react-player';

const { Panel } = Collapse;

const VideoPlayer = ({ video }) => {

    return (
        <>
            <ReactPlayer url={video?.videoUrl} controls={true} width="100%" height='650px' />
        </>
    );
};

export default VideoPlayer;
