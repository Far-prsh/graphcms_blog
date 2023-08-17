import { getCategories } from "@/Services";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 ">Categories</h3>
      {categories.map((category)=>(
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className="block mb-4 pb-4 cursor-pointer">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
