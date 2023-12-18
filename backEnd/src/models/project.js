"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var projectSchema = new mongoose_1.default.Schema({
    name: String,
    imgURL: String,
    client: String,
    description: String,
    technologies: [String],
    links: {
        github: String,
        website: String,
    },
});
var Project = mongoose_1.default.model("Project", projectSchema);
exports.default = Project;
