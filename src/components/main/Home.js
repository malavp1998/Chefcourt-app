import React from "react";
import { useUserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../context/DatabaseService";
import Crousel from "./Crousel";
import Header from "./Header";
import ChefCard from "./ChefCard";
import Footer from "./Footer";

export default function Home() {
  const { logout, user } = useUserAuth();
  const chefData = [
    {
      id: 1,
      chefPicture:
        "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoZWZ8ZW58MHx8MHx8fDA%3D",
      chefName: "Chef John",
      yearsOfExperience: 10,
      numberOfRecipes: 3,
      bio: "Credited for the growing popularity of modern Asian cuisine, Chef David Chang founded and owns the Momofuku Restaurant Group, a global enterprise of restaurants, cocktail",
      recipes: [
        {
          recipeName: "Spaghetti Bolognese",
          ingredients: [
            "spaghetti",
            "ground beef",
            "tomato sauce",
            "onion",
            "garlic",
          ],
          cookingMethod:
            "Boil spaghetti. Cook beef, onion, and garlic. Mix with tomato sauce. Serve hot.",
          rating: 4.5,
        },
        {
          recipeName: "Chicken Parmesan",
          ingredients: [
            "chicken breast",
            "bread crumbs",
            "tomato sauce",
            "mozzarella cheese",
            "olive oil",
          ],
          cookingMethod:
            "Coat chicken with bread crumbs. Fry until golden. Top with sauce and cheese. Bake until bubbly.",
          rating: 4.8,
        },
        {
          recipeName: "Chocolate Brownies",
          ingredients: ["butter", "sugar", "eggs", "flour", "cocoa powder"],
          cookingMethod:
            "Melt butter. Mix with sugar, eggs, flour, and cocoa powder. Bake at 350°F for 25 minutes.",
          rating: 4.7,
        },
      ],
      likes: 1500,
    },
    {
      id: 2,
      chefPicture:
        "https://foodie.sysco.com/wp-content/uploads/2019/07/MarcusMeansChefProfile_800x850.jpg",
      chefName: "Chef Emily",
      yearsOfExperience: 8,
      numberOfRecipes: 3,
      bio: "Chef Emily his his culinary education at the famous French School Ecole Du Domaine in Paris, Serge developed his technique whilst working with some the of worlds renowned",
      recipes: [
        {
          recipeName: "Grilled Salmon",
          ingredients: [
            "salmon fillet",
            "lemon",
            "olive oil",
            "garlic",
            "herbs",
          ],
          cookingMethod:
            "Marinate salmon with lemon, olive oil, garlic, and herbs. Grill until cooked through.",
          rating: 4.6,
        },
        {
          recipeName: "Caesar Salad",
          ingredients: [
            "romaine lettuce",
            "croutons",
            "Parmesan cheese",
            "Caesar dressing",
            "chicken breast",
          ],
          cookingMethod:
            "Toss lettuce, croutons, and Parmesan. Grill chicken, slice, and add. Drizzle with Caesar dressing.",
          rating: 4.4,
        },
        {
          recipeName: "Mango Salsa",
          ingredients: [
            "mango",
            "red onion",
            "cilantro",
            "lime juice",
            "jalapeno",
          ],
          cookingMethod:
            "Dice mango, onion, cilantro, and jalapeno. Mix with lime juice. Chill before serving.",
          rating: 4.9,
        },
      ],
      likes: 1800,
    },
    {
      id: 3,
      chefPicture:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
      chefName: "Chef Michael",
      yearsOfExperience: 12,
      numberOfRecipes: 3,
      bio: "Credited for the growing popularity of modern Asian cuisine, Chef David Chang founded and owns the Momofuku Restaurant Group, a global enterprise of restaurants, cocktail",
      recipes: [
        {
          recipeName: "Beef Stir Fry",
          ingredients: [
            "beef strips",
            "bell peppers",
            "broccoli",
            "soy sauce",
            "ginger",
          ],
          cookingMethod:
            "Stir fry beef, peppers, and broccoli in soy sauce and ginger. Serve over rice.",
          rating: 4.7,
        },
        {
          recipeName: "Shrimp Pasta",
          ingredients: [
            "shrimp",
            "linguine",
            "cream sauce",
            "garlic",
            "parsley",
          ],
          cookingMethod:
            "Cook pasta. Sauté shrimp, garlic, and parsley. Mix with cream sauce. Serve hot.",
          rating: 4.8,
        },
        {
          recipeName: "Tiramisu",
          ingredients: [
            "ladyfingers",
            "coffee",
            "marsala wine",
            "mascarpone cheese",
            "cocoa powder",
          ],
          cookingMethod:
            "Dip ladyfingers in coffee and wine. Layer with mascarpone. Dust with cocoa. Chill before serving.",
          rating: 4.9,
        },
      ],
      likes: 2000,
    },
    {
      id: 4,
      chefPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIEByeLetFCJ3ZyzezWNQiu0ub79n97H8iQ&usqp=CAU",
      chefName: "Chef Sarah",
      yearsOfExperience: 7,
      numberOfRecipes: 3,
      bio: "Credited for the growing popularity of modern Asian cuisine, Chef David Chang founded and owns the Momofuku Restaurant Group, a global enterprise of restaurants, cocktail",
      recipes: [
        {
          recipeName: "Vegetable Stir Fry",
          ingredients: [
            "tofu",
            "mixed vegetables",
            "soy sauce",
            "sesame oil",
            "ginger",
          ],
          cookingMethod:
            "Stir fry tofu and vegetables in soy sauce, sesame oil, and ginger. Serve hot.",
          rating: 4.6,
        },
        {
          recipeName: "Caprese Salad",
          ingredients: [
            "tomatoes",
            "mozzarella cheese",
            "basil leaves",
            "balsamic glaze",
            "olive oil",
          ],
          cookingMethod:
            "Slice tomatoes and mozzarella. Arrange with basil leaves. Drizzle with balsamic glaze and olive oil.",
          rating: 4.5,
        },
        {
          recipeName: "Lemon Bars",
          ingredients: ["butter", "sugar", "flour", "eggs", "lemon juice"],
          cookingMethod:
            "Mix butter, sugar, flour, and eggs. Add lemon juice. Bake at 350°F for 20 minutes. Dust with powdered sugar.",
          rating: 4.7,
        },
      ],
      likes: 1600,
    },
    {
      id: 5,
      chefPicture:
        "https://media.istockphoto.com/id/1142230160/photo/beautiful-chef-working-in-a-kitchen-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=a_e524ohK5mfy8Ef2QyeENKQHShv7z6vv-ZztCUCeCc=",
      chefName: "Chef Ram",
      yearsOfExperience: 19,
      numberOfRecipes: 3,
      likes: 2200,
      bio: "Credited for the growing popularity of modern Asian cuisine, Chef David Chang founded and owns the Momofuku Restaurant Group, a global enterprise of restaurants, cocktail",
      recipes: [
        {
          recipeName: "Beef Tacos",
          ingredients: [
            "beef",
            "tortillas",
            "lettuce",
            "tomatoes",
            "sour cream",
          ],
          cookingMethod:
            "Cook beef. Warm tortillas. Assemble with lettuce, tomatoes, and sour cream. Serve warm.",
          rating: 4.8,
        },
        {
          recipeName: "Mushroom Risotto",
          ingredients: [
            "arborio rice",
            "mushrooms",
            "onion",
            "vegetable broth",
            "Parmesan cheese",
          ],
          cookingMethod:
            "Sauté rice, mushrooms, and onion. Add broth gradually, stirring until absorbed. Stir in Parmesan. Serve hot.",
          rating: 5.0,
        },
        {
          recipeName: "Lemon Bars",
          ingredients: ["butter", "sugar", "flour", "eggs", "lemon juice"],
          cookingMethod:
            "Mix butter, sugar, flour, and eggs. Add lemon juice. Bake at 350°F for 20 minutes. Dust with powdered sugar.",
          rating: 4.7,
        },
      ],
    },
    {
      id: 6,
      chefPicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUS8xRCmWZMthfPDFoln278Tom2g6SczkAfw&usqp=CAU",
      chefName: "Chef David",
      yearsOfExperience: 9,
      numberOfRecipes: 3,
      likes: 600,
      bio: "Credited for the growing popularity of modern Asian cuisine, Chef David Chang founded and owns the Momofuku Restaurant Group, a global enterprise of restaurants, cocktail",
      recipes: [
        {
          recipeName: "Beef Tacos",
          ingredients: [
            "beef",
            "tortillas",
            "lettuce",
            "tomatoes",
            "sour cream",
          ],
          cookingMethod:
            "Cook beef. Warm tortillas. Assemble with lettuce, tomatoes, and sour cream. Serve warm.",
          rating: 4.8,
        },
        {
          recipeName: "Mushroom Risotto",
          ingredients: [
            "arborio rice",
            "mushrooms",
            "onion",
            "vegetable broth",
            "Parmesan cheese",
          ],
          cookingMethod:
            "Sauté rice, mushrooms, and onion. Add broth gradually, stirring until absorbed. Stir in Parmesan. Serve hot.",
          rating: 4.6,
        },
        {
          recipeName: "Lemon Bars",
          ingredients: ["butter", "sugar", "flour", "eggs", "lemon juice"],
          cookingMethod:
            "Mix butter, sugar, flour, and eggs. Add lemon juice. Bake at 350°F for 20 minutes. Dust with powdered sugar.",
          rating: 4.7,
        },
      ],
    },
  ];
  return (
    <div>
      <Header />
      <Crousel />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {chefData.map((chef, index) => {
          return <ChefCard key={index} chefInfo={chef} />;
        })}
      </div>
      <Footer isSticy={false} />
    </div>
  );
}
