import React from 'react';
//import PropTypes from 'prop-types'
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcBusinessman } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa6';

import dataExperience from '../../data/dataExperience';
import styled from 'styled-components';

const Title = styled('h3')`
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
    &.vertical-timeline-element-title {
        margin: 1rem auto;
        color: #00cccc;
    }
    &.vertical-timeline-element-title2 {
        margin: 1rem auto;
        color: #66b2ff;
    }
`;

const Localtion = styled('span')`
    font-style: italic;
    &.vertical-timeline-element-subtitle {
        text-transform: capitalize;
        font-size: 0.9rem;
        margin: 1rem auto;
        color: #00cccc;
    }
    &.vertical-timeline-element-subtitle2 {
        text-transform: capitalize;
        font-size: 0.9rem;
        margin: 1rem auto;
        color: #66b2ff;
    }
`;

const StyleDescription = styled('p')`
    font-size: 1.1rem;
    &.description {
        text-align: justify;
        margin: 1rem auto;
    }
`;

let timeLineItems = dataExperience;

const TimeLine = () => {
    return (
        <>
            <VerticalTimeline lineColor="#c1c1c1">
                {timeLineItems.map(items => {
                    return (
                        <VerticalTimelineElement
                            key={items.id}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background:
                                    'rgb(255,255,255)',
                                color: '#333',
                                border: '0.1px solid #00CCCC',
                                boxShadow: '0 4px 0.2rem #00CCCC'
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    '17px solid #00CCCC'
                            }}
                            date={items.date}
                            dateClassName="vertical-timeline-date"
                            iconStyle={{
                                background: '#CCFFFF',
                                border: '1px solid #c1c1c1'
                            }}
                            icon={
                                <FcBusinessman />
                            }
                        >
                            <Title className="vertical-timeline-element-title">
                                {items.title}
                            </Title>
                            <Localtion className="vertical-timeline-element-subtitle">
                                {items.local}
                            </Localtion>
                            <StyleDescription className="description">
                                "
                                {
                                    items.description
                                }
                                "
                            </StyleDescription>
                        </VerticalTimelineElement>
                    );
                })}
                <VerticalTimelineElement
                    iconStyle={{
                        background: 'coral',
                        color: '#fff'
                    }}
                    icon={
                        <FaStar color="yellow" />
                    }
                />
            </VerticalTimeline>
        </>
    );
};

TimeLine.propTypes = {};

export default TimeLine;
