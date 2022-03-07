import React from 'react';

import styled from './Container.module.css';

export const Container: React.FC<React.ReactNode> = ({children}) => {
    return (
        <section className={styled.container} >
            {children}
        </section>
    );
};