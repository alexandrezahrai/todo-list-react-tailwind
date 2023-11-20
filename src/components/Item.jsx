/* eslint-disable react/prop-types */
import Input from "./Input";
import Button from "./Button";

export default function Item({ onChange, isActive, onClick, text }) {
  return (
    <li className="border p-5 shadow-sm rounded-xl bg-[#1E293B] border-gray-700 shadow-slate-700/[.7] flex justify-between items-center">
      <div className="left-0 flex gap-3">
        <Input
          type="checkbox"
          role="checkbox"
          onChange={onChange}
          checked={isActive} // can only check one item at a time
        />
        <label>{text}</label>
      </div>
      <Button onClick={onClick} label="Remove Task" style="button-red" />
    </li>
  );
}
