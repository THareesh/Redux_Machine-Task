import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEmployeeList } from '../Actions/action'
class EmployeeListPage extends Component {
    componentDidMount() {
        this.props.getEmployeeList();
    }

    render() {
        const { employeeList } = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <h2 className="text-center mt-4">Employee List</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employeeList !== null && employeeList.user.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phoneNo}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </React.Fragment>
        )

    }
}
const mapStateToProps = (state) => ({
    employeeList: state.employeeList.employeelist
})
const mapDispatchToProps = (dispatch) => ({
    getEmployeeList: () => dispatch(getEmployeeList())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListPage)
