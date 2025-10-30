export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
      <span className="text-sm">Loading...</span>
    </div>
  );
}