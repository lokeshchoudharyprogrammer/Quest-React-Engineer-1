import React, { useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

// Box component
const BoxComponent = ({ title, data, show, onClick }) => {
  return (
    <Box
      onClick={onClick}
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      cursor="pointer"
      bg={show ? 'blue.200' : 'white'}
    >
      <Heading size="md">{title}</Heading>
      {show && <p>{data}</p>}
    </Box>
  );
};

// Display component
const DisplayComponent = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleClick = (boxIndex) => {
    setActiveBox(boxIndex === activeBox ? null : boxIndex);
  };

  const boxes = [
    { title: 'Membership', data: 'Membership Data' },
    { title: 'Badges', data: 'Badges Data' },
    { title: 'Points History', data: 'Points History Data' }
  ];

  return (
    <Box textAlign="center">
      <Heading as="h1" size="xl" mb="4">
        Display
      </Heading>
      <Flex justify="center" alignItems="center" flexWrap="wrap">
        {boxes.map((box, index) => (
          <BoxComponent
            key={index}
            title={box.title}
            data={box.data}
            show={activeBox === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default DisplayComponent;
