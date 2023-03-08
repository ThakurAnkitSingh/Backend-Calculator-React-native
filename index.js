const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(cors());


function calculation(n1, n2, operator) {
    let ans;

    if (operator === "addition") {
        ans = n1 + n2;
        return ans;
    }
    else if (operator === "subtraction") {
        ans = n1 - n2;
        return ans;
    }
    else if (operator === "multiplication") {
        ans = n1 * n2;
        return ans;
    } else {
        return "Operator not Identified"
    }

}




app.post('/calculate', (req, res) => {
    const { num1, num2, value } = req.body;

    let result = calculation(num1, num2, value);

    return res.json(result)
})






app.listen(5000, () => {
    console.log('Server is working at port 5000');
})
