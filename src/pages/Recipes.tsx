import MainHeader from "@/components/headers/MainHeader";
import RecipeFiltersSection from "@/sections/RecipeFiltersSection";
import RecipeListingSection from "@/sections/RecipeListingSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";
import recipesBanner from "../assets/images/recipes.png";

const Recipes = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <MainHeader />

      {/* Main Content */}
      <main>
        {/* Banner Section */}
        <section>
          <img
            src={recipesBanner}
            alt="Recipes Banner"
            className="w-full h-full object-cover"
          />
        </section>

        {/* Recipe Filters */}
        <RecipeFiltersSection />

        {/* Recipe Listing */}
        <RecipeListingSection />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Recipes;
