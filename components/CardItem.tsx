import React from "react";
import { Card, CardHeader } from "@nextui-org/react";
import { CardItemProps } from "@/types";

const CardItem: React.FC<CardItemProps> = ({ dato }) => {
  return (
    <Card className="min-w-[200px] flex items-center justify-center">
      <CardHeader className="flex gap-3" style={{ backgroundColor: '#55555' }}>
        <div className="flex flex-col items-center w-full">
          <p className="text-md">{dato.title}</p> {/* Displaying name */}
          <p className="text-small ">{`Compra: ${dato.values.compra}`}</p> {/* Displaying value compra */}
          <p className="text-small ">{`Venta: ${dato.values.venta}`}</p> {/* Displaying value venta */}
          <p 
            className="text-small rounded-md text-center p-2 mt-2" 
            style={{backgroundColor: dato.variation.backgroundColor}}
          >
            {`24Hs : ${dato.variation.value}`}
          </p> {/* Displaying percentage */}
        </div>
      </CardHeader>
    </Card>
  );
};

export default CardItem;
