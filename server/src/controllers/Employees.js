import Employee from "../models/Employee.js";


export const addEmployee = (req, res) => {
    console.log(req.body);
    const emp = Employee(req.body);
    emp.save((error, employee)=> {
        if(error) return res.status(400).json({ error });
        if(employee) return res.status(201).json({ employee })
    });
} 

export const getEmployees = async (req, res) => {
    const employees = await Employee.find({}).exec();
    return res.status(200).json({ employees })
}

export const updateEmployee = async (req, res) => {
    const employee = await Employee.findOneAndUpdate({ _id: req.body._id }, req.body, {new: true});
    return res.status(200).json({ employee });
} 

export const deleteEmployee = async (req, res) => {
    console.log(req.body);
    const employee = await Employee.findOneAndDelete({ _id: req.body._id});
    return res.status(200).json({ employee });
}

