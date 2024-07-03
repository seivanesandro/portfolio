import { Tween } from 'react-gsap';

export const FadeInRight = ({ children }) => (
    <Tween
        from={{
            opacity: 0,
            position: 'relative',
            right: '-1rem'
        }}
        to={{
            opacity: 1,
            right: '0'
        }}
        // ease={'back.out(0.3)'}
        // duration={duration}.1)
        stagger={0.2}
        ease="elastic.out(0.2, 0)"
    >
        {children}
    </Tween>
);
