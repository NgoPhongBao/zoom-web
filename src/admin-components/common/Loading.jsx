import { Spin } from "antd";
export default function Loading() {
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 z-[2000] flex justify-center items-center bg-slate-200/50 transition-all duration-300 visible opacity-100`}
    >
      <Spin tip={`Loading` + "..."} size="large" />
    </div>
  );
}
