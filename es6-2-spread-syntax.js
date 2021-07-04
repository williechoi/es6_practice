/**
 * es6-2
 * Spread Syntax
 */

{
  const beaueli = { revenue: 5000, manager: "Crystal" };
  const dabida = { revenue: 8000, manager: "Sunhye" };

  const beaueliProducts = ["HGS01", "TWP01", "ER01"];
  const dabidaProducts = ["WMA01", "STR03", "STR02"];

  const ivys = { ...beaueli, ...dabida };
  console.log(ivys);

  const beaueli2 = { ...beaueli, revenue: 4000 };
  console.log(beaueli);
  console.log(beaueli2);

  // Array concatenation
  const ivysProducts = [...beaueliProducts, ...dabidaProducts];
  console.log(ivysProducts);

  // Array concatenation
  const koreaProducts = [...ivysProducts, "BM01", "MG01"];

  // Array copy
  const cmdsProducts = [...ivysProducts];

  console.log(koreaProducts);
  console.log(ivysProducts);
}
