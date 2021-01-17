import React from 'react'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import { useTable } from 'react-table'

import colors from '../constants/colors'

// Data manpulations

function arrayToJSONObject(arr) {
    var keys = arr[0] // Headers
    var newArr = arr.slice(1, arr.length) // Vacate keys from main array
    var formatted = [],

    data = newArr,
    cols = keys,
    l = cols.length;

    for (var i=0; i<data.length; i++) {
        var d = data[i],
            o = {};
        for (var j=0; j<l; j++)
            o[cols[j]] = d[j];
        formatted.push(o);
    }
    return formatted;
}

// Table

const Table = (props) => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Currnecy',
                accessor: 'currency',
            },
            {
                Header: 'Current balance',
                accessor: 'current-balance',
            },

        ], []
    )

    const data = React.useMemo(
        () => arrayToJSONObject(
            [
                ['id', 'name', 'currency', 'current-balance'],
                ['1', 'Account 1', 'GBP' , '1000'],
                ['2', 'Account 2', 'USD' , '10.23'],
                ['3', 'Account Number Three', 'RUB' , '120,233.11'],
            ]
        ), []
    )
    
    const styles = {
        table: {
            backgroundColor: colors.grey95,
        },
        header: {
            textAlign: 'left',
            fontSize: 12,
            padding: 8,
        },
        row: {
            textAlign: 'left',
            fontSize: 12,
            padding: 8,
        }
    }

    // const tableInstance = useTable({ columns, data })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
    
    return (
        <table {...getTableProps()} style={styles.table}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} >
                        {headerGroup.headers.map( column => (
                            <th 
                                {...column.getHeaderProps()} 
                                style={styles.header}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={styles.row}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

const Page = () => {
    return (
        <Wrapper>
            <Header>Table</Header>
            <div>
                <Table />
            </div>
        </Wrapper>
    )
}

export default Page