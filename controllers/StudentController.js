const Student = require('../model/student');

exports.create = async (req, res) => {
    try{
        var obj = {
            name : 'Diallo',
            lastName : 'Boubacar',
            email : 'tes22@gmail.com',
            phone : '70000000'
        };
        const student = await Student.create(obj)
        res.status(200).json(student)
    }catch (err){
        console.log(err.message);
        res.status(500).json({message : err.message})
    }
}

exports.getAll = (req, res) => {
  res.send("get all students")
};

exports.getOne = (req, res) => {
    res.send("find student")
};

exports.update = (req, res) => {
    res.send("update student")
};

exports.delete = (req, res) => {
    res.send("delete student")
};