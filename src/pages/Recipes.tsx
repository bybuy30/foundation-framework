import MainHeader from "@/components/headers/MainHeader";
import AmbientParticles from "@/components/layout";
import RecipeFiltersSection from "@/sections/RecipeFiltersSection";
import RecipeListingSection from "@/sections/RecipeListingSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";
import recipesBanner from "../assets/images/recipes.png";
import FeaturedDishes from "@/sections/FeaturedDishes";
import ui from "../assets/images/ui2.png";

const Recipes = () => {
  return (
    <div className="relative min-h-screen bg-background font-body overflow-x-hidden">

      <MainHeader />

      <main className="relative z-10">
        {/* Banner Section */}
        <section className="relative">
          <img
            src={recipesBanner}
            alt="Recipes Banner"
            className="w-full h-auto object-cover"
          />
        </section>

        <RecipeFiltersSection />
        <RecipeListingSection />

        <FeaturedDishes />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default Recipes;