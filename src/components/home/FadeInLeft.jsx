import { Tween } from 'react-gsap';

export const FadeInLeft = ({ children }) => (
    <Tween
        from={{
            opacity: 0,
            position: 'relative',
            left: '-1rem'
        }}
        to={{
            opacity: 1, left: '0'
        }}
        ease={'back.out(0.3)'}
    >
        {children}
    </Tween>
);
