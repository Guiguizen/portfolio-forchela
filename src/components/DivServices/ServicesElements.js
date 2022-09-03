import styled from "styled-components"
import {Link} from 'react-router-dom'

export const ServicesContainer = styled.div`
    margin-top: 20px;
    margin-right: -80px;
    padding-left: 10%;
    background: #fff;
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 5;
`

export const ServicesWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

    export const ImgCard = styled.div`
        display: flex;
        flex-direction: row;
        width: 900px;
        height: 444px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 20px;
        margin: 30px;
        margin-right: 200px;
        margin-left: 180px;
        background: #0D0D0D
    `

export const BgImg = styled.img`   
    width: 300px;
    height: 444px;
`

export const TextWrapper = styled.div`
    padding: 50px;
    justify-content: center;
    align-items: center;
    margin: 30px;
    background: #16141B;
    width: 650px;
    height: 400px;
    border-radius: 10px;
`

export const ServicesH1 = styled.h1`
    color: #fff;
    margin-bottom: 35px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
`

export const ServicesP = styled.p`
    color: #656079;
    max-width: 440px;
    margin-bottom: -10px;
    font-size: 18px;
    line-height: 24px;
`

export const ServicesLink = styled(Link)`
    color: #8E8E8E;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover { 
    color: #473B90;
    transition: 0.3s ease-in-out
    }
`

export const CardButtonWrapper = styled.div`
  margin-right: 70%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`