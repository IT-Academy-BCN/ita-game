export default function AvatarTemp({ children }) {
  return (
    <div className="avatar placeholder indicator">
      {children}
      <div className="w-14 rounded-full bg-neutral text-neutral-content">
        <span className=" text-black">hola</span>
      </div>
    </div>
  );
}
