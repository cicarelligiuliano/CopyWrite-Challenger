import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const TextBox = () => {
    const { texts } = useSelector((state) => state.reducer);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '10px', minHeight: '400px' }}>
            <Paper
                elevation={3}
                sx={{
                    display: 'flex',
                    width: 3 / 4,
                    // justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography variant='h4' sx={{ padding: '10px', paddingTop: '30px', paddingLeft: '100px' }}>
                    Results:
                </Typography>
                <TableContainer component={Paper} sx={{ width: '500px', alignSelf: 'center', marginBottom: '30px' }}>
                    <Table sx={{ minWidth: 300 }} aria-label='customized table'>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Text</StyledTableCell>
                                <StyledTableCell align='right'>Original</StyledTableCell>
                                <StyledTableCell align='right'>Palindrome?</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {texts.length > 0 ? (
                                texts?.map((text, i) => (
                                    <StyledTableRow key={i}>
                                        <StyledTableCell component='th' scope='row'>
                                            {text.text}
                                        </StyledTableCell>
                                        <StyledTableCell align='right'>{text.original}</StyledTableCell>
                                        <StyledTableCell align='right'>
                                            {text.palindrome ? 'Yes' : 'No'}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))
                            ) : (
                                <>
                                    <StyledTableRow>
                                        <StyledTableCell component='th' scope='row'>
                                            Please enter some text
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default TextBox;
