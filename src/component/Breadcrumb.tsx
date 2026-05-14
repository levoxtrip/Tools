import React from "react";
import { Link } from "react-router-dom";

interface Crumb {
  to?: string; // omit on the last (current) crumb
  label: string;
}

interface Props {
  items: Crumb[];
}

const Breadcrumb: React.FC<Props> = ({ items }) => {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <React.Fragment key={`${item.label}-${i}`}>
            {item.to && !isLast ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span className="current">{item.label}</span>
            )}
            {!isLast && <span className="sep">/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
