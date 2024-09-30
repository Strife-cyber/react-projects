import React from 'react';
import './main.css'

const MainComponent = () => {
    return (
        <main>
            <div className="container">
                <div className="head">
                    <h2>My Todo List</h2>
                </div>
                <div className="todo-body">
                    <form id="taskForm">
                        <div className='row'>
                            <div className='col-sm-10 col-9'>
                                <input className="input-text" type="text" id="taskInput" placeholder="Add a new task" />
                            </div>
                            <div className='col-sm-2 col-3'>
                                <input className="submit-text" type="submit" value="Add" />
                            </div>
                        </div>
                    </form>

                    {/* Task List */}
                    <div className="card" id="all-tasks">
                        <div className="card-body">
                            <ul className="list-group" id="taskList">
                                {/* Tasks will be dynamically added here using JavaScript */}
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className="mt-3">
                    <ul className="pagination justify-content-center" id="pagination">
                        {/* Pagination buttons will be dynamically added here */}
                    </ul>
                </nav>
            </div>

            {/* Modal for Editing Task */}
            <div className="modal fade" id="editTaskModal" tabIndex="-1" aria-labelledby="editTaskModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editTaskModalLabel">Edit Task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" id="editTaskInput" className="form-control" placeholder="Edit task description" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" id="saveTaskBtn">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainComponent;
