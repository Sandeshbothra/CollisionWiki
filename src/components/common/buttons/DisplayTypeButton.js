import MenuButton from './menuButton';
const DisplayTypeButton = ({className, displayType, toogleDisplay}) => {
    return (
        <div className={className}>
            <div className={`display-type-button float-start px-1 ${displayType === 'grid' ? 'active' : ''}`} onClick={() => toogleDisplay('grid')}>
                <MenuButton type="grid" />
            </div>
            <div className={`display-type-button float-start px-1 ${displayType === 'list' ? 'active' : ''}`} onClick={() => toogleDisplay('list')}>
                <MenuButton type="list" />
            </div>
        </div>
    )
}

export default DisplayTypeButton;