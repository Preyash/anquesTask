import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField'

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(one, two, three, four, five, six, seven) {
    return { one, two, three, four, five, six, seven };
}

const eyeImg = <img className="eyeImg" src='https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/eye-24-512.png' alt="eye" />

const rows = [
    createData(46998, 'Fernando', '12/08/2020', '23/09/2023', '28986750091', '11-6788-0000', eyeImg),
    createData(46998, 'Test', '12/09/2020', '23/09/2022', '28986750092', '98-4567-0000', eyeImg),
    createData(46998, 'Test4', '12/05/2019', '23/09/2025', '28986750094', '11-6788-0000', eyeImg),
    createData(46998, 'Test5', '12/05/2019', '23/09/2025', '28986750094', '11-6788-0000', eyeImg),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles({
    table: {
        minWidth: 500,
    },
});

export default function CustomPaginationActionsTable() {
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <div className="searchBar spaceB">
                <div className="left">
                    <img className="w20" src="https://i.pinimg.com/736x/41/7f/16/417f163906fc4d42f8e8af681894d05f.jpg" alt="camera" />
                    Todos los medicos</div>
                <div className="right">
                    <TextField id="outlined-basic" label="Buscar" variant="outlined" />
                </div>
            </div>
            <Table className={classes.table} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">M.N.</TableCell>
                        <TableCell align="center">Nombre</TableCell>
                        <TableCell align="center">Uit. login</TableCell>
                        <TableCell align="center">Venc. M.N.</TableCell>
                        <TableCell align="center">C.U.I.L</TableCell>
                        <TableCell align="center">Telefono</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row, j) => (
                        <TableRow key={row.name}>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.one}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.two}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.three}
                            </TableCell>
                            <TableCell style={{ width: 160, color: `${j == 3 ? 'red' : '#2F9A49'}` }} align="center">
                                {row.four}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.five}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.six}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.seven}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="w100">
                <div className="customPagination">
                    <div className="same prev prevNext">Prev</div>
                    <div className="same one active">1</div>
                    <div className="same two">2</div>
                    <div className="same three">3</div>
                    <div className="same next prevNext">Next</div>
                </div>
            </div>
        </TableContainer >
    );
}
