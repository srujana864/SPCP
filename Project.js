const projectSchema = new mongoose.Schema({
  projectName: String,
  projectDescription: String,
  members: [{ name: String, task: String, deadline: Date }],
  username: String // Add the username field to the schema
});

const Project = mongoose.model('Project', projectSchema);
