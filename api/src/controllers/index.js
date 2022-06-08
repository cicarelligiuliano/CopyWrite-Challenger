const inverter = (req, res) => {
    const { text } = req.query;

    if (text && text.length > 0) {
        const result = text.split('').reverse().join('');
        if (text === result) {
            return res.json({
                text: result,
                original: text,
                palindrome: true,
            });
        } else {
            return res.json({
                text: result,
                original: text,
                palindrome: false,
            });
        }
    } else {
        return res.status(400).json({
            error: 'no text',
        });
    }
};

module.exports = {
    inverter,
};
