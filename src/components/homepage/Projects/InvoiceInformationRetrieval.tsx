import DwgIn from "../../../../src/assets/images/homepage/DwgIn.jpg"

const InvoiceInformationRetrieval = () => {
    return (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 text-center">
        {/* Image */}
        <img
          src= {DwgIn} // Replace with your actual image URL
          alt="Drawing Comparison"
          className="w-full md:w-1/2 h-auto mx-auto object-contain mb-6"
        />
  
        {/* Heading */}
        <h2 className="text-3xl font-bold text-neutral-700 mb-4">SmartExtract</h2>
  
        {/* Description */}
        <p className="text-neutral-600 text-base md:text-lg max-w-3xl mx-auto mb-6">
        A versatile GenAI-powered system engineered to seamlessly extract predefined fields from invoices of various formats, optimizing financial data processing.
        </p>
  
        {/* Button */}
        <button
    onClick={() => window.open("http://10.245.146.250:8785/", "_blank")}
    className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-500 transition-all"
  >
    Visit SmartExtract
  </button>
      </div>
    );
  };

  export default InvoiceInformationRetrieval;