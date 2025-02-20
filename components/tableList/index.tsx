import React from "react";

interface TableListProps {
    columns: number;
    data: any[];
}

const TableList: React.FC<TableListProps> = ({ columns, data }) => {
    const renderRows = () => {
        const rows = [];
        for (let i = 0; i < data.length; i += columns) {
            const rowItems = data.slice(i, i + columns);
            rows.push(
                <tr key={i}>
                    {rowItems.map((item, index) => (
                        <React.Fragment key={item.label}>    
                            <th key={item.label} style={{ backgroundColor: "#F3E8E8", border: '1px solid #D9D7D7', padding: '2px 4px'}}>{item.label}</th>
                            <td key={item.value} style={{ border: '1px solid #D9D7D7', padding: '2px 4px'}}>{item.value}</td>
                        </React.Fragment>
                    ))}
                </tr>
            );
        }
        return rows;
    };

    return (
        <table className="">
            <tbody>{renderRows()}</tbody>
        </table>
    );
};

export default TableList;
