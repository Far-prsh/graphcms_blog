import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "@/Services";





const Header = () => {
  
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);


  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-pink-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white drop-shadow-md">
              Far Blog
            </span>
          </Link>
        </div>
        <div className="md:contents md:float-left hidden">
          {categories.map((category) => 
          (  <Link href={`/category/${category.slug}`} key={category.slug}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>)
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
