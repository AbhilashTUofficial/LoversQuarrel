import mongoose from 'mongoose';

const traitsSchema = new mongoose.Schema(
    {
        intellect: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        logic: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        drama: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        sarcasm: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        stubborness: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        confidence: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        memory: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        empathy: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        }
    },
    { _id: false }
);

const chaosCardSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        isUsed: {
            type: Boolean,
            default: false
        }
    }
)

const argumentSchema = new mongoose.Schema(
    {
        id: {
            type: String,
        },
        content: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        }
    }
)

const personSchema = new mongoose.Schema(
    {
        initialArgument: {
            type: String,
            required: true,
            trim: true
        },
        traits: {
            type: traitsSchema,
            required: true
        },
        chaosCards: {
            type: [chaosCardSchema],
            default: []
        },
        tags: {
            type: [String],
            default: []
        },
        arguments: [argumentSchema],
        username: {
            type: String,
            default: ""
        },
        id: {
            type: String,
            default: ""
        }
    },
    { _id: false }
);

const gameSchema = new mongoose.Schema(
    {

        username: {
            type: String,
        },
        boyfriend: {
            type: personSchema,
            required: true
        },
        girlfriend: {
            type: personSchema,
            required: true
        },
        argumentStack: [argumentSchema],
        caseDetails: {
            caseId: String,
            caseTitle: String,
            caseDescription: String
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('gameSettings', gameSchema);