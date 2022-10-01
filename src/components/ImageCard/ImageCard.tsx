import {FC, ReactNode} from 'react'
import S from './_ImageCardstyles'

interface Props{
    image?: string
    children?: ReactNode,
    path?: string
}

const ImageCard: FC<Props> = (props: Props) =>{
    return(
        <>
            <S.Wrapper>
                {props.children}
            </S.Wrapper>
        </>
    )
}

export default ImageCard