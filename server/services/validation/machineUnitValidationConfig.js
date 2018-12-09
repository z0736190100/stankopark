// contains description and validation requirements for every piece of data
// TODO: error object instead of errorMessage. Consider this:
/*
*{
    "errors": {
        "name": {
            "message": "Path `name` is required.",
            "name": "ValidatorError",
            "properties": {
                "message": "Path `name` is required.",
                "type": "required",
                "path": "name"
            },
            "kind": "required",
            "path": "name"
        }
    },
    "_message": "users validation failed",
    "message": "users validation failed: name: Path `name` is required.",
    "name": "ValidationError"
},
{
    "errors": {
        "email": {
            "message": "Path `email` is required.",
            "name": "ValidatorError",
            "properties": {
                "message": "Path `email` is required.",
                "type": "required",
                "path": "email"
            },
            "kind": "required",
            "path": "email"
        }
    },
    "_message": "users validation failed",
    "message": "users validation failed: email: Path `email` is required.",
    "name": "ValidationError"
}
*
 */
module.exports = [
    {
        param: "producerBrand",
        constraints: [
            {
                type: "length",
                values: {
                    min: 2,
                    max: 22
                },
                errorMessage: "Must be at least 2 characters long, but not longer then 22."
            },
            {
                type: "empty",
                values: {},
                errorMessage: "Cannot be empty."
            }
        ]
    },
  {
    param: "model",
    constraints: [
      {
        type: "length",
        values: {
          min: 2,
          max: 22
        },
        errorMessage: "Must be at least 2 characters long, but not longer then 22."
      },
      {
        type: "empty",
        values: {},
        errorMessage: "Cannot be empty."
      }
    ]
  },
  {
    param: "serialNumber",
    constraints: [
      {
        type: "length",
        values: {
          min: 2,
          max: 22
        },
        errorMessage: "Must be at least 2 characters long, but not longer then 22."
      },
      {
        type: "empty",
        values: {},
        errorMessage: "Cannot be empty."
      },
      {
        param: "description",
        constraints: [
          {
            type: "length",
            values: {
              min: 2,
              max: 22
            },
            errorMessage: "Must be at least 2 characters long, but not longer then 222."
          },
          {
            type: "empty",
            values: {},
            errorMessage: "Cannot be empty."
          }
        ]
      },
      {
        param: "power",
        constraints: [
          {
            type: "integer",
            values: {},
            errorMessage: "Must be an integer."
          },
          {
            type: "empty",
            values: {},
            errorMessage: "Cannot be empty."
          }
        ]
      },
      {
        param: "hPressure",
        constraints: [
          {
            type: "integer",
            values: {},
            errorMessage: "Must be an integer."
          },
          {
            type: "empty",
            values: {},
            errorMessage: "Cannot be empty."
          }
        ]
      },
      {
        param: "hVolume",
        constraints: [
          {
            type: "integer",
            values: {},
            errorMessage: "Must be an integer."
          },
          {
            type: "empty",
            values: {},
            errorMessage: "Cannot be empty."
          }
        ]
      },
      {
        param: "oilType",
        constraints: [
          {
            type: "length",
            values: {
              min: 2,
              max: 22
            },
            errorMessage: "Must be at least 2 characters long, but not longer then 222."
          },
          {
            type: "empty",
            values: {},
            errorMessage: "Cannot be empty."
          }
        ]
      },
      {
        param: "airPressure",
        constraints: [
          {
            type: "integer",
            values: {},
            errorMessage: "Must be an integer."
          },
          {
            type: "empty",
            values: {},
            errorMessage: "Cannot be empty."
          }
        ]
      },
      {
        param: "airConsumptionPerCycle",
        constraints: [
          {
            type: "integer",
            values: {},
            errorMessage: "Must be an integer."
          },
          {
            type: "empty",
            values: {},
            errorMessage: "Cannot be empty."
          }
        ]
      }
    ]
  }];