//with the destructuring we require the conversion function that interests us
const { inRoman1 } = require('../conversion_logic');

module.exports = {

    ConvertOnePost: async (request, response) => {
//we get the arabic number in the body
        const number = (request.body.number);
        // console.log('number', number);
//we will convert to Roman numerals from the body information
        const roman = (inRoman1(number));
        // console.log('roman',roman);
        try {
            await response.status(201).json(roman);
        } catch(error) {
            response.status(500).json(error.message);
        }

    },

    ConvertOneGet: async (request, response) => {
        //we get the arabic number in the params
                const number2 = parseInt(request.params.number, 10);
                // console.log('number', number);
        //we will convert to Roman numerals from the params information
                const roman2 = (inRoman1(number2));
                // console.log('roman',roman);
                try {
                    await response.status(201).json(roman2);
                } catch(error) {
                    response.status(500).json(error.message);
                }
        
            },

    test: (request, response) => {
        response.json('It\'s alive !!!');
    }

}
