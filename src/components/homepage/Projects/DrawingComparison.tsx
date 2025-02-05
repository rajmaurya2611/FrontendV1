import DwgIn from "../../../../src/assets/images/homepage/DwgIn.jpg"

const DrawingComparison = () => {
    return (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 text-center">
        {/* Image */}
        <img
          src= {DwgIn} // Replace with your actual image URL
          alt="Drawing Comparison"
          className="w-full md:w-1/2 h-auto mx-auto object-contain mb-6"
        />
  
        {/* Heading */}
        <h2 className="text-3xl font-bold text-neutral-700 mb-4">SketchVision Agent</h2>
  
        {/* Description */}
        <p className="text-neutral-600 text-base md:text-lg max-w-3xl mx-auto mb-6">
          This section allows you to compare your drawings, track progress, and explore various
          drawing techniques. It’s perfect for an artists looking to improve their skills and
          benchmark their work.
        </p>
  
        {/* Button */}
        <button
    onClick={() => window.open("http://10.245.146.250:5001/", "_blank")}
    className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-500 transition-all"
  >
    Compare Your Drawings
  </button>
      </div>
    );
  };

  export default DrawingComparison;