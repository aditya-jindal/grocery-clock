import { useEffect } from "react";
import { Header } from "./Header";

export function RecipiePage({ recipie, setShowRecipie }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-4/6 flex flex-col items-center">
      <Header>Your Cookbook!</Header>
      <button
        onClick={() => setShowRecipie(false)}
        className="mb-4 text-amber-400 mr-auto font-semibold"
      >
        &larr; Go Back
      </button>
      <div className="w-full h-[68vh] relative flex flex-col items-center z-0">
        <img
          src={recipie.image}
          alt={recipie.name}
          className="w-full h-full rounded-lg"
        />
        <div className="absolute bottom-0 text-center bg-slate-100 h-2/5 w-3/6 p-4 rounded-t-md flex flex-col justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-500">{recipie.name}</h1>
          <div className="flex gap-x-4 justify-center">
            <p>
              ⏰:{" "}
              <span className="font-semibold ">{recipie.prepTime} mins</span>
            </p>
            <p>
              <span className="font-semibold">🍜</span>:{" "}
              <span className="font-semibold">{recipie.serves} serves</span>
            </p>
          </div>
          <button
            className="bg-yellow-500 hover:bg-yellow-400 transition-colors text-white rounded-md p-2 w-4/6 font-semibold"
            onClick={() => {
              const summaryElement = document.getElementById("about");
              const elementPosition =
                summaryElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition; // Adjust this value based on the height of your navbar

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }}
          >
            ⬇️ Read More ⬇️
          </button>
        </div>
      </div>
      <div id="about" className="flex flex-col gap-y-16">
        <div className="mt-28 flex flex-col gap-y-6">
          <h2 className="text-2xl font-bold">About</h2>
          <div
            className="text-l"
            dangerouslySetInnerHTML={{ __html: recipie.description }}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold">Ingredients</h2>
          <ul className="text-l capitalize list-disc list-inside p-4 rounded-md">
            {recipie.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{ingredient[0]}</span> -{" "}
                {ingredient[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
