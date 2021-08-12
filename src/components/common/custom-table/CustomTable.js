import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from "reactstrap"
import MenuButton from '../buttons/menuButton';

const CustomTable = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const titleText = (text) => {
        if (!props.textTransform)
            return text;
        return text.split('_').map((t, index) => {
            if(index === 0 ){
                return t[0].toUpperCase() + t.slice(1).toLowerCase();
            }else{
                return t.toLowerCase();
            }
        }).join(' ');
    }

    return (
        <Table>
            <thead>
                <tr>
                    {props.headers.map((header, index) => {
                        return <th key={index}>{titleText(header)}</th>
                    })}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((data, dataIndex) => {
                    return <tr key={dataIndex}>
                        {props.headers.map((header, headerIndex) => {
                            return <td key={headerIndex}>{data[header]}</td>
                        })}
                        <td>
                            <Dropdown isOpen={dropdownOpen && selectedIndex === dataIndex} toggle={toggle} onClick={() => setSelectedIndex(dataIndex)}>
                            <DropdownToggle tag="div" role="button">
                                <MenuButton type="table_action" />
                            </DropdownToggle>
                                <DropdownMenu>
                                    {props.actions.map((action, index) => {
                                        return <DropdownItem key={index} onClick={() => action.cb(action.text, data)}>{action.text}</DropdownItem>
                                    })}
                                </DropdownMenu>
                            </Dropdown> 
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
    )
}

export default CustomTable;