import React, { useState, useEffect } from 'react';
import { Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalCloseButton, Text, Box } from '@chakra-ui/react';

function Badges() {
    const [badges, setBadges] = useState([]);
    const [selectedBadge, setSelectedBadge] = useState(null);

    useEffect(() => {
        // Fetch badges data
        fetchBadges();
    }, []);

    const fetchBadges = async () => {
        try {
            const response = await fetch('https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/badges', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    apikey: 'k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be',
                    userid: 'u-a2399489-9cd0-4c94-ad12-568379202b08',
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc'
                }
            });
            const data = await response.json();
            setBadges(data.data);
        } catch (error) {
            console.error('Error fetching badges:', error);
        }
    };

    const handleBadgeClick = (badge) => {
        setSelectedBadge(badge);
    };

    const handleCloseModal = () => {
        setSelectedBadge(null);
    };

    return (
        <>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "23px",
                justifyContent: "center",
                background: "white",
                paddingTop: "22px"
            }}>
                {badges.map((badge, index) => (
                    <div key={index} style={{ display: "flex", flexWrap: "wrap", gap: "23px", borderRadius: "50%" }}>
                        <Image
                            src={badge.imageUrl}
                            alt={badge.name}
                            style={{
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                                borderRadius: "50%",
                                boxSize: '150px',
                                border: "3px solid white",
                                width: "87px",
                                height: "86px",
                                cursor: "pointer"
                            }}
                            onClick={() => handleBadgeClick(badge)}
                        />
                    </div>
                ))}
            </div>
            <Modal isOpen={selectedBadge !== null} onClose={handleCloseModal} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectedBadge?.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display="flex" flexDirection={"column"} alignItems={"center"} padding="92px">
                            <Image src={selectedBadge?.imageUrl} alt={selectedBadge?.name} width="120px" />
                            <Text fontSize="xl" mt={4} textAlign="center">Badge Unlocked 🌟</Text>
                            <Text fontSize="xl" textAlign="center">🎉 Level Up! Earned a shiny new badge! 🎖️🌟</Text>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
            {selectedBadge && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 1000 
                }} onClick={handleCloseModal} />
            )}
        </>
    );
}

export default Badges;
