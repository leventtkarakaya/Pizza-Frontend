import React from "react";
import Image from "next/image";
import fabrika from "@/public/fabrika.png";
export default function page() {
  return (
    <>
      <div className="px-10 py-5 ">
        <div className="grid grid-cols-3 font-sans gap-x-5 max-lg:grid-cols-1">
          <div className="col-span-2">
            <Image
              src={fabrika}
              alt="fabrika"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <div className="space-y-5">
            <h1 className="text-3xl font-bold">Hakkımızda</h1>
            <p className="text-lg leading-7 tracking-wide ">
              PizzaLand'ın Hikayesi , 1970'da İzmir'in kalbinde, Levent
              KARAKAYA'nın pizzaya olan derin sevgisiyle doğdu. Levent KARAKAYA,
              çocukluğundan beri pizzanın eşsiz lezzetine hayran kalmıştı ve
              kendi pizzalarını yapmanın hayalini kuruyordu. 1970'da, hayalini
              gerçeğe dönüştürmeye karar verdi ve küçük bir pizza dükkanı açtı.
              Levent KARAKAYA, her zaman taze ve kaliteli malzemeler kullanarak,
              kendi özel tarifleriyle müşterilerine lezzetli pizzalar sunmayı
              hedefliyordu. PizzaLand, kısa sürede İzmir'in en sevilen pizza
              yerlerinden biri haline geldi. Müşteriler, Levent KARAKAYA'nın
              lezzetli pizzaları ve samimi hizmetinden etkilendi. Yıllar
              geçtikçe, PizzaLand büyüdü ve daha fazla müşteriye ulaşmayı
              hedefledi. Ancak Levent KARAKAYA'nın kalite ve lezzet konusunda
              taviz vermeyen yaklaşımı hiç değişmedi. Bugün, PizzaLand hala
              Levent KARAKAYA'nın vizyonunu yaşatıyor: Her lokmada mutluluk
              yaratmak. Taze ve kaliteli malzemeler kullanarak, eşsiz lezzetler
              sunmaya devam ediyor ve müşteri memnuniyetini önceliklendirerek,
              İzmir'in en sevilen pizza yerlerinden biri olmaya devam ediyor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
