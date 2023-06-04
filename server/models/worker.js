import mongoose from "mongoose";

const newWorkerUserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
      },
    workType: {
        type: String,
        enum: ['Contractor', 'Single Worker', 'Group of Workers'],
        required: true
      },
      workCategories: {
        type: [String],
        enum: ['Plumber', 'Labor', 'Electrician', 'Painter', 'Carpenter'],
        required: function() {
          return this.type === 'Single Worker';
        }
      },
      groupDescription: {
        type: String,
        required: function() {
          return this.type === 'Contractor' || this.type === 'Group of Workers';
        }
      }
});

const worker = mongoose.model('Workers',newWorkerUserSchema);

export default worker;