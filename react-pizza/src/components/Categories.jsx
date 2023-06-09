import {useState} from "react";

const Categories = () => {
    const [activeIndex,setActiveIndex] = useState(0)

    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((categoryName, index = 0 ) => (
                        <li
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={activeIndex === index ? 'active' : ''}>
                            {categoryName}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Categories;