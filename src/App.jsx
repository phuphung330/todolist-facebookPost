import { useState } from "react";
import { Checkbox, Tabs, Input, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import "./App.css";

const { TabPane } = Tabs;

// todos = [{text:inputValue,completed:false}]

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    console.log(todos);

    const handleAddTask = () => {
        const newtodos = [...todos, { text: inputValue, completed: false }];
        setTodos(newtodos);
        setInputValue("");
    };

    const handleCheckBoxChange = (index) => {
        const newtodos1 = [...todos];
        newtodos1[index].completed = true;
        setTodos(newtodos1);
    };

    const handleDeleteTask = (index) => {
        const newtodos = [...todos];
        newtodos.splice(index, 1);
        setTodos(newtodos);
    };

    const handleDeleteAll = () => {
        const newtodos = todos.filter((todo) => !todo.completed);

        setTodos(newtodos);
    };

    const hasCompleted = todos.some(
        (obj) => "completed" in obj && obj.completed
    );

    return (
        <div className='container'>
            <h1 className='heading'>#todo</h1>
            <Tabs defaultActiveKey='1' className='tab' centered>
                <TabPane key='1' tab='All'>
                    <div className='input'>
                        {" "}
                        <Input
                            size='large'
                            className='input-style'
                            placeholder='add todotask'
                            type='text'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <Button
                            size='large'
                            type='primary'
                            onClick={handleAddTask}
                        >
                            Add
                        </Button>
                    </div>

                    <ul className='ul' style={{ listStyleType: "none" }}>
                        {todos.map((todo, index) => (
                            <li
                                className='li'
                                key={index}
                                style={{
                                    textDecoration: todo.completed
                                        ? "line-through"
                                        : "none",
                                }}
                            >
                                <div className='task'>
                                    <Checkbox
                                        className='checkbox'
                                        checked={todo.completed}
                                        onChange={() =>
                                            handleCheckBoxChange(index)
                                        }
                                    ></Checkbox>
                                    {todo.text}
                                </div>
                            </li>
                        ))}
                    </ul>
                </TabPane>

                <TabPane key='2' tab='Active'>
                    <div className='input'>
                        {" "}
                        <Input
                            size='large'
                            className='input-style'
                            placeholder='add todotask'
                            type='text'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <Button
                            size='large'
                            type='primary'
                            onClick={handleAddTask}
                        >
                            Add
                        </Button>
                    </div>

                    <ul className='ul' style={{ listStyleType: "none" }}>
                        {todos.map(
                            (todo, index) =>
                                !todo.completed && (
                                    <li
                                        className='li'
                                        key={index}
                                        style={{
                                            textDecoration: todo.completed
                                                ? "line-through"
                                                : "none",
                                        }}
                                    >
                                        <div className='task'>
                                            <Checkbox
                                                className='checkbox'
                                                checked={todo.completed}
                                                onChange={() =>
                                                    handleCheckBoxChange(index)
                                                }
                                            ></Checkbox>
                                            {todo.text}
                                        </div>
                                    </li>
                                )
                        )}
                    </ul>
                </TabPane>
                <TabPane key='3' tab='Completed'>
                    <ul className='ul' style={{ listStyleType: "none" }}>
                        {todos.map(
                            (todo, index) =>
                                todo.completed && (
                                    <li
                                        className='li'
                                        key={index}
                                        style={{
                                            textDecoration: todo.completed
                                                ? "line-through"
                                                : "none",
                                        }}
                                    >
                                        <div className='task'>
                                            <Checkbox
                                                className='checkbox'
                                                checked={todo.completed}
                                                onChange={() =>
                                                    handleCheckBoxChange(index)
                                                }
                                            ></Checkbox>
                                            {todo.text}
                                        </div>

                                        <a
                                            className='icon'
                                            onClick={() =>
                                                handleDeleteTask(index)
                                            }
                                        >
                                            {" "}
                                            <DeleteOutlined />
                                        </a>
                                    </li>
                                )
                        )}
                    </ul>
                    {hasCompleted && (
                        <Button
                            type='primary'
                            style={{ position: "absolute", right: 0 }}
                            danger
                            onClick={handleDeleteAll}
                        >
                            {" "}
                            Delete all <DeleteOutlined />
                        </Button>
                    )}
                    {/* <Button
                        type='primary'
                        style={{ position: "absolute", right: 0 }}
                        danger
                        onClick={handleDeleteAll}
                    >
                        {" "}
                        Delete all <DeleteOutlined />
                    </Button> */}
                </TabPane>
            </Tabs>
        </div>
    );
}

export default App;
