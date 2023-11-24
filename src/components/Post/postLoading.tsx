const PostLoading = () => {
  return [0, 1, 2].map((val) => (
    <div
      className="max-w-[50rem] bg-gray-100 mx-auto mb-4 p-4 rounded-md cursor-pointer hover:bg-gray-200 transition"
      key={val}
    >
      <div className="w-full h-48 bg-gradient-to-r from-gray-400"></div>
      <div className="flex items-center">
        <div className="w-6 h-6 m-2 bg-gray-200"></div>
        <span className="text-xs w-4 h-4 bg-gray-200"></span>
      </div>
      <h2 className="text-xl capitalize font-semibold hover:underline w-3/4 h-4 bg-gray-200 mb-2"></h2>
      <div className="flex gap-2 mb-2">
        <span key={0} className="bg-gray-200 w-8 h-2"></span>
        <span key={1} className="bg-gray-200 w-8 h-2"></span>
        <span key={2} className="bg-gray-200 w-8 h-2"></span>
      </div>
      <p className="bg-gray-200 w-full h-20"></p>
    </div>
  ));
};

export default PostLoading;
