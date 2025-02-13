import face from "../../../images/dodge.png";
import loo from "../../../images/wheels-logo.png"

export default function Profile() {
  return (
    <div className="py-8 px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-lg space-y-2 p-6 flex items-center">
        <img
          className="block mx-auto h-24 rounded-full object-fill sm:mx-0 sm:shrink-0"
          src={loo}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left ml-4">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">JOTHIPRAKASH</p>
            <p className="text-slate-500 font-medium">Dream Wheel  Motors</p>
          </div>
          <a href="https://wa.me/9025760713">
          <button className="mt-3 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
          </a>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg space-y-2 p-6 flex items-center">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={loo}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left ml-4">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">ASHOK</p>
            <p className="text-slate-500 font-medium">Dream Wheel Motors</p>
          </div>
          <a href="https://wa.me/9025760713">
          <button className="mt-3 px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            Message
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}
