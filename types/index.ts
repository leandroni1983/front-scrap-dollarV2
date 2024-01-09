import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

type ValuesType = {
  compra: string
  venta: string
}

type VariationType ={
  value: string
  backgroundColor: string
}
export type DataType = {
	date: Date
	title: string
	values: ValuesType
	variation: VariationType
  };

export interface CardItemProps {
    dato: DataType;
  }
  