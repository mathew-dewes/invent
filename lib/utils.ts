import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { StockStatus } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function setStatusColor(status: StockStatus){
   let style;
          switch (status) {
  
              case "In Stock":
                  style = 'bg-green-400'
                  break;
              case 'Low Stock':
                  style = 'bg-yellow-400'
                  break;
              default:
                  style = 'bg-red-400'
  
          }
  
          return style
  
  

      
}
