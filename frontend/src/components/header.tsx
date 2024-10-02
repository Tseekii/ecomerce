"use client";

export const Header = () => {
  const { user } = useUser();
  console.log("user", user);

  return (
    <header className="">
      <div className="flex items-center gap-6">
        <img src="/Logo.png" alt="" />
        <span>Ангилал</span>
        <button>Бүтээгдэхүүн хайх</button>
        <img src="/Save.png" alt="" />
        <img src="shopping-cart.png" alt="" />
      </div>
    </header>
  );
};
