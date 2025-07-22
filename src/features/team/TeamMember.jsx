import React, { useLayoutEffect } from 'react'
import styled from '@emotion/styled'
import { TeamProfile } from './utils/getTeamProfile'
import gsap from 'gsap'

const Container = styled.div`
    padding: 2rem 0;

    h1 {
        padding: 2rem;
        font-size: 4rem;
        text-align: center;
        font-weight: 700;
    }
`

const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 5rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    height: 600px;

    background-color: ${props => props.color};
    color: ${props => props.color};

    @media (max-width: 768px) {
        height: 250px;
    }
`

const BoxImage = styled.div`
    position: relative; 
    background-image: url(${props => props.image});
    width: 95%;
    height: 95%;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;

    h2 {
        color: inherit;
        opacity: 0;
        transform: scale(0.5) translateY(100px);
        transition: all 0.3s ease;
    }

    &:hover {
        h2 {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
    }

    &::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
    }

    &:hover::before {
        opacity: 1;
    }
`




const TeamMember = () => {

    useLayoutEffect(() => {
        gsap.fromTo(".box", {
            scale: 0
        }, {
            scale: 1,
            stagger: {
                amount: 1
            },
            scrollTrigger: {
                trigger: ".box",
            }
        })
    }, [])
    return (
        <Container>
            <h1>Our Team</h1>
            <BoxContainer>
                {
                    TeamProfile.map((item, index) => (
                        <Box key={index} color={item.color} className="box" onClick={() => window.open(item.github, '_blank')}>
                            <BoxImage image={item.image}>
                                <h2>{item.name}</h2>
                            </BoxImage>
                        </Box>
                    ))
                }
            </BoxContainer>
        </Container>
    )
}

export default TeamMember