const SentButton = ({ text, type, onClick }) => {
  return (
    /* mt-8 */
    <div
      onClick={onClick}
      className={`flex items-center rounded-lg p-4 h-8 ${
        type === "sent"
          ? "bg-emerald-400 hover:bg-emerald-500"
          : "bg-gray-400 hover:bg-gray-600"
      } hover:cursor-pointer hover:shadow-md`}
    >
      <p className="text-slate-50 text-sm font-medium">{text}</p>
    </div>
  );
};

export default SentButton;
