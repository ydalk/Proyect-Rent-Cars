import { useState, useContext } from "react";
import { Wrapper, BoxSection, TitleS, BoxButton, Title, Description, BoxCard, ButtonCard } from "./CardStyle";
import Product from "../product/Product";
import { Search } from "../search/Search";
import { CatContext, ProductContext } from "../../../context/useContextCars";

const GridCards = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [filter, setFilter] = useState('');
    const { cars } = useContext(ProductContext);
    const { cat } = useContext(CatContext);
    let component = '';

    const HandleChange = (e) => {
        setSelectedCategory((Number)(e.target.value));
    };

    const HandleReset = (e) => {
        setSelectedCategory('');
        setFilter('');
    };

    const HandleCityFilter = (city) => {
        setFilter(city)
            ;
    }


    if (filter === '' && selectedCategory === '') {
        component = cars?.map((car, index) => <Product key={index} car={car} />)
    } else if (filter !== '' && selectedCategory === '') {
        component = cars?.filter(auto => auto.city.id === filter)
            .map((car, index) => <Product key={index} car={car} />)
    } else if (selectedCategory !== '' && filter === '') {
        component = cars?.filter(auto => auto.category.id == selectedCategory)
            .map((car, index) => <Product key={index} car={car} />)
    }

    return (
        <>
            <Search HandleCityFilter={HandleCityFilter} />
            <BoxSection>
                <TitleS>BUSCAR POR CATEGORIA </TitleS>
                <ButtonCard onClick={HandleReset}>Ver Todas</ButtonCard>
                <Wrapper>
                    {
                        cat?.map((category, index) =>
                            <BoxCard key={index}>
                                <BoxButton name={"categoria" + index} value={category.id} onClick={HandleChange} src={category.imgUrl} >
                                </BoxButton>
                                <Title>{category.title}</Title>
                                <Description>{category.description}</Description>
                            </BoxCard>
                        )
                    }
                </Wrapper>
            </BoxSection>
            <BoxSection>
                <TitleS>RECOMENDACIONES</TitleS>
                <Wrapper>

                    {
                        component
                    }

                </Wrapper>
            </BoxSection>
        </>
    )
}

export default GridCards;