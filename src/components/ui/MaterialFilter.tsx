
import { useState } from "react";
import { materials, Material } from "../../utils/products";

interface MaterialFilterProps {
  selectedMaterial: Material | null;
  onChange: (material: Material | null) => void;
}

const MaterialFilter = ({ selectedMaterial, onChange }: MaterialFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMaterialClick = (material: Material) => {
    if (selectedMaterial === material) {
      onChange(null); // Deselect if already selected
    } else {
      onChange(material);
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Materiał</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-gray-600 md:hidden"
        >
          {isExpanded ? "Zwiń" : "Rozwiń"}
        </button>
      </div>
      
      <div className={`space-y-2 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        {materials.map((material) => (
          <div key={material.id} className="flex items-start">
            <button
              onClick={() => handleMaterialClick(material.id as Material)}
              className={`flex items-center ${
                selectedMaterial === material.id 
                  ? "text-neobags-charcoal font-medium" 
                  : "text-gray-600 hover:text-neobags-charcoal"
              }`}
            >
              <span className={`w-4 h-4 mr-3 border rounded-sm flex items-center justify-center ${
                selectedMaterial === material.id 
                  ? "border-neobags-charcoal bg-neobags-charcoal text-white" 
                  : "border-gray-300"
              }`}>
                {selectedMaterial === material.id && (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-3 h-3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </span>
              <div className="flex flex-col">
                <span>{material.name}</span>
                <span className="text-xs text-gray-500 mt-1">{material.description.substring(0, 35)}...</span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialFilter;
