import Item from "./Item";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

export default function List() {
  const [list, setList] = useState([
    "Do laundry",
    "Take out trash",
    "Work out",
  ]);
  const [task, setTask] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [completed, setCompleted] = useState([]);

  const capitalizeFirstChar = (word) => {
    const formattedWord = word.charAt(0).toLocaleUpperCase() + word.slice(1);
    return formattedWord;
  };

  const handleAddName = () => {
    setList([...list, capitalizeFirstChar(task)]);
    setTask("");
  };

  const handleRemove = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const handleComplete = (index) => {
    const completedTask = list[index];
    handleRemove(index);
    setCompleted([...completed, completedTask]);
    setActiveIndex(null);
  };

  return (
    <div className="max-w-[600px] mx-auto">
      <div className="flex gap-4 items-center justify-center my-8 relative">
        <Input
          type="text"
          placeholder="Enter task title here..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="py-3 px-5 block w-full border bg-[#1E293B] border-gray-700 text-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none pr-[110px]"
        />
        <Button onClick={handleAddName} label="Add Task" style="button-blue absolute right-[1px] top-[1px] bottom-[1px]" />
      </div>

      <h2 className="my-6 text-lg text-[#2563EB] lg:text-xl font-bold">To Do:</h2>
      <ul className="todos">
        {list.map((item, index) => (
          <Item
            key={index}
            onChange={() => handleComplete(index)}
            onClick={() => handleRemove(index)}
            isActive={activeIndex === index}
            text={item}
          />
        ))}
      </ul>

      <h2 className="my-6 text-lg text-[#2563EB] lg:text-xl font-bold">Completed:</h2>
      <ul className="completed">
        {completed.map((completedTask, index) => (
          <Item key={index} text={completedTask} isActive={true} />
        ))}
      </ul>
    </div>
  );
}
