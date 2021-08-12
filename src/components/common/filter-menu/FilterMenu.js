import './filterMenu.css';

const FilterMenu = (props) => {
    return (
        <div className="filter-menu">
            {props.children}
        </div>
    )
}

export default FilterMenu;