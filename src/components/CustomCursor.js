import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-primary-400 bg-primary-500/20"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: hidden ? 0 : clicked ? 0.85 : 1,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
        mass: 0.5,
      }}
      style={{ width: 24, height: 24 }}
    />
  );
};

export default CustomCursor;

