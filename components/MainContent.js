"use client";
import Card from "./Card";
import cards from "../data/cardData";
import { useEffect, useState } from "react";
import { useLanguage } from "./context/LanguageContext";

export default function MainContent({ searchQuery }) {
  const [filteredCards, setFilteredCards] = useState(cards);
  const { translations } = useLanguage();

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  const handleSearch = (query) => {
    if (query === "") {
      setFilteredCards(cards);
    } else {
      setFilteredCards(
        cards.filter((card) => {
          // card.title.toLowerCase().includes(query.toLowerCase())
          translations[card.titleKey]
            .toLowerCase()
            .includes(query.toLowerCase());
        })
      );
    }
  };
  return (
    <div className="container sm:p-0 px-2 mt-5  mx-auto ">
      <div className="w-full sm:w-[70%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCards.map((card) => (
            <Card
              // key={card.title}
              key={card.titleKey}
              // title={card.title}
              title={translations[card.titleKey]}
              description={translations[card.descriptionKey]}
              articles={translations.articles_count.replace(
                "{{count}}",
                filteredCards.length
              )}
              image={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
