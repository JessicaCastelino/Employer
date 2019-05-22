module.exports = {


    friendlyName: 'Bmi B00804805',


    description: '',


    inputs: {
        height: {
            type: 'number',
            required: true
        },
        weight: {
            type: 'number',
            required: true
        }


    },


    exits: {
        success: {
            statusCode: 200,
            description: 'BMI Calculated'
        }


    },


    fn: async function (inputs, exits) {

        // All done.
        var height = inputs.height;
        var weight = inputs.weight;
        //console.log(weight);
        //console.log('Hi');
        var result = weight / (height * height);
        result = result.toFixed(5)
        return exits.success(result);

    }


};
