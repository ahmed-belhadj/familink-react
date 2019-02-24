// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Name", "Relationship", "Living", "Disease", "Age of Onset", "Age of Death"];
const tbody = [
    {
        className: "table-success",
        data: ["Sarah", "Self", "Yes", "Diabetes: Type 2","3",""]
    },
    {
        className: "",
        data: ["Charles", "Brother", "Yes", "Diabetes: Type 1","44",""]
    },
    {
        className: "table-info",
        data: ["John", "Father", "No", "Cancer: Bone Cancer","58","32"]
    },
    {
        className: "",
        data: ["Sherry", "Mother", "Yes", "Hypertension", "70",""]
    },
    {
        className: "table-danger",
        data: ["Sam", "Son", "No", "Cancer: Leukemia","4","7"]
    },
    {
        className: "table-warning",
        data: ["Gerald", "Paternal Grandfather", "No", "Clotting Disorder: Deep Vein Thrombosis","71","71"]
    },
    {
        className: "table-warning",
        data: ["Edna", "Paternal Grandmother", "No", "Cancer: Stomach","77","78"]
    }, {
        className: "table-warning",
        data: ["Caroline", "Maternal Grandfather", "Yes", "Heart Attack","51","51"]
    }, {
        className: "table-warning",
        data: ["Fred", "Maternal Grandfather", "Yes", "Cancer: Thyroid","60",""]
    }, {
        className: "table-warning",
        data: ["Sally", "Maternal Aunt", "Yes", "", "", ""]
    },
    {
        className: "table-warning",
        data: ["George", "Maternal Cousin", "Yes", "", "", ""]
    },
];

// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export {thead, tbody};
