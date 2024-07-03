import { Tween } from 'react-gsap';

export const ShowIn = ({ children }) => {
    <Tween
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        duration={2}
    >
        {children}
    </Tween>;
};
