import React from "react";
import { useNavigate } from "react-router-dom";
import dishImage from "@/assets/images/ui2.png";
import stall from "@/assets/images/stall.png";

const FeaturedDishes = () => {
  const navigate = useNavigate();

  // Redirects to a random recipe ID (e.g., ID: 1)
  const handleViewRecipe = () => {
    navigate("/recipe/1");
  };

  return (
    <section id="featured-dishes" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="font-helvetica text-4xl md:text-5xl mb-6">
            Featured Recipes
          </h2>
        </div>

        {/* Top Image - Removed mb to stay close to the box */}
        <div className="w-full">
          <img
            src={stall}
            alt="Stall"
            className="w-full h-64 md:h-[14rem] object-cover rounded-t-lg z-10"
          />
        </div>

        {/* The Hollow Rectangular Container */}
        <div className="relative border-4 border-[#FFD700] overflow-hidden flex flex-col md:flex-row items-start shadow-xl">
          
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={dishImage}
              alt="Featured Dish"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 p-8 flex flex-col items-end text-right">
            {/* Adjusted margin-bottom from 12rem to something more manageable */}
            <h3 className="font-tangerine text-8xl font-bold tracking-wider mb-[12rem] leading-none">
              Featured Dish
            </h3>

            <div className="space-y-12 text-white-900 leading-relaxed mb-10">
              <p>
                This dish is a culinary masterpiece as it blends culture with taste.
                Originating from the medieval century from the Roman Empire, it has a rich nutrient enrichment, 
                containing a variety of herbs and spices that not only enhance its flavor but also 
                provide numerous health benefits.
              </p>
              <p>
                The significance of this recipe lies in its complex layering of
                flavors, achieved through hours of slow-cooking and a precise
                blend of heirloom spices. Every bite tells a story of craftsmanship
                and dedication to the art of food.
              </p>
            </div>

            {/* View Recipe Button */}
            <button 
              onClick={handleViewRecipe}
              className="px-8 py-3 border-2 border-[#FFD700] text-white font-bold uppercase tracking-widest hover:bg-yellow-500 transition-all rounded-md shadow-md"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;