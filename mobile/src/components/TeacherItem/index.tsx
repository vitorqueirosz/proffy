import React from 'react';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whastsAppIcon from '../../assets/images/icons/whatsapp.png';

import {
    Container,
    Profile,
    Image,
    ProfileInfo,
    NameText,
    SubjecText,
    BioText,
    Footer,
    PriceText,
    PriceValueText,
    ButtonsContainer,
    FavoriteButton,
    FavoritedButton,
    FavoriteImage,
    FavoritedImage,
    ContactButton,
    ContactButtonText,
    ContactButtonImage } from './styles';

const TeacherItem: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Image source={{ uri: 'https://github.com/vitorqueirosz.png'}}/>


                <ProfileInfo>
                    <NameText>Vitor Queiroz</NameText>
                    <SubjecText>Biologia</SubjecText>
                </ProfileInfo>
            </Profile>

            <BioText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                {'\n'}
                 Ut atque modi soluta maxime, ducimus ullam incidunt animi quam, tenetur doloribus possimus eos. Tempore inventore quae ratione minus perferendis numquam possimus.
            </BioText>

            <Footer>
                <PriceText>
                    Preco/hora {'   '}

                    <PriceValueText>R$ 50,00</PriceValueText>
                </PriceText>

                <ButtonsContainer>
                    {/* <FavoriteButton>
                        <FavoriteImage source={heartOutlineIcon}/>
                    </FavoriteButton> */}

                    <FavoritedButton>
                        <FavoritedImage source={unfavoriteIcon}/>
                    </FavoritedButton>

                    <ContactButton>
                        <ContactButtonImage source={whastsAppIcon}/>
                        <ContactButtonText>Entrar em contato</ContactButtonText>
                    </ContactButton>
                </ButtonsContainer>
            </Footer>
        </Container>
    );
};

export default TeacherItem;
