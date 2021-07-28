import Col from "react-bootstrap/Col";
import {IconContext} from "react-icons"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {PhoneCard,ProductInfoContainer,CardRow, CardImage,Price ,AddButton,AskButton,DiviceInfo,PhoneName}  from "./phone.styles"
const Phone = ({phone:{name , id , price , memory , brand , isUsed, description, inStock ,image}}) => {
    return (
        <PhoneCard  lg={3} md={6} xs={12}>
            <CardImage src={image} alt="poduct"/>
            <ProductInfoContainer>
                <PhoneName>{name}</PhoneName>
                <Price>Price: {price} MRU</Price>
                <CardRow>
                    <Col lg={7} xs={7}>
                        <DiviceInfo>Memory: {memory} GB</DiviceInfo>
                    </Col>
                    <Col lg={5} xs={5}>
                        <DiviceInfo> Used: {isUsed? "Yes":"No"}</DiviceInfo>
                    </Col>
                </CardRow>
                <CardRow>
                    <Col lg={7} xs={7}>
                    <AddButton>Add to cart </AddButton>
                    </Col >
                    <Col>
                    <AskButton>
                        <IconContext.Provider value={{ style: {fontSize: '26px'}}}>

                            <AiOutlineWhatsApp/> Ask
                        </IconContext.Provider>

                    </AskButton>
                    </Col>
                </CardRow>
            </ProductInfoContainer>
        </PhoneCard>
    
    )
}

export default Phone
