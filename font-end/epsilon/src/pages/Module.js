import React from 'react';
import '../css/Module.css';
import { motion } from "framer-motion"

const ModuleData = [
    {
      title: 'Module 1',
      description: 'Module 1 description',
      file: '1'
    },
    {
        title: 'Module 1',
        description: 'Module 1 description',
        file: '1'
      },
      {
        title: 'Module 1',
        description: 'Module 1 description',
        file: '1'
      },

  ];

const Module = () => {
    return (
        <div>
            {ModuleData.map((module) => (
                <motion.div className='module-container'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <h2 className='module-title'>{module.title}</h2>
                    <p className='module-text'>{module.description}</p>
                    <button className='module-button' href={module.file} download>Click to download</button>
                </motion.div>
            ))}
        </div>
    );
};

export default Module;
