import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #111111 0%, #000000 100%);

`

export const ContatoWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;

  

`

export const BudgetWrapper = styled.div`
    max-width: 2000px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    

    @media screen and (max-width: 820px) {
      flex-direction: column;
    }
`

export const Title = styled.h1`
    color: #fff;
    margin-bottom: 35px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
`

export const Text = styled.p`
    color: #656079;
    max-width: 440px;
    margin-bottom: -10px;
    font-size: 18px;
    line-height: 24px;
`
export const NameInput = styled.input`
  margin-top: 10px;
  width: 100%;
  max-width: 700px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  font-size: 20px;
  opacity: 0.7
`

export const EmailInput = styled.input`
  margin-top: 20px;
  padding: 8px;
  width: 100%;
  max-width: 700px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  font-size: 20px;
  opacity: 0.7
`

export const TextInput = styled.textarea`
    margin-top: 20px;
    padding: 8px;
    width: 100%;
    max-width: 700px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    font-size: 20px;
    transition: 0.3s all;
    opacity: 0.7
`

export const BtnWrapper = styled.div`
  margin-right: 75%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoWrapper = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30%;
`

export const LogoImg = styled.img`
  width: 100%;
  max-width: 560px;
`

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0D0D0D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }

  @media screen and (max-width: 820px){
    padding-top: 32px;
  }
`