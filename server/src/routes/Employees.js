import express from 'express';
import { addEmployee, deleteEmployee, getEmployees, updateEmployee } from '../controllers/Employees.js';

const router = express.Router();


router.get('/employees', getEmployees);
router.post('/employees/create', addEmployee);
router.post('/employees/update', updateEmployee);
router.post('/employees/delete', deleteEmployee);

export default router;