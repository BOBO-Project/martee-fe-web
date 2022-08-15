import type { FC } from "react";
import S from "./_ContextStyles";

const ContextSection: FC = () => {
    return (
        <S.ContainerText>
        <S.TextWrapper>
          <p style={{ margin: "34px 0 0" }}><img src={require('../../assets/images/union-2.png')} alt="union-2" style={{ width: "50px", height: "50px" }} />We pride ourselves in creating Your Perfect Wedding.</p>
          <p>Experience to handle in all Jabodetabek, Bandung, and Bali</p>
          <S.Reference href="asdasd"><p style={{ margin: "13px 0 0" }}>RENCANAKAN DENGAN TEAM KAMI SEKARANG</p></S.Reference>
        </S.TextWrapper>
        </S.ContainerText>
    )
}

export default ContextSection;
