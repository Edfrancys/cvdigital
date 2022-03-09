import React from 'react';
import { motion } from 'framer-motion';

import styled from './Celular.module.css';

export const Celular: React.FC<React.ReactNode> = ({children}) => {
    
    const display = {
        visible: {
            opacity: 1
        },
        hidden: {
            opacity: 0
        }
    };

    return(
        <motion.div className={styled.container} 
            animate={{scale:[5,1]}}
            transition={{ duration: 0.5 }}
        >
            <div className={styled.borderCelular}>
                <motion.div className={styled.displayCelular}
                    initial="hidden"
                    animate="visible"
                    variants={display}
                    transition={{ delay:0.6 ,duration: 0.35 }}
                >
                    {children}
                </motion.div>
                <div className={styled.button} />
            </div>
           
        </motion.div>
    );
};