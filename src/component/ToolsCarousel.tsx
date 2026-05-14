import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ToolDataT } from "../data/ToolDataT";
import CategoryIcon from "./CategoryIcon";

interface Props {
  tools: ToolDataT[];
  categorySlug: string;
}

const ToolCard: React.FC<{
  tool: ToolDataT;
  categorySlug: string;
  variant: "carousel" | "grid";
}> = ({ tool, categorySlug, variant }) => (
  <Link
    to={`/categories/${categorySlug}/${tool.id}?from=category`}
    className={variant === "carousel" ? "carousel-card" : "tool-grid-card"}
  >
    <div className="carousel-card-icon">
      <CategoryIcon category={tool.category} />
    </div>
    <h2 className="carousel-card-title">{tool.title}</h2>
    <p className="carousel-card-desc">{tool.description.trim()}</p>
    <span className="carousel-card-cta">Open</span>
  </Link>
);

const ToolsCarousel: React.FC<Props> = ({ tools, categorySlug }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState<boolean>(false);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const overflow = el.scrollWidth > el.clientWidth + 4;
    setHasOverflow(overflow);
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(
      overflow && el.scrollLeft + el.clientWidth < el.scrollWidth - 4
    );
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [tools, updateScrollState]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".carousel-card");
    const distance = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile: swipeable carousel */}
      <div className="carousel md:hidden">
        {hasOverflow && (
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <div className="carousel-track" ref={trackRef}>
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              categorySlug={categorySlug}
              variant="carousel"
            />
          ))}
        </div>

        {hasOverflow && (
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>

      {/* Desktop: 3-column grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            categorySlug={categorySlug}
            variant="grid"
          />
        ))}
      </div>
    </>
  );
};

export default ToolsCarousel;
