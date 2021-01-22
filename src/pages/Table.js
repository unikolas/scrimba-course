import React from 'react'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import { useTable } from 'react-table'
// import CurrencyInput from 'react-currency-input-field'
import { formatValue } from 'react-currency-input-field'
import colors from '../constants/colors'

import db, { getDatabase } from '../database/data'

getDatabase()

const formatAmount = (value, currency) =>
    formatValue({
        value: value,
        intlConfig: { locale: 'en-GB', currency: currency ? currency : 'GBP' },
    })

// Table

const Table = (props) => {
    // const [data, setData] = useState(db)

    const data = React.useMemo(() => db.accounts, [])

    const styles = {
        table: {
            backgroundColor: colors.grey95,
            padding: 32,
        },
        header: {
            textAlign: 'left',
            fontSize: 13,
            padding: '8px 24px 8px 8px',
        },
        row: {
            textAlign: 'left',
            fontSize: 13,
            padding: '8px 24px 8px 8px',
        },
    }

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
                Cell: (props) => {
                    // return props.value.slice(0, 3) + '...'
                    console.log(props.row.id)
                    return props.row.index
                },
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
                Cell: (props) => {
                    return (
                        <div
                            onClick={() => {
                                console.log(props)
                            }}
                        >
                            {formatAmount(
                                props.value + '', // WTF is going on here?
                                props.row.original.currency
                            )}
                        </div>
                    )
                },
            },
        ],
        []
    )

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
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
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
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
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
