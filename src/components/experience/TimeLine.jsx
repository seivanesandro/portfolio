import React from 'react';
//import PropTypes from 'prop-types'
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcBusinessman } from 'react-icons/fc';
import { FcReading } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa6';

import dataExperience from '../../data/dataExperience';
import styled from 'styled-components';
import { devices } from '../../utils/constantes';

const ContainerBtn = styled('div')`
    margin: 1.9rem auto;
    text-align: center;

    @media only screen and (${devices.portatil}) {
        margin: 1.2rem auto;
        text-align: start;
    }
    @media only screen and (${devices.tablet}) {
        margin: 1.2rem auto;
        text-align: start;
    }
    @media only screen and (${devices.iphone14}) {
        margin: 1.2rem auto;
        text-align: start;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 1.2rem auto;
        text-align: start;
    }
    @media only screen and (${devices.mobileM}) {
        margin: 1.2rem auto;
        text-align: start;
    }
    @media only screen and (${devices.mobileP}) {
        margin: 1.2rem auto;
        text-align: start;
    }
`;

const StyleBtn = styled('button')`
    text-align: center;
    &.btn {
        margin: 1rem auto auto auto;
        text-decoration: none;
        padding: 0.5em 2em;
        border-radius: 5px;
        color: #333;
    }

    &.work-btn {
        background-color: #f5f5f5;
    }

    &.work-btn:hover {
        background-color: #00cccc;
        color: rgb(255, 255, 255);
    }

    &.school-btn {
        background-color: #f5f5f5;
    }

    &.school-btn:hover {
        background-color: #66b2ff;
        color: rgb(255, 255, 255);
    }
`;

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
    font-size: 1.3rem;
    &.description {
        text-align: justify;
        margin: 1rem auto;
    }
`;

let timeLineItems = dataExperience;

const TimeLine = () => {
    return (
        <>
            <VerticalTimeline lineColor="#fff">
                {timeLineItems.map(items => {
                    let button =
                        items.link !==
                            undefined &&
                        items.link !== null &&
                        items.link !== '';
                    return (
                        <VerticalTimelineElement
                            key={items.id}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background:
                                    'rgb(255,255,255)',
                                color: '#333',
                                border:
                                    items.icon ===
                                    'Work'
                                        ? '0.1px solid #00CCCC'
                                        : '0.1px solid #66B2FF',
                                boxShadow:
                                    items.icon ===
                                    'Work'
                                        ? '0 4px 0.2rem #00CCCC'
                                        : '0 4px 0.2rem #66B2FF'
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    items.icon ===
                                    'Work'
                                        ? '17px solid #00CCCC'
                                        : '17px solid #66B2FF'
                            }}
                            date={items.date}
                            dateClassName="date"
                            iconStyle={{
                                background:
                                    items.icon ===
                                    'Work'
                                        ? '#CCFFFF'
                                        : '#CCE5FF',
                                border: '1px solid #c1c1c1'
                            }}
                            icon={
                                items.icon ===
                                'Work' ? (
                                    <FcBusinessman />
                                ) : (
                                    <FcReading />
                                )
                            }
                        >
                            <Title
                                className={
                                    items.icon ===
                                    'Work'
                                        ? 'vertical-timeline-element-title'
                                        : 'vertical-timeline-element-title2'
                                }
                            >
                                {items.title}
                            </Title>
                            <Localtion
                                className={
                                    items.icon ===
                                    'Work'
                                        ? 'vertical-timeline-element-subtitle'
                                        : 'vertical-timeline-element-subtitle2'
                                }
                            >
                                {items.local}
                            </Localtion>
                            <StyleDescription className="description">
                                "
                                {
                                    items.description
                                }
                                "
                            </StyleDescription>
                            <ContainerBtn className="container-btn">
                                {button && (
                                    <StyleBtn
                                        className={`btn ${items.icon === 'Work' ? 'work-btn' : 'school-btn'}`}
                                    >
                                        {
                                            items.link
                                        }
                                    </StyleBtn>
                                )}
                            </ContainerBtn>
                        </VerticalTimelineElement>
                    );
                })}
                <VerticalTimelineElement
                    iconStyle={{
                        background: '#FF9999',
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
